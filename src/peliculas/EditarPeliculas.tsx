import { actorPeliculaDTO } from "../actores/actores.model";
import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";
import React from "react";


export default function EditarPeliculas() {


    const generosNoSeleccionados: generoDTO[] = [
    {id: 2, nombre: 'Drama'}] 

    const generosSeleccionados: generoDTO[] = [{id: 1, nombre: 'Acción'}, 
    {id:3, nombre: 'Comedia'}] 

    const cinesSeleccionados: cineDTO[] = [{id: 2, nombre: 'Sambil'}]
    const cinesNoSeleccionados: cineDTO[] = [{id: 1, nombre: 'Agora'}]

    const actoresSeleccionados: actorPeliculaDTO[] = [
        {
            id: 1, nombre: 'Felipe', personaje: '', foto: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg'
        }
    ]

    return (
        <>
            <h3>Editar Película</h3>

            
        </>

    )
}