import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "utils/Button";
import { urlRubricas } from "utils/endpoints";
import ListadoGenerico from "utils/ListadoGenerico";
import Paginacion from "utils/Paginacion";
import { rubricaDTO } from "./rubricas.model";
import confirmar from "utils/Confirmar";
import Autorizado from "Auth/Autorizado";

import { Card, CardContent,Grid} from "@mui/material";
import PDFPrintRubrica from "./DescPdfRubrica";

export default function IndiceRubricas() {
    const [generos,setGeneros]= useState<rubricaDTO[]>();
    const [totalDePaginas,setTotalDePaginas]=useState(0);
    const [recordsPorPagina, setRecordsPorPagina]=useState(10);
    const [pagina,setPagina]=useState(1);
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
    async function borrar(id:number){
        try{
            await axios.delete(`${urlRubricas}/${id}`)
            cargarDatos();
        }catch(error){
            console.log(error);
        }
    }

return (
        <>
            
            <h3>Rúbricas</h3>

            
            <Autorizado role="admin" autorizado={
            
            <>
            <br></br>
            
            <Link className="btn btn-primary" style={{ backgroundColor: '#001c43'}} to="rubricas/crear" >Crear Rúbrica</Link>
            <br></br>
            <br></br>
            
            <b>Estás autorizado</b>
            <br></br>
            </>}
            
                noAutorizado={<b>No autorizado</b>}
                
            />
            
            <div className="form-group" style={{width:'150px'}}>
            <br></br>
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
   
            <ListadoGenerico listado={generos}>
            <Grid className="display: 'flex',flexDirection: 'column', alignItems: 'center', direction: 'column', justify: 'space-between'">
                    <Card sx={{ marginTop:10 }}>
                    <PDFPrintRubrica></PDFPrintRubrica>    
                    <CardContent sx={{ paddingY: 5, paddingX: 1 }}>
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
                            <tr key={genero.id}><td>
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
                                })()}</td>

                                <Autorizado role="admin"
                                    autorizado={
                                    <td>{(() => {
                                        switch (genero.estado) {
                                        case "":   return  <><Link className='btn btn-primary'
                                        style={{ backgroundColor: '#001c43'}} 
                                        to={`/rubricas/editar/${genero.id}`}>
                                            Editar
                                        </Link>
                                        <Button
                                        onClick={()=>confirmar(()=>borrar(genero.id))}
                                        className="btn btn-danger">Borrar</Button></>;
                                        case "Pendiente": return <><Link className='btn btn-primary'
                                                            style={{ backgroundColor: '#212fff'}} 
                                                            to={`/rubricas/editar/${genero.id}`}>
                                                                Editar
                                                            </Link>
                                                            <Button
                                                            onClick={()=>confirmar(()=>borrar(genero.id))}
                                                            className="btn btn-danger">Borrar</Button>
                                                            </>;
                                        case "Aprobado":  return <b> </b>;
                                        case "Rechazado":  return <><Link className='btn btn-primary' 
                                                        style={{ backgroundColor: '#212fff'}} 
                                                        to={`/rubricas/editar/${genero.id}`}>
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
                </CardContent>
                <Paginacion cantidadTotalDePaginas={totalDePaginas}
            paginaActual={pagina} onChange={nuevaPagina=> setPagina(nuevaPagina)}/>  
                </Card>
             </Grid>      
                         
    
            </ListadoGenerico>

  
        
        </>

    )
}