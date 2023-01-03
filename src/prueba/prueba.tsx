import React from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import FormGroupText from '../utils/FormGroupText'
import Button from '../utils/Button'
import { generoCreacionDTO } from "rubricas/generos.model";

import { Formik, Field, FieldArray, FormikHelpers} from "formik";
import { Container, Card, CardContent, Typography, Grid } from "@mui/material";
import { TextField } from "formik-material-ui";
import { FormStepper } from "../prueba/FormStepper";


 


export default function Pruebas(props: formularioPruebasProps){
  const criterios = { criterio: "", insatisfactorio: "", desarrollo: "", satisfactorio: "", ejemplar: "" };
    
  interface valores{

    nombre: string;
    clasificacion:string;
    criteriOBJ: Array<{
        criterio: string;
        insatisfactorio: string;
        desarrollo: string;
        satisfactorio: string;
        ejemplar: string;
    }>;
    
    }

    const initialValues: valores = {
        nombre: "",
        clasificacion: "",
        criteriOBJ: [{   
                  
            criterio: "",
            insatisfactorio: "",
            desarrollo: "",
            satisfactorio: "",
            ejemplar: "",
        }],
        
        
    };

  return (
    <Container sx={{ bgcolor: "#87c1ff4d", paddingY: 3, marginTop: 5 }}>
      <Typography variant="h3" align="center" component="h2">
        Formulario Criterios
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
              <FormStepper>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <FormGroupText campo="nombre" name="nombre"  placeholder="Nombre" />
                  </Grid>
                  <Grid item md={6}>
                    <FormGroupText campo="clasificacion" name="clasificacion" placeholder="Clasificación" />
                  </Grid>
                </Grid>
                <FieldArray name="criteriOBJ" >
                  {({ push, remove }) => (
                    <Grid container spacing={2} sx={{ marginTop: 2, paddingX: 2 }}>
                      <Grid item xs={12}>
                        <Typography variant="h6" component="h2">
                          Criterios
                        </Typography>
                      </Grid>
                      {values.criteriOBJ.map((_, index) => (
                        <>
                        
                          <Grid item md={2.5}>
                            <Field fullWidth name={`criteriOBJ.${index}.criterio`}  component={TextField} placeholder="Criterio" />
                          </Grid>
                          <Grid item md={2}>
                            <Field fullWidth name={`criteriOBJ.${index}.insatisfactorio`} component={TextField} placeholder="Insatisfactorio" />
                          </Grid>
                          <Grid item md={2}>
                            <Field fullWidth name={`criteriOBJ.${index}.desarrollo`} component={TextField} placeholder="Desarrollo" />
                          </Grid>
                          <Grid item md={2}>
                            <Field fullWidth name={`criteriOBJ.${index}.satisfactorio`} component={TextField} placeholder="Satisfactorio" />
                          </Grid>
                          <Grid item md={2}>
                            <Field fullWidth name={`criteriOBJ.${index}.ejemplar`} component={TextField} placeholder="Ejemplar" />
                          </Grid>
                           
                          {index > 0 && (
                            <Grid item md={1.5}>
                              <Button  onClick={() => remove(index)}>
                                Borrar
                              </Button>
                            </Grid>
                          )}
                        </>
                      ))}{" "}
                      <Grid item xs={12}>
                        <Button onClick={() => push(initialValues.criteriOBJ.push)}>
                          Añadir Criterio
                        </Button>
                        <Button  
                        type="submit">Salvar</Button>
                      </Grid>
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


interface formularioPruebasProps{
    modelo: generoCreacionDTO;
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;
}