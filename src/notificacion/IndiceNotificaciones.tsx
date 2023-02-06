import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
 
import { urlRubricas, urlRutas } from "utils/endpoints";
import ListadoGenerico from "utils/ListadoGenerico";
 
import { rubricaDTO } from "rubricas/rubricas.model";
import { rutaDTO } from "RutasMedicion/rutasmed.model";
import { Container, Card, CardContent, Typography, Grid, Button,Alert, AlertTitle } from "@mui/material";
import Paginacion from "utils/Paginacion";

 
export default function IndiceNotificaciones() {
    const [generos,setGeneros]= useState<rubricaDTO[]>();
    const [totalDePaginas,setTotalDePaginas]=useState(0);
    const [recordsPorPagina, setRecordsPorPagina]=useState(10);
    const [pagina,setPagina]=useState(1);
    const [rutas,setRutas]= useState<rutaDTO[]>();
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

    useEffect(()=>{
        cargarDatosRutas();
    //eslint-disable-next-line react-hooks/exhaustive-deps

    },[pagina,recordsPorPagina])
    function cargarDatosRutas(){
        axios.get(urlRutas,{
            params: {pagina,recordsPorPagina: recordsPorPagina}
        })
        .then((respuesta:AxiosResponse<rutaDTO[]>)=>{
            const totalDeRegistros= 
                parseInt(respuesta.headers['cantidadtotalregistros'],10);
            setTotalDePaginas(Math.ceil(totalDeRegistros/recordsPorPagina));
            console.log(respuesta.data);
            setRutas(respuesta.data);
        })
    }
    

return (
        <>
        
            <h3>Notificaciones</h3>

 
 
     
            <ListadoGenerico listado={generos}>
            <Grid className="display: 'flex',flexDirection: 'column', alignItems: 'center', direction: 'column', justify: 'space-between'">
                    <Card sx={{ marginTop:10 }}>
                    <CardContent sx={{ paddingY: 5, paddingX: 1 }}>
                      
                        <table className="table">
                            <thead>
                                <tr className="color">
                                    <th>Estado de Rúbricas</th>
                                </tr>
                                <hr className="hr_header"></hr>
                            </thead>
                            <tbody>
                                {generos?.map(genero=>
                                    <tr key={genero.id}>
                                
                                        <td>{(() => {
                                    switch (genero.estado) {
                                    case "":   return <Alert severity="info">
                                                       <AlertTitle><strong>Pendiente</strong></AlertTitle>
                                                            La rúbrica <strong>{genero.nombre}</strong>
                                                        </Alert>;
                                    case "Pendiente": return <Alert severity="info">
                                                        <AlertTitle><strong>Pendiente</strong></AlertTitle>
                                                            La rúbrica <strong>{genero.nombre}</strong>
                                                        </Alert>;
                                    case "Aprobado":  return <Alert severity="success"onClose={() => {}}>
                                                             <AlertTitle><strong>Aprobada</strong></AlertTitle>
                                                            La rúbrica <strong>{genero.nombre}</strong></Alert>;
                                    case "Rechazado":  return <Alert severity="error">
                                                                <AlertTitle><strong>Rechazada</strong></AlertTitle>
                                                            La rúbrica <strong>{genero.nombre}</strong></Alert>;
                                    default:      return <Alert severity="info">
                                                        <AlertTitle><strong>Pendiente</strong></AlertTitle>
                                                            La rúbrica <strong>{genero.nombre}</strong>
                                                        </Alert>;
                                    }
                                })()}</td>
                        
                                    </tr>)}
                            </tbody>
                        </table>


                    </CardContent>
                    <ListadoGenerico listado={rutas}>
            <Grid className="display: 'flex',flexDirection: 'column', alignItems: 'center', direction: 'column', justify: 'space-between'">
                    <Card sx={{ marginTop:10 }}>
                    <CardContent sx={{ paddingY: 5, paddingX: 1 }}>
                      
                        <table className="table">
                            <thead>
                                <tr className="color">
                                    <th>Estado de Rutas de Medición</th>
                                </tr>
                                <hr className="hr_header"></hr>
                            </thead>
                            <tbody>
                                {rutas?.map(ruta=>
                                    <tr key={ruta.nombrerub_espanol}>
                                
                                        <td>{(() => {
                                    switch (ruta.estado) {
                                    case "":   return <Alert severity="info">
                                                       <AlertTitle><strong>Pendiente</strong></AlertTitle>
                                                            La ruta <strong>{ruta.nombrerub_espanol}</strong>
                                                        </Alert>;
                                    case "Pendiente": return <Alert severity="info">
                                                        <AlertTitle><strong>Pendiente</strong></AlertTitle>
                                                            La ruta <strong>{ruta.nombrerub_espanol}</strong>
                                                        </Alert>;
                                    case "Aprobado":  return <Alert severity="success"onClose={() => {}}>
                                                             <AlertTitle><strong>Aprobada</strong></AlertTitle>
                                                            La ruta <strong>{ruta.nombrerub_espanol}</strong></Alert>;
                                    case "Rechazado":  return <Alert severity="error">
                                                                <AlertTitle><strong>Rechazada</strong></AlertTitle>
                                                            La ruta <strong>{ruta.nombrerub_espanol}</strong></Alert>;
                                    default:      return <Alert severity="info">
                                                        <AlertTitle><strong>Pendiente</strong></AlertTitle>
                                                            La ruta <strong>{ruta.nombrerub_espanol}</strong>
                                                        </Alert>;
                                    }
                                })()}</td>
                        
                                    </tr>)}
                            </tbody>
                        </table>


                    </CardContent>
 
                    </Card>
             </Grid> 
            </ListadoGenerico>
                                
                    <Paginacion cantidadTotalDePaginas={totalDePaginas}
            paginaActual={pagina} onChange={nuevaPagina=> setPagina(nuevaPagina)}/>
                    </Card>
             </Grid> 
            </ListadoGenerico>

            
 
        </>

    )
}