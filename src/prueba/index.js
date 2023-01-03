import React from "react";
import { Formik, Field, FieldArray} from "formik";
import { Container, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { TextField } from "formik-material-ui";
import { FormStepper } from "./FormStepper";

const Prueba = () => {
  const criterios = { criterio: "", insatisfactorio: "", desarrollo: "", satisfactorio: "", ejemplar: "" };
 const values=[];
  return (
    <Container sx={{ bgcolor: "#87c1ff4d", paddingY: 3, marginTop: 5 }}>
      <Typography variant="h3" align="center" component="h2">
        Formulario Criterios
      </Typography>
      <Card sx={{ marginTop: 2 }}>
        <CardContent sx={{ paddingY: 10, paddingX: 5 }}>
          <Formik
            initialValues={{
              titulo: "",
              clasificacion: "",
              links: [criterios],
            }}
            onSubmit={async ( ) => {
              alert(JSON.stringify(values, null, 2));
              console.log(values);
            }}
          >
            {({ values }) => (
              <FormStepper>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <Field fullWidth name="nombre" component={TextField} placeholder="Nombre" />
                  </Grid>
                  <Grid item md={6}>
                    <Field fullWidth name="clasificacion" component={TextField} placeholder="Clasificación" />
                  </Grid>
                </Grid>
                <FieldArray name="links">
                  {({ push, remove }) => (
                    <Grid container spacing={2} sx={{ marginTop: 2, paddingX: 2 }}>
                      <Grid item xs={12}>
                        <Typography variant="h6" component="h2">
                          Criterios
                        </Typography>
                      </Grid>
                      {values.links.map((_, index) => (
                        <>
                           
                          <Grid item md={2.5}>
                            <Field fullWidth name={`links.${index}.criterio`} component={TextField} placeholder="Criterio" />
                          </Grid>
                          <Grid item md={2}>
                            <Field fullWidth name={`links.${index}.insatisfactorio`} component={TextField} placeholder="Insatisfactorio" />
                          </Grid>
                          <Grid item md={2}>
                            <Field fullWidth name={`links.${index}.desarrollo`} component={TextField} placeholder="Desarrollo" />
                          </Grid>
                          <Grid item md={2}>
                            <Field fullWidth name={`links.${index}.satisfactorio`} component={TextField} placeholder="Satisfactorio" />
                          </Grid>
                          <Grid item md={2}>
                            <Field fullWidth name={`links.${index}.ejemplar`} component={TextField} placeholder="Ejemplar" />
                          </Grid>
                           
                          {index > 0 && (
                            <Grid item md={1.5}>
                              <Button variant="outlined" color="error" onClick={() => remove(index)}>
                                Borrar
                              </Button>
                            </Grid>
                          )}
                        </>
                      ))}{" "}
                      <Grid item xs={12}>
                        <Button variant="outlined" onClick={() => push(criterios)}>
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
    </Container>
  );
};



export default Prueba;


