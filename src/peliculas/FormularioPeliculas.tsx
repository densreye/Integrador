import { Form, Formik, FormikHelpers } from "formik";
import { peliculaCreacionDTO } from "./peliculas.model";
import * as Yup from 'yup'
import FormGroupText from "utils/FormGroupText";
import FormGroupCheckbox from "utils/FormGroupCheckbox";
import FormGroupFecha from "utils/FormGroupFecha";
import FormGroupImagen from "utils/FormGroupImagen";
import Button from "utils/Button";
import { Link } from "react-router-dom";
import SelectorMultiple, { selectorMultipleModel } from "utils/SelectorMultiple";
import { generoDTO } from "generos/generos.model";
import { useState } from "react";
import { cineDTO } from "cines/cines.model";
import TypeAheadActores from "actores/TypeAheadActores";
import { actorPeliculaDTO } from "actores/actores.model";
import css from './FormularioPeliculas.module.css'
import Criterios from "./Criterios";

export default function FormularioPeliculas(props: formularioPeliculasProps) {
    const [generosSeleccionados, setGenerosSeleccionados] = 
    useState(mapear(props.generosSeleccionados));
    const [generosNoSeleccionados, setGenerosNoSeleccionados] = 
    useState(mapear(props.generosNoSeleccionados));

    const [cinesSeleccionados, setCinesSeleccionados] =
    useState(mapear(props.cinesSeleccionados));
    const [cinesNoSeleccionados, setCinesNoSeleccionados] =
    useState(mapear(props.cinesNoSeleccionados));

    const [actoresSeleccionados, setActoresSeleccionados] = 
    useState<actorPeliculaDTO[]>(props.actoresSeleccionados)

    

    
  
    
    function mapear(arreglo: {id: number, nombre: string}[]): selectorMultipleModel[]{
        return arreglo.map(valor => {
            return {llave: valor.id, valor: valor.nombre}
        })
    }

    return (
        <Formik
            initialValues={props.modelo}
            onSubmit={(valores, acciones) => {
                
                props.onSubmit(valores, acciones);
            }}
            validationSchema={Yup.object({
                titulo: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })}
        >
            {formikProps => (
                
                <Form>
                    <FormGroupText label="Título" campo="titulo" />
                    <FormGroupText label="Clasificacion" campo="clasificacion" />
                    <div className={css.div}>
                    <Criterios></Criterios>     
                    </div>
                    <br/>

                    
                    <Button disabled={formikProps.isSubmitting} type="submit">Enviar</Button>
                    <Link className="btn btn-secondary" to="/">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formularioPeliculasProps {
    modelo: peliculaCreacionDTO;
    onSubmit(valores: peliculaCreacionDTO, acciones: FormikHelpers<peliculaCreacionDTO>): void;
    generosSeleccionados: generoDTO[];
    generosNoSeleccionados: generoDTO[];
    cinesSeleccionados: cineDTO[];
    cinesNoSeleccionados: cineDTO[];
    actoresSeleccionados: actorPeliculaDTO[];
}