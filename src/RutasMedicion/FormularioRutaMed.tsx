import { Formik, Form, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import FormGroupText from '../utils/FormGroupText'
import Button from '../utils/Button'
//import { generoCreacionDTO } from "./generos.model";
import { rutaCreacionDTO } from "./rutasmed.model";

export default function FormularioRutas(props: formularioRutasProps){
    return(
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}

            validationSchema={Yup.object({
                idCarrera: Yup.string().required('Este campo es requerido')
                    
            })}

        >
            {(formikProps) => (
                <Form className="form-group">
                    <FormGroupText campo="idCarrera" label="Id Carrera:" />
                    <FormGroupText campo="idCurso" label="Id Curso:" />
                    <FormGroupText campo="idMateria" label="Id Materia:" />
                    <FormGroupText campo="descripcionEspanol" label="Descripción en Español:" />
                    <FormGroupText campo="descripcionIngles" label="Descripción en Ingles:" />
                    <FormGroupText campo="codigoMateria" label="Código Materia:" />
                    <FormGroupText campo="medicion" label="Medición:" />
                    <FormGroupText campo="materia" label="Materia:" />
                    <FormGroupText campo="paralelo" label="Paralelo:" />



                    <Button disabled={formikProps.isSubmitting} style={{ backgroundColor: '#001c43'}} 
                        type="submit">Enviar</Button>
                    <Link className="btn btn-secondary" to="/rutasdemedicion">Cancelar</Link>
                </Form>
            )}

        </Formik>
    )
}

interface formularioRutasProps{
    modelo: rutaCreacionDTO;
    onSubmit(valores: rutaCreacionDTO, accion: FormikHelpers<rutaCreacionDTO>): void;
}