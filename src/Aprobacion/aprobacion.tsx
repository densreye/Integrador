import React from 'react';
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "utils/Button";
import { urlRubricas } from "utils/endpoints";
import ListadoGenerico from "utils/ListadoGenerico";
import Paginacion from "utils/Paginacion";
import { rubricaDTO } from "rubricas/rubricas.model";
 
import Autorizado from "Auth/Autorizado";
import confirmarEstado from "./confaprob";
 

import { Card, CardContent,} from "@mui/material";


export default function IndiceAprobacion() {
 

    const [generos,setGeneros]= useState<rubricaDTO[]>();
    const [totalDePaginas,setTotalDePaginas]=useState(0);
    const [recordsPorPagina, setRecordsPorPagina]=useState(10);
    const [pagina,setPagina]=useState(1);
 

    const history = useHistory();
   
    useEffect(()=>{
        cargarDatos();

    //eslint-disable-next-line react-hooks/exhaustive-deps
    },[pagina,recordsPorPagina])
    function cargarDatos(){
        axios.get(urlRubricas,{
            params: {pagina,recordsPorPagina: recordsPorPagina}
        })
        .then((respuesta:AxiosResponse<rubricaDTO[]>)=>{
            const totalDeRegistros= 
                parseInt(respuesta.headers['cantidadtotalregistros'],10);
            setTotalDePaginas(Math.ceil(totalDeRegistros/recordsPorPagina));
            console.log(respuesta.data);
            setGeneros(respuesta.data);
        })
    }




    async function aprobarEstado(rubricaEditar:rubricaDTO) {
        console.log("BOTON APROBADO",rubricaEditar)
        rubricaEditar.estado="Aprobado";
        try{
            await axios.put(`${urlRubricas}/${rubricaEditar.id}`,rubricaEditar);
            history.push('/rubricas')
        }
        catch(error){
            //setErrores(error.response.data)
            console.log(error);
        }
        
    }
 
    async function rechazarEstado(rubricaEditar:rubricaDTO) {
        console.log("BOTON Rechazado",rubricaEditar)
        rubricaEditar.estado="Rechazado";
        try{
            await axios.put(`${urlRubricas}/${rubricaEditar.id}`,rubricaEditar);
            history.push('/rubricas')
        }
        catch(error){
            //setErrores(error.response.data)
            console.log(error);
        }
        
    }

return (
        <div className="container col-lg-9">
            <h3>Rúbricas para aprobar</h3>

            
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
                            <th>Nombre</th>
                            <th>Criterios</th>
                            <th>Clasificación</th>
                            <th>Fecha Creación</th>
                            <th>Estado</th>
                            <Autorizado role="admin" autorizado={ <th>Acción</th>}/>
                        </tr>
                    </thead>
                    <tbody>
                        {generos?.map(genero=>
                            <tr key={genero.id} className="color"><td>
                                    {genero.nombre}
                                </td>
                                <td>CRITERIOS</td>
                                <td>{genero.clasificacion}</td>
                                <td>{genero.fechaCreacion}</td>
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
                              
                                     <Button className='btn btn-primary m-2 "  '
                                    onClick={()=>confirmarEstado(()=> aprobarEstado(genero), 
                                        `¿Desea aprobar ${genero.nombre} ?`, 'Realizar')}
                                        style={{backgroundColor: '#001c43'}}   >Aprobar</Button>
                                    <Button
                                    onClick={()=>confirmarEstado(()=> rechazarEstado(genero), 
                                        `¿ Seguro desea rechazar la rúbrica: ${genero.nombre} ?`, 'Realizar')}
                                        className="btn btn-danger m-2" >Rechazar</Button>
                                     
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
        </div>

    )
}