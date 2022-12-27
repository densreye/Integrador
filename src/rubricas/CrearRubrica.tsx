import { urlGeneros } from "utils/endpoints";
import FormularioRubricas from "./FormularioRubrica";
import axios from 'axios';
import { generoCreacionDTO } from "./generos.model";
import { useHistory } from "react-router-dom";
import MostrarErrores from "utils/MostrarErrores";
import { useState } from "react";

export default function CrearGenero() {
    const history = useHistory();
    const [errores,setErrores] = useState<string[]>([]);
    async function crear(genero: generoCreacionDTO) {
        try{
           await axios.post(urlGeneros,genero) 
           history.push('/rubricas')
        }
        catch(error){
            console.error(error)
            //setErrores(error.response.data);

        }
    }
    return (
        <>
            <h3>Crear Rúbrica</h3>
            <MostrarErrores/>
    
            <FormularioRubricas modelo={{nombre: ''}} 
                 onSubmit={async valores => {
                    await crear(valores);
                 }}
            />
        </>
    )
}