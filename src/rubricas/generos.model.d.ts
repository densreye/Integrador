 
export interface generoCreacionDTO {
 
    nombre: string;
    clasificacion:string;
    criteriOBJ: Array<{
        criterio: string;
        insatisfactorio: string;
        desarrollo: string;
        satisfactorio: string;
        ejemplar: string;
    }>;
    
    fechaCreacion:string;
    estado: boolean=false;
}

export interface generoDTO {
    id: number;
    nombre: string;
    clasificacion:string;
    criteriOBJ: Array<{
        criterio: string;
        insatisfactorio: string;
        desarrollo: string;
        satisfactorio: string;
        ejemplar: string;
    }>;
    
    fechaCreacion:string;
    estado: boolean=false;

}
