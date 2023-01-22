import { Formik, Form, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import FormGroupText from '../utils/FormGroupText'
import Button from '../utils/Button'
//import { generoCreacionDTO } from "./generos.model";
import { rutaCreacionDTO } from "./rutasmed.model";
import { Grid} from "@mui/material";
export default function FormularioRutas(props: formularioRutasProps){
    return(
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}

            validationSchema={Yup.object({
                idCarrera: Yup.string().required('Este campo es requerido')
                    
            })}

        >
            {(formikProps) => (
                <Form >
                    <Grid container spacing={2}>
                        <Grid item md={3}>   
                        <FormGroupText campo="idCarrera" label="Id Carrera:" /> 
                        </Grid> 
                        <Grid item md={3}>
                        <FormGroupText campo="idCurso" label="Id Curso:" />
                        </Grid>
                        <Grid item md={3}>                   
                        <FormGroupText campo="idMateria" label="Id Materia:" />
                        </Grid> 
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item md={3}>   
                        <FormGroupText campo="medicion" label="Nivel:" placeholder="Inicial - Medio - Final" /> 
                        </Grid> 
                        <Grid item md={3}>   
                        <FormGroupText campo="paralelo" label="Paralelo:" placeholder="Ingresar Paralelo" /> 
                        </Grid>
                    </Grid>
                    <br></br>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                        <FormGroupText campo="descripcionEspanol" label="Nombre de la Rúbrica (Español) :" />
                        </Grid>
                        <Grid item md={6}>
                        <FormGroupText campo="descripcionIngles" label="Nombre de la Rúbrica (Ingles)" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item md={3}>
                        <FormGroupText campo="codigoMateria" label="Código Materia:" />
                        </Grid>
                        
                        <Grid item md={3}>
                        <FormGroupText campo="materia" label="Materia:" />
                        </Grid>
                    </Grid>


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