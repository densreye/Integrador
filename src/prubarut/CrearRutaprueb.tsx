import { urlRubricas } from "utils/endpoints";
import FormularioRutaPrueba from "./FormularioRutaprueb";
import axios from 'axios';
import { pruebrutaCreacionDTO } from "./pruebrutasmed.model";
import { useHistory } from "react-router-dom";
import MostrarErrores from "utils/MostrarErrores";
import { useState } from "react";


export default function CrearRutaPrueba() {
    const history = useHistory();
    const [errores,setErrores] = useState<string[]>([]);
    
    async function crear(rubrica: pruebrutaCreacionDTO) {
        try{
           await axios.post(urlRubricas,rubrica) 
          // history.push('/rubricas')
        }
        catch(error){
            console.error(error)
            //setErrores(error.response.data);

        }
    }
    return (
        <>
            <h3>Crear Ruta de Medición</h3>
            <MostrarErrores/>
    
            <FormularioRutaPrueba   
            modelo={{        
            carrera: "",
            nombrerub_espanol:"",
            nombrerub_ingles: "",
            niveles: [{   
                  
                    nivel: "",
                    materia: "",
                    paralelo: "",
                    docente: "",
                   
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