import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
 
import { urlRubricas } from "utils/endpoints";
import ListadoGenerico from "utils/ListadoGenerico";
 
import { rubricaDTO } from "rubricas/rubricas.model";
 

export default function IndiceNotificaciones() {
    const [generos,setGeneros]= useState<rubricaDTO[]>();
    const [totalDePaginas,setTotalDePaginas]=useState(0);
    const [recordsPorPagina, setRecordsPorPagina]=useState(3);
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

 
 
            <div className="form-group" style={{width:'150px'}}>
                <label> Registros por página: </label>
 
            </div>
            <ListadoGenerico listado={generos}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
            
                  
                            <th>Estado</th>
              
                        </tr>
                    </thead>
                    <tbody>
                        {generos?.map(genero=>
                            <tr key={genero.id}>
                                <td>
                                    {genero.nombre}
                                </td>
                           
                                <td>{genero.estado===false?<b>Pendiente</b> :<b>Aprobado</b>}</td>  
                   
                                <td>
                                </td>

                            </tr>)}
                    </tbody>
                </table>

            </ListadoGenerico>
 
        </>

    )
}