import { urlRutas } from "utils/endpoints";
//import FormularioRubricas from "./FormularioRubrica";
import FormularioRutas from "./FormularioRutaMed";
import axios from 'axios';
//import { rubricaCreacionDTO } from "./rubricas.model";
import { useHistory } from "react-router-dom";
import MostrarErrores from "utils/MostrarErrores";
import { useState } from "react";
import { rutaCreacionDTO } from "./rutasmed.model";


export default function CrearRuta() {
    const history = useHistory();
    const [errores,setErrores] = useState<string[]>([]);
    
    async function crear(rubrica: rutaCreacionDTO) {
        try{
           await axios.post(urlRutas,rubrica) 
           history.push('/rutasdemedicion')
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
    
            <FormularioRutas 
            modelo={{        
            idCarrera: "",
            idCurso: "",
            idMateria: "",
            descripcionEspanol:"",
            descripcionIngles: "",
            codigoMateria: "",
            medicion: "",
            materia: "",
            paralelo: "",
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