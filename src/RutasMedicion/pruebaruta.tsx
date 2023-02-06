import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import FormGroupText from '../utils/FormGroupText'
import Button from '../utils/Button'
import { rutaCreacionDTO  } from "./rutasmed.model";

import { Formik, Field, FieldArray, FormikHelpers,FormikConfig,FormikValues } from "formik";
import { Container, Card, CardContent, Typography, Grid } from "@mui/material";
import { TextField } from "formik-material-ui";
import { FormStepper} from "../prueba/FormStepper";


 


export default function PruebasRutas(props: formularioPruebasRutasProps){

  return (
    <Container sx={{ bgcolor: "#001c43", paddingY: 5, marginTop: 5 }}  >
      <Typography variant="h2"  align="center" component="h2" style={{ backgroundColor: "001c43",color:"white" }}>
        Formulario Rutas
      </Typography>
      <Card sx={{ marginTop: 2 }}>
        <CardContent sx={{ paddingY: 10, paddingX: 5 }}>
          
          <Formik
            initialValues={
              props.modelo
            }
            onSubmit={props.onSubmit}
          >
            
            {({ values}) => (
              <FormStepper >
                <Grid container spacing={2} >
                  <Grid item md={3}>
                    <FormGroupText campo="carrera" name="carrera"  placeholder="Carrera" />
                  </Grid>
 
                </Grid>
                <FieldArray name="niveles" >
                  
                  {({ push, remove }) => (
                    <Grid container spacing={2} sx={{ marginTop: 2, paddingX: 2 }}>
                      <Grid item xs={12}>
                        <Typography variant="h6" component="h2">
                          Niveles
                        </Typography>
                        <b>Total Criterios: {values.niveles.length.toString()}</b>
                      </Grid>
                      {values.niveles.map((_, index) => (
                        <>
                        
                        <Grid item md={1.5}>
                              <Field fullWidth name={`niveles.${index}.nivel`} component={TextField} placeholder="Nivel" />
                            </Grid>
                            <Grid item md={1.5}>
                              <Field fullWidth name={`niveles.${index}.materia`} component={TextField} placeholder="Materia" />
                            </Grid>
                            <Grid item md={1.5}>
                              <Field fullWidth name={`niveles.${index}.paralelo`} component={TextField} placeholder="Paralelo" />
                            </Grid>
                            <Grid item md={1.5}>
                              <Field fullWidth name={`niveles.${index}.docente`} component={TextField} placeholder="Docente" />
                            </Grid>
                            <Grid item md={1.5}>
                              <Field fullWidth name={`niveles.${index}.idMateria`} component={TextField} placeholder="IDMATERIA" />
                            </Grid>
                            <Grid item md={1.5}>
                              <Field fullWidth name={`niveles.${index}.codMateria`} component={TextField} placeholder="codMateria" />
                            </Grid>
                            <Grid item md={1.5}>
                              <Field fullWidth name={`niveles.${index}.idCurso`} component={TextField} placeholder="idCurso" />
                            </Grid>
                            <Grid item md={1.5}>
                              <Button  onClick={() => remove(index)} className="btn btn-danger">
                                Borrar
                              </Button>
                            </Grid>
                     
                        </>
                      ))}{" "}
                      {values.niveles.length < 3 && (
                      <Grid item xs={12}>
                        <Button onClick={() => push(props.modelo.niveles.push) } style={{ backgroundColor: '#001c43'}} >
                          Añadir Criterio
                        </Button>
 
                      </Grid>
                      )}
                    </Grid>
                  )}
                </FieldArray>
               
              </FormStepper>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
};


interface formularioPruebasRutasProps{
    modelo: rutaCreacionDTO;
    onSubmit(valores: rutaCreacionDTO, accion: FormikHelpers<rutaCreacionDTO>): void;
}
 