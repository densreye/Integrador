import { Formik, Form, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import FormGroupText from '../utils/FormGroupText'
import Button from '../utils/Button'
import { generoCreacionDTO } from "./generos.model";


import Prueba from "prueba";


export default function FormularioRubrica(props: formularioRubricaProps){
    return(
        <Prueba></Prueba>
    )
}

interface formularioRubricaProps{
    modelo: generoCreacionDTO;
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;
}