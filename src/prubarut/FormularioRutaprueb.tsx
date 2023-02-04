import { FormikHelpers } from "formik";
import React from "react";
import { pruebrutaCreacionDTO } from "./pruebrutasmed.model";
import PruebasRutas from "./pruebaruta";


export default function FormularioRutaPrueba(props: formularioRutapruebProps){
    
    return(
         <PruebasRutas modelo={props.modelo} onSubmit={props.onSubmit}></PruebasRutas>
    )
}

interface formularioRutapruebProps{
    modelo: pruebrutaCreacionDTO;

    onSubmit(valores: pruebrutaCreacionDTO, accion: FormikHelpers<pruebrutaCreacionDTO>): void;
}
