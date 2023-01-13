import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
 
import { urlRubricas } from "utils/endpoints";
import ListadoGenerico from "utils/ListadoGenerico";
 
import { rubricaDTO } from "rubricas/rubricas.model";
import { Container, Card, CardContent, Typography, Grid, Button,Alert, AlertTitle } from "@mui/material";
import Paginacion from "utils/Paginacion";

 
export default function IndiceNotificaciones() {
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
        
            <h3>Notificaciones</h3>

 
 
     
            <ListadoGenerico listado={generos}>
            <Grid className="display: 'flex',flexDirection: 'column', alignItems: 'center', direction: 'column', justify: 'space-between'">
                    <Card sx={{ marginTop:10 }}>
                    <CardContent sx={{ paddingY: 5, paddingX: 1 }}>
                      
                        <table className="table">
                            <thead>
                                <tr className="color">
                                    <th>Estado</th>
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
                    <Paginacion cantidadTotalDePaginas={totalDePaginas}
            paginaActual={pagina} onChange={nuevaPagina=> setPagina(nuevaPagina)}/>
                    </Card>
             </Grid> 
            </ListadoGenerico>
 
        </>

    )
}