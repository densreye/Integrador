import { FormikHelpers } from "formik";
import React from "react";
 
import { Container, Grid, Button } from "@mui/material";
 

import { rubricaCreacionDTO} from "./rubricas.model";


import Prueba from "prueba/prueba";


export default function FormularioRubrica(props: formularioRubricaProps){
    
    return(
         <Prueba modelo={props.modelo} onSubmit={props.onSubmit}></Prueba>
    )
}

interface formularioRubricaProps{
    modelo: rubricaCreacionDTO;

    onSubmit(valores: rubricaCreacionDTO, accion: FormikHelpers<rubricaCreacionDTO>): void;
}
