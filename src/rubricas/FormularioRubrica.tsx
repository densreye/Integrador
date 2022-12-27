import { Formik, Form, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import FormGroupText from '../utils/FormGroupText'
import Button from '../utils/Button'
import { generoCreacionDTO } from "./generos.model";

export default function FormularioRubrica(props: formularioRubricaProps){
    return(
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}

            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').
                max(50,'longitud total').primeraLetraMayuscula()
            })}

        >
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre" />
                    <FormGroupText campo="clasificacion" label="clasificación" />
                    <FormGroupText campo="criterios" label="Criterios" />
                    <FormGroupText campo="fechaCreacion" label="Fecha de creación" />
                    <Button disabled={formikProps.isSubmitting} 
                        type="submit">Salvar</Button>
                    <Link className="btn btn-secondary" to="/rubricas">Cancelar</Link>
                </Form>
            )}

        </Formik>
    )
}

interface formularioRubricaProps{
    modelo: generoCreacionDTO;
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;
}