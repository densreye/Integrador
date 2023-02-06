
import { FormikHelpers } from "formik";
import React from "react";
import PruebasRutas from "./pruebaruta";
import { rutaCreacionDTO  } from "./rutasmed.model";



export default function FormularioRuta(props: formularioRutaProps){
    
    return(
         <PruebasRutas modelo={props.modelo} onSubmit={props.onSubmit}></PruebasRutas>
    )
}

interface formularioRutaProps{
    modelo: rutaCreacionDTO ;

    onSubmit(valores: rutaCreacionDTO , accion: FormikHelpers<rutaCreacionDTO >): void;
}
