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
            <Link className="btn btn-primary"to="rubricas/crear">Crear Rúbrica</Link><br></br>
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
            <ListadoGenerico listado={generos}>
                <table className="table table-striped">
                    <thead>
                        <tr>
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
                            <tr key={genero.id}>
                                <td>
                                    {genero.nombre}
                                </td>
                                <td>CRITERIOS</td>
                                <td>{genero.clasificacion}</td>
                                <td>{genero.fechaCreacion}</td>
                                <td>{genero.estado===false?<b>Pendiente</b> :<b>Aprobado</b>}</td>
                                <Autorizado role="admin"
                                    autorizado={<> <td>
                                
                                    <Link className="btn btn-success" to={`/rubricas/editar/${genero.id}`}>
                                        Editar
                                    </Link>
                                    <Button
                                    onClick={()=>confirmar(()=>borrar(genero.id))}
                                    className="btn btn-danger">Borrar</Button>
                                     </td>
                                    </>}
                                    />
                            </tr>)}
                    </tbody>
                </table>

            </ListadoGenerico>
            <Paginacion cantidadTotalDePaginas={totalDePaginas}
            paginaActual={pagina} onChange={nuevaPagina=> setPagina(nuevaPagina)}/>
        </>

    )
}