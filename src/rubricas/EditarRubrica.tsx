import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Cargando from "utils/Cargando";
import { urlRubricas } from "utils/endpoints";
 
import FormularioRubricas from "./FormularioRubrica";
import { rubricaCreacionDTO} from "./rubricas.model";

export default function EditarGenero() {

    const { id }: any = useParams();
    const [rubrica,setRubrica]=useState<rubricaCreacionDTO>();
    const [errores,setErrores]=useState<string[]>([]);
    const history = useHistory();
    useEffect(()=>{
        axios.get(`${urlRubricas}/${id}`)
        .then((respuesta:AxiosResponse<rubricaCreacionDTO>)=>{
            setRubrica(respuesta.data)
        })
    })
    async function editar(rubricaEditar:rubricaCreacionDTO) {
        try{
            await axios.put(`${urlRubricas}/${id}`,rubricaEditar);
            history.push('/rubricas')
        }
        catch(error){
            //setErrores(error.response.data)
            console.log(error);
        }
        
    }
    return (
        <>
            <h3>Editar Rúbrica</h3>
            {rubrica?<FormularioRubricas modelo={rubrica} 
                onSubmit={async valores=>{
                    await editar(valores)

                }}
            />:<Cargando/>}
        </>

    )
}