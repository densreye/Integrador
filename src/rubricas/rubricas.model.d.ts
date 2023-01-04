const current = new Date();
export interface rubricaCreacionDTO {
 
    nombre: string;
    clasificacion:string;
    criteriOBJ: Array<{
        criterio: string;
        insatisfactorio: string;
        desarrollo: string;
        satisfactorio: string;
        ejemplar: string;
    }>;
    
    fechaCreacion:Date= `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    estado: boolean=false;
}

export interface rubricaDTO {
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
    
    fechaCreacion:Date= `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    estado: boolean=false;

}
