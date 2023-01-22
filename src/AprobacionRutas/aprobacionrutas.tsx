import React from 'react';
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Button from "utils/Button";
import { urlRutas } from "utils/endpoints";
import ListadoGenerico from "utils/ListadoGenerico";
import Paginacion from "utils/Paginacion";
import { rutaDTO } from 'RutasMedicion/rutasmed.model';
import confirmar from "utils/Confirmar";
import Autorizado from "Auth/Autorizado";
import confirmarEstado from "./confirmacionruta";
import Swal from "sweetalert2";
 

import { Card, CardContent,} from "@mui/material";


export default function IndiceAprobacionRutas() {
    const { id }: any = useParams();

    const [generos,setGeneros]= useState<rutaDTO[]>();
    const [totalDePaginas,setTotalDePaginas]=useState(0);
    const [recordsPorPagina, setRecordsPorPagina]=useState(10);
    const [pagina,setPagina]=useState(1);
    const [modificar, setmodificar]=useState<rutaDTO>();

    const history = useHistory();
   
    useEffect(()=>{
        cargarDatos();

    //eslint-disable-next-line react-hooks/exhaustive-deps
    },[pagina,recordsPorPagina])
    function cargarDatos(){
        axios.get(urlRutas,{
            params: {pagina,recordsPorPagina: recordsPorPagina}
        })
        .then((respuesta:AxiosResponse<rutaDTO[]>)=>{
            const totalDeRegistros= 
                parseInt(respuesta.headers['cantidadtotalregistros'],10);
            setTotalDePaginas(Math.ceil(totalDeRegistros/recordsPorPagina));
            console.log(respuesta.data);
            setGeneros(respuesta.data);
        })
    }




    async function aprobarEstado(rutaEditar:rutaDTO) {
        console.log("BOTON APROBADO",rutaEditar)
        rutaEditar.estado="Aprobado";
        try{
            await axios.put(`${urlRutas}/${rutaEditar.id}`,rutaEditar);
            history.push('/rubricas')
        }
        catch(error){
            //setErrores(error.response.data)
            console.log(error);
        }
        
    }
 
    async function rechazarEstado(rutaEditar:rutaDTO) {
        console.log("BOTON Rechazado",rutaEditar)
        rutaEditar.estado="Rechazado";
        try{
            await axios.put(`${urlRutas}/${rutaEditar.id}`,rutaEditar);
            history.push('/rubricas')
        }
        catch(error){
            //setErrores(error.response.data)
            console.log(error);
        }
        
    }

return (
        <>
            <h3>Rutas de Medición para aprobar</h3>

            
            <Autorizado role="admin" autorizado={
            
            <>
            
            <b>Estás autorizado</b>
            </>}
            
                noAutorizado={<b>No autorizado</b>}
                
            />
            <div className="form-group" style={{width:'150px'}}>
                <label> Registros por página: </label>
                <select 
                    defaultValue={10}
                    className="form-control" 
                    onChange={e=>{
                        setPagina(1)
                        setRecordsPorPagina(parseInt(e.currentTarget.value,10))}}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                </select>
            </div>
            <Card sx={{ marginTop:10 }}>
            <CardContent sx={{ paddingY: 4, paddingX: 1 }}>
            <ListadoGenerico listado={generos}>
                <table className="table table-bordered">
                    <thead>
                        <tr className="color">
                            <th>Id Carrera</th>
                            <th>Id Curso</th>
                            <th>Código Materia</th>
                            <th>Medición</th>
                            <th>Materia</th>
                            <th>Estado</th>
                            
                            <Autorizado role="admin" autorizado={ <th>Acción</th>}/>
                        </tr>
                    </thead>
                    <tbody>
                        {generos?.map(genero=>
                            <tr key={genero.idCarrera}>
                                <td>
                                    {genero.idCurso}
                                </td>
                                <td>{genero.codigoMateria}</td>
                                <td>{genero.medicion}</td>
                                <td>{genero.materia}</td>
                                <td>{genero.estado}</td>
                                <td>{(() => {
                                    switch (genero.estado) {
                                    case "":   return <b>Pendiente</b>;
                                    case "Pendiente": return <b>Pendiente</b>;
                                    case "Aprobado":  return <b>Aprobado</b>;
                                    case "Rechazado":  return <b>Rechazado</b>;
                                    default:      return <b>Pendiente</b>;
                                    }
                                })()}</td><td><Autorizado role="admin"
                                    autorizado={<>  
                              
                                     <Button className='btn btn-primary'
                                    onClick={()=>confirmarEstado(()=> aprobarEstado(genero), 
                                        `¿Desea aprobar ${genero.idCarrera} ?`, 'Realizar')}
                                        style={{backgroundColor: '#001c43'}}   >Aprobar</Button>
                                    <Button
                                    onClick={()=>confirmarEstado(()=> rechazarEstado(genero), 
                                        `¿ Seguro desea rechazar la rúbrica: ${genero.idCarrera} ?`, 'Realizar')}
                                        className="btn btn-danger" >Rechazar</Button>
                                     
                                    </>}
                                /></td>
                                </tr>)}
                    </tbody>
                </table>
                                        
            </ListadoGenerico>
            
            <Paginacion cantidadTotalDePaginas={totalDePaginas}
            paginaActual={pagina} onChange={nuevaPagina=> setPagina(nuevaPagina)}/>
            </CardContent>
            </Card>
        </>

    )
}