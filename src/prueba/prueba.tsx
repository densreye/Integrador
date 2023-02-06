import React from "react";
import FormGroupText from '../utils/FormGroupText'
import Button from '../utils/Button'
import { rubricaCreacionDTO } from "rubricas/rubricas.model";
import { Formik, Field, FieldArray, FormikHelpers} from "formik";
import { Card, CardContent, Typography, Grid} from "@mui/material";
import { TextField } from "formik-material-ui";
import { FormStepper } from "../prueba/FormStepper";



 


export default function Pruebas(props: formularioPruebasProps){
  return (
    <div style={{ backgroundColor: "#001c43", padding: 3, marginTop: 5, }}className="container col-lg-9">
      <Typography variant="h2"  align="center" component="h2" style={{ backgroundColor: "001c43",color:"white" }}>
        Formulario Criterios
      </Typography>
      <Card sx={{ marginTop: 2,marginBottom:10,marginLeft:5,marginRight:5}}>
        <CardContent sx={{ paddingY: 10, paddingX: 5 }}>
          
          <Formik
            initialValues={
              props.modelo
            }
            onSubmit={props.onSubmit}
          >
            
            {({ values}) => (
              <FormStepper>
                <Grid container spacing={1} className="d-flex flex-column">
                  <Grid item md={6}>
                    <FormGroupText    campo="nombre" name="nombre"  placeholder="Nombre" label="Nombre" />
                  </Grid><br></br>
                  <Grid item md={3}>
                    <FormGroupText campo="clasificacion" name="clasificacion" placeholder="Clasificación" label="Clasificación" />
                    
                  </Grid>
                </Grid>
                <FieldArray name="criterios" >
                  
                  {({ push, remove }) => (
                    <Grid container spacing={2} sx={{ marginTop: 2, paddingX: 2 }}>
                      <Grid item xs={12}>
                        <Typography variant="h6" component="h2">
                          Criterios : <b>{values.criterios.length.toString()}</b>
                        </Typography>
                        
                      </Grid>
                      {values.criterios.map((_, index) => (
                        <div className="row col-12" key={index}>
                          <Grid key={index} item   md={2.1}  className="d-flex p-2">
                            <Field  multiline  label="Criterio" 
                              id="filled-multiline " maxRows={5}
                              sx={{width:{sm:120,md:210},"& .MuiInputBase-root":{height:150},mb:1}}  
                               name={`criterios.${index}.criterio`}  component={TextField} placeholder="Criterio"  />
                          </Grid>
                          <Grid item md={2.1} className="d-flex p-2">
                            <Field multiline  label="Insatisfactorio" 
                            id="filled-multiline" maxRows={5}
                            sx={{width:{sm:120,md:210,},"& .MuiInputBase-root":{height:150},mb:1}}  
                            name={`criterios.${index}.insatisfactorio`} component={TextField} placeholder="Insatisfactorio" />
                          </Grid>
                          <Grid item md={2.1} className="d-flex p-2">
                            <Field multiline  label="Desarrollo" 
                            id="filled-multiline " maxRows={5}
                            sx={{width:{sm:120,md:210},"& .MuiInputBase-root":{height:150},mb:1}}  
                             name={`criterios.${index}.desarrollo`} component={TextField} placeholder="Desarrollo" />
                          </Grid>
                          <Grid item md={2.1} className="d-flex p-2" >
                            <Field multiline  label="Satisfactorio"
                             id="filled-multiline " maxRows={5}
                             sx={{width:{sm:120,md:210},"& .MuiInputBase-root":{height:150},mb:1}}  
                             name={`criterios.${index}.satisfactorio`} component={TextField} placeholder="Satisfactorio" />
                          </Grid>
                          <Grid item md={2.1} className="d-flex p-2">
                            <Field  multiline  label="Ejemplar" 
                            id="filled-multiline " maxRows={5}
                            sx={{width:{sm:120,md:210},"& .MuiInputBase-root":{height:150},mb:1}}   
                            name={`criterios.${index}.ejemplar`} component={TextField} placeholder="Ejemplar" />
                          </Grid>
                          {index > 0 && (
                            <Grid item md={1.5}>
                              <Button  onClick={() => remove(index)} className="btn btn-danger   mt-5 p-6  ">
                                Borrar
                              </Button>
                            </Grid>
                          )}
                        </div>
                      ))}{" "}
                      <Grid item xs={12}>
                        <Button onClick={() => push(props.modelo.criterios.push) } style={{ backgroundColor: '#001c43'}}  >
                          Añadir Criterio
                        </Button>
 
                      </Grid>
                    </Grid>
                  )}
                </FieldArray>
               
              </FormStepper>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};


interface formularioPruebasProps{
    modelo: rubricaCreacionDTO;
    onSubmit(valores: rubricaCreacionDTO, accion: FormikHelpers<rubricaCreacionDTO>): void;
}