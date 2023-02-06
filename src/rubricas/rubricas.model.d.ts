const current = new Date();
export interface rubricaCreacionDTO {
 
    nombre: string;
    clasificacion:string;
    criterio:string;
    criterios: Array<{
        criterio: string;
        insatisfactorio: string;
        desarrollo: string;
        satisfactorio: string;
        ejemplar: string;
    }>;
    
    fechaCreacion:Date= `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    estado: string="Pendiente";
}

export interface rubricaDTO {
    id: number;//agregar un ID PARA RUBRICA
    nombre: string;
    clasificacion:string;
    criterio:number;
    criterios: Array<{
        criterio: string;
        insatisfactorio: string;
        desarrollo: string;
        satisfactorio: string;
        ejemplar: string;
    }>;
    
    fechaCreacion:Date= `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    estado: string="Pendiente";

}
