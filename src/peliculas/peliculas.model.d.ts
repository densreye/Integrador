export interface pelicula{
    id: number;
    titulo: string;
    poster: string;
}

export interface peliculaCreacionDTO {
    titulo: string;
    clasificacion: string;
    criterio: string;
    insatisfactorio: string;
    desarrollo: string;
    satisfactorio: string;
    ejemplar: string;
    
}

export interface landingPageDTO {
    enCartelera?: pelicula[];
    proximosEstrenos?: pelicula[];
}