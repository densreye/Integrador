import React from "react";
import { Formik, Field, FieldArray, Form } from "formik";
import { Container, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { TextField } from "formik-material-ui";


const Criterio = () => {
  const linksGroup = { criterio: "", insatisfactorio: "", desarrollo: "", satisfactorio: "", ejemplar: "" };

  return (
    
          <Formik
            initialValues={{
              
              links: [linksGroup],
            }}
            onSubmit={async (values, actions) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ values }) => (
            
              <Form >
                
                <FieldArray name="links">
                  {({ push, remove }) => (
                    <Grid container spacing={2} sx={{ marginTop: 2, paddingX: 2 }}>
                      <Grid item xs={2}>
                        <Typography variant="h6" component="h2">
                          Añadir Criterios
                        </Typography>
                      </Grid>
                      {values.links.map((_, index) => (
                        <>
                          <Grid item md={2}>
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
                            <Grid item md={2}>
                              <Button variant="outlined" color="error" onClick={() => remove(index)}>
                                Delete
                              </Button>
                            </Grid>
                          )}
                        </>
                      ))}{" "}
                      <Grid item xs={12}>
                        <Button variant="outlined" onClick={() => push(linksGroup)}>
                          Add Link
                        </Button>
                      </Grid>
                    </Grid>
                  )}
                </FieldArray>
               
              </Form>
              
            )}
          </Formik>
        
    
  );
};

export default Criterio;