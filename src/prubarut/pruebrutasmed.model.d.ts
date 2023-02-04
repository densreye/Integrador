const current = new Date();
export interface pruebrutaCreacionDTO {

    
    carrera: string;
    nombrerub_espanol: string;
    nombrerub_ingles: string;
    niveles: Array<{
       
        nivel: string;
        materia: string;
        paralelo: string;
        docente: string;
        
    }>;
  
    fechaCreacion:Date= `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    estado: string="Pendiente";
}

export interface pruebrutaDTO {
   
    id: number;
    carrera: string;
    nombrerub_espanol: string;
    nombrerub_ingles: string;
    niveles: Array<{
       
        nivel: string;
        materia: string;
        paralelo: string;
        docente: string;
        
    }>;
  
  
    fechaCreacion:Date= `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    estado: string="Pendiente";
}