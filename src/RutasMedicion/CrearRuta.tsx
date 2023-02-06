import { urlRutas } from "utils/endpoints";
import FormularioRuta from "./FormularioRutaMed";
import axios from 'axios';
import { rutaCreacionDTO  } from "./rutasmed.model";
import { useHistory } from "react-router-dom";
import MostrarErrores from "utils/MostrarErrores";
import { useState } from "react";


export default function CrearRutaPrueba() {
    const history = useHistory();
    const [errores,setErrores] = useState<string[]>([]);
    const niveles= ["Bajo","Medio","Alto"];
    async function crear(rubrica: rutaCreacionDTO ) {
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
        <div className="container col-lg-9">
            <h3>Crear Ruta de Medición</h3>
            <MostrarErrores/>
    
            <FormularioRuta   
            modelo={{        
            carrera: "",//este valor es tomado del API_ESPOL
            idCarrera:0, //este valor es tomado del API_ESPOL
            nombrerub_espanol:"",//este valor es tomado del API_RUBRICAS
            nombrerub_ingles: "",//revisar opcional o colocar translate de rubrica seleccionada
            idRubrica:0,//este valor es tomado del API
            niveles: [{   
                    nivel: "",
                    materia: "",
                    idMateria:"",
                    codMateria:"",
                    paralelo: "",
                    idCurso:"",
                    docente: "",
                   
                }],
            fechaCreacion: new Date(),
            estado: "",
 

            }} 
                 onSubmit={async valores => {
                    var a=0;

                    while (a<valores.niveles.length) {
                         valores.niveles[a].nivel= niveles[a];
                         a++;
                      }

                    await crear(valores);
                    console.log("VALORES ACTUALES",valores)
                 }}
            />
        </div>
    )
}