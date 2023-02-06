import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
 
import { urlRubricas, urlRutas } from "utils/endpoints";
import ListadoGenerico from "utils/ListadoGenerico";
 
import { rubricaDTO } from "rubricas/rubricas.model";
import { rutaDTO } from "RutasMedicion/rutasmed.model";
import { Card, CardContent, Grid,Alert, AlertTitle } from "@mui/material";
import Paginacion from "utils/Paginacion";

 
export default function IndiceNotificaciones() {
    const [rubricas,setRubricas]= useState<rubricaDTO[]>();
    const [totalDePaginas,setTotalDePaginas]=useState(0);
    const [recordsPorPagina, setRecordsPorPagina]=useState(5);
    const [pagina,setPagina]=useState(1);

    const [rutas,setRutas]= useState<rutaDTO[]>();
    const [totalDePaginas2,setTotalDePaginas2]=useState(0);
    const [recordsPorPagina2, setRecordsPorPagina2]=useState(5);
    const [pagina2,setPagina2]=useState(1);
    
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
            setRubricas(respuesta.data);
        })
    }

    useEffect(()=>{
        cargarDatosRutas();
    //eslint-disable-next-line react-hooks/exhaustive-deps

    },[pagina2,recordsPorPagina2])
    function cargarDatosRutas(){
        axios.get(urlRutas,{
            params: {pagina2,recordsPorPagina2: recordsPorPagina2}
        })
        .then((respuesta:AxiosResponse<rutaDTO[]>)=>{
            const totalDeRegistros2= 
                parseInt(respuesta.headers['cantidadtotalregistros'],10);
            setTotalDePaginas2(Math.ceil(totalDeRegistros2/recordsPorPagina2));
            console.log(respuesta.data);
            setRutas(respuesta.data);
        })
    }
    

return (
        <div className="container col-lg-9">
            <h3>Notificaciones</h3>
            <ListadoGenerico listado={rubricas}>
            <Grid className="display: 'flex',flexDirection: 'column', alignItems: 'center', direction: 'column', justify: 'space-between'">
                    <Card sx={{ marginTop:10 }}>
                    <CardContent sx={{ paddingY: 5, paddingX: 1 }}>
                        <table className="table">
                            <thead>
                                <tr className="color">
                                    <th>Estado de Rúbricas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rubricas?.map(rubrica=>
                                    <tr key={rubrica.id}>
                                        <td>{(() => {
                                    switch (rubrica.estado) {
                                    case "":   return <Alert severity="info">
                                                       <AlertTitle><strong>Pendiente</strong></AlertTitle>
                                                            La rúbrica <strong>{rubrica.nombre}</strong>
                                                        </Alert>;
                                    case "Pendiente": return <Alert severity="info">
                                                        <AlertTitle><strong>Pendiente</strong></AlertTitle>
                                                            La rúbrica <strong>{rubrica.nombre}</strong>
                                                        </Alert>;
                                    case "Aprobado":  return <Alert severity="success"onClose={() => {}}>
                                                             <AlertTitle><strong>Aprobada</strong></AlertTitle>
                                                            La rúbrica <strong>{rubrica.nombre}</strong></Alert>;
                                    case "Rechazado":  return <Alert severity="error">
                                                                <AlertTitle><strong>Rechazada</strong></AlertTitle>
                                                            La rúbrica <strong>{rubrica.nombre}</strong></Alert>;
                                    default:      return <Alert severity="info">
                                                        <AlertTitle><strong>Pendiente</strong></AlertTitle>
                                                            La rúbrica <strong>{rubrica.nombre}</strong>
                                                        </Alert>;
                                    }
                                })()}</td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </CardContent>
                    <Paginacion cantidadTotalDePaginas={totalDePaginas}
            paginaActual={pagina} onChange={nuevaPagina=> setPagina(nuevaPagina)}/>
                    </Card>
             </Grid> 
            </ListadoGenerico>
            <ListadoGenerico listado={rutas}>
            <Grid className="display: 'flex',flexDirection: 'column', alignItems: 'center', direction: 'column', justify: 'space-between'">
                    <Card sx={{ marginTop:10 }}>
                    <CardContent sx={{ paddingY: 3, paddingX: 1 }}>
                      
                        <table className="table">
                            <thead>
                                <tr className="color">
                                    <th>Estado de Rutas de Medición</th>
                                </tr>
                              
                            </thead>
                            <tbody>
                                {rutas?.map(ruta=>
                                    <tr key={ruta.id}>
                                
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
                    <Paginacion cantidadTotalDePaginas={totalDePaginas2}
            paginaActual={pagina2} onChange={nuevaPagina2=> setPagina2(nuevaPagina2)}/>
                    </Card>
             </Grid> 
            </ListadoGenerico>
 
        </div>

    )
}