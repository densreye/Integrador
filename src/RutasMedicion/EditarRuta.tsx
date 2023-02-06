import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Cargando from "utils/Cargando";
import { urlRutas } from "utils/endpoints";


import { rutaCreacionDTO } from "./rutasmed.model";
import FormularioRutas from "./FormularioRutaMed";

export default function EditarRuta() {

    const { id }: any = useParams();
    const [ruta,setRuta]=useState<rutaCreacionDTO>();
    const [errores,setErrores]=useState<string[]>([]);
    const history = useHistory();

    
    useEffect(()=>{
        axios.get(`${urlRutas}/${id}`)
        .then((respuesta:AxiosResponse<rutaCreacionDTO>)=>{
            setRuta(respuesta.data)
        })
    })


    async function editar(rutaEditar:rutaCreacionDTO) {
        
        try{
            await axios.put(`${urlRutas}/${id}`,rutaEditar);
            history.push('/rutasdemedicion')
        }
        catch(error){
            //setErrores(error.response.data)
            console.log(error);
        }
        
    }


    return (
        <div className="container col-lg-9">
            <h3>Editar Rúbrica</h3>
            {ruta?<FormularioRutas modelo={ruta} 
                onSubmit={async valores=>{
                    await editar(valores)

                }}
            />:<Cargando/>}
        </div>

    )
}