import { urlRubricas } from "utils/endpoints";
import FormularioRubricas from "./FormularioRubrica";
import axios from 'axios';
import { rubricaCreacionDTO } from "./rubricas.model";
import { useHistory } from "react-router-dom";
import MostrarErrores from "utils/MostrarErrores";
import { useState } from "react";


export default function CrearRubrica() {
    const history = useHistory();
    const [errores,setErrores] = useState<string[]>([]);
    
    async function crear(rubrica: rubricaCreacionDTO) {
        try{
           await axios.post(urlRubricas,rubrica) 
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
    
            <FormularioRubricas   
            modelo={{        
            nombre: "",
            criterio:"",
            clasificacion: "",
            criterios: [{   
                  
                    criterio: "",
                    insatisfactorio: "",
                    desarrollo: "",
                    satisfactorio: "",
                    ejemplar: "",
                }],
            fechaCreacion: new Date(),
            estado: "",
 

            }} 
                 onSubmit={async valores => {
                    await crear(valores);
                    console.log("VALORES ACTUALES",valores)
                 }}
            />
        </>
    )
}