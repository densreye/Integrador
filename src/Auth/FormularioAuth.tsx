import { Form, Formik, FormikHelpers } from "formik";
import { credencialesUsuario } from "./auth.model";
import * as Yup from 'yup';
import FormGroupText from "utils/FormGroupText";
import Button from "utils/Button";
import { Link } from "react-router-dom";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import { styled } from '@mui/material/styles';
import fondo from './fondo.jpg';

export default function FormularioAuth(props: formularioAuthProps){

   
    
    
    return (
        <Formik initialValues={props.modelo}
        onSubmit={props.onSubmit} 
         validationSchema={Yup.object({
             email: Yup.string().required('Este campo es requerido')
                .email('Debe colocar un email válido'),
            password: Yup.string().required('Este campo es requerido')
         })}
        >
           {formikProps => (
            
               <Form >
                
                <Grid container className="minHeight: 100vh">
                    <Grid item xs={12} sm={6}>
                        <img src={fondo} alt="logo"  className="width: '50%', height: '50%',objectFit: 'cover',"/>
                    </Grid>
                    <Grid container item xs={12} sm={6} className="padding: 10,alignItems: 'center',direction: 'column',justify: 'space-between'">
                    
                    <div className="display: 'flex',flexDirection: 'column',maxWidth: 500,minWidth: 400,paddingLeft: '10vh'">  
                        <Card sx={{ marginTop:12 }} className="bg-light">
                        <CardContent sx={{ paddingY: 3, paddingX: 2 }}>
                            
                            <Typography variant="h3" >
                                Bienvenidos a la 
                            </Typography>
                            <Typography variant="h3" >
                                ESPOL
                            </Typography>
                            
                        
                            <FormGroupText label="Email" campo="email" />
                            <FormGroupText label="Password" campo="password" type="password" />
                            <div className="mb-2">
                                <Button disabled={formikProps.isSubmitting} type="submit">Iniciar Sesión</Button>
                                <Link className="btn btn-secondary" to="/">Cancelar</Link>
                            </div>
                        </CardContent>
                        </Card>
                    </div>   

                    </Grid>

                    
                    
                    
                    
                </Grid>    
                
               </Form>
           )} 
        </Formik>
    )
}

interface formularioAuthProps{
    modelo: credencialesUsuario;
    onSubmit(valoreS: credencialesUsuario, acciones: FormikHelpers<credencialesUsuario>): void;
}