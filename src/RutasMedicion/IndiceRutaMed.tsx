import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "utils/Button";

import ListadoGenerico from "utils/ListadoGenerico";
import Paginacion from "utils/Paginacion";
import { rubricaDTO } from "rubricas/rubricas.model";
import confirmar from "utils/Confirmar";
import Autorizado from "Auth/Autorizado";
import { urlRutas } from "utils/endpoints";

import Swal from "sweetalert2";

import { Card, CardContent,} from "@mui/material";
import { rutaCreacionDTO } from "./rutasmed.model";
import { rutaDTO } from "./rutasmed.model";

export default function RutaMedicion() {
    const [generos,setGeneros]= useState<rutaDTO []>();
    const [totalDePaginas,setTotalDePaginas]=useState(0);
    const [recordsPorPagina, setRecordsPorPagina]=useState(10);
    const [pagina,setPagina]=useState(1);
    

   
    useEffect(()=>{
        cargarDatos();

    //eslint-disable-next-line react-hooks/exhaustive-deps
    },[pagina,recordsPorPagina])
    function cargarDatos(){
        axios.get(urlRutas,{
            params: {pagina,recordsPorPagina: recordsPorPagina}
        })
        .then((respuesta:AxiosResponse<rutaDTO []>)=>{
            const totalDeRegistros= 
                parseInt(respuesta.headers['cantidadtotalregistros'],10);
            setTotalDePaginas(Math.ceil(totalDeRegistros/recordsPorPagina));
            console.log(respuesta.data);
            setGeneros(respuesta.data);
        })
    }
    async function borrar(id:number){
        try{
            await axios.delete(`${urlRutas}/${id}`)
            cargarDatos();
        }catch(error){
            console.log(error);
        }
    }

   

return (
        <>
            <h3>Rutas de Medición</h3>

            
            <Autorizado role="admin" autorizado={
            
            <>

            <br></br>
            
            <Link className="btn btn-primary" style={{ backgroundColor: '#212fff'}} to="rutasdemedicion/crear" >Crear Ruta de Medición</Link>
            <br></br>
            <br></br>
            
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
            <CardContent sx={{ paddingY: 5, paddingX: 1 }}>
            
            
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id Carrera</th>
                            <th>Id Curso</th>
                            <th>Código Materia</th>
                            <th>Medición</th>
                            <th>Materia</th>
                            <th>Estado</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {generos?.map(genero=>
                            <tr key={genero.idCarrera}><td>
                                    {genero.idCurso}
                                </td>
                                <td>CRITERIOS</td>
                                <td>{genero.codigoMateria}</td>
                                <td>{genero.medicion}</td>
                                <td>{genero.materia}</td>
                                <td>{(() => {
                                    switch (genero.estado) {
                                    case "":   return <b>Pendiente</b>;
                                    case "Pendiente": return <b>Pendiente</b>;
                                    case "Aprobado":  return <b>Aprobado</b>;
                                    case "Rechazado":  return <b>Rechazado</b>;
                                    default:      return <b>Pendiente</b>;
                                    }
                                })()}</td>

                                <Autorizado role="admin"
                                    autorizado={
                                    <td>{(() => {
                                        switch (genero.estado) {
                                        case "":   return  <><Link className='btn btn-primary'
                                        style={{ backgroundColor: '#212fff'}} 
                                        to={`/rutasdemedicion/editar/${genero.id}`}>
                                            Editar
                                        </Link>
                                        <Button
                                        onClick={()=>confirmar(()=>borrar(genero.id))}
                                        className="btn btn-danger">Borrar</Button></>;
                                        case "Pendiente": return <><Link className='btn btn-primary'
                                                            style={{ backgroundColor: '#212fff'}} 
                                                            to={`/rutasdemedicion/editar/${genero.id}`}>
                                                                Editar
                                                            </Link>
                                                            <Button
                                                            onClick={()=>confirmar(()=>borrar(genero.id))}
                                                            className="btn btn-danger">Borrar</Button>
                                                            </>;
                                        case "Aprobado":  return <b> </b>;
                                        case "Rechazado":  return <><Link className='btn btn-primary' 
                                                        style={{ backgroundColor: '#212fff'}} 
                                                        to={`/rutasdemedicion/editar/${genero.id}`}>
                                                            Editar
                                                        </Link>
                                                        <Button
                                                        onClick={()=>confirmar(()=>borrar(genero.id))}
                                                        className="btn btn-danger">Borrar</Button></>;
                                        }
                                        
                                    })()}</td>
                                    }
                                    />
                            </tr>)}
                    </tbody>
                    
                </table>
                                        
          
            <Paginacion cantidadTotalDePaginas={totalDePaginas}
            paginaActual={pagina} onChange={nuevaPagina=> setPagina(nuevaPagina)}/>
            </CardContent>
            </Card>
            
        </>
            
    )
}