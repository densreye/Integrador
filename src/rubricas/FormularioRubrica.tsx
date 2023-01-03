import { Formik, Form, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import * as Yup from 'yup'
import FormGroupText from '../utils/FormGroupText'
import Button2 from '../utils/Button'
import { generoCreacionDTO, generoDTO } from "./generos.model";


import Prueba from "prueba/prueba";


export default function FormularioRubrica(props: formularioRubricaProps){
    const criterios = { criterio: "", insatisfactorio: "", desarrollo: "", satisfactorio: "", ejemplar: "" };
    
    return(
         <Prueba modelo={props.modelo} onSubmit={props.onSubmit}></Prueba>
    )
}

interface formularioRubricaProps{
    modelo: generoCreacionDTO;
   //modelo2:generoDTO;
   // onSubmit2?(valores: generoDTO, accion: FormikHelpers<generoDTO>): void;
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;
}
