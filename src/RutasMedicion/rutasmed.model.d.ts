const current = new Date();
export interface rutaCreacionDTO  {
    carrera: string;
    idCarrera:number;
    nombrerub_espanol: string;
    nombrerub_ingles: string;
    idRubrica:number;
    niveles:  Array<{
        nivel: string;
        materia: string;
        idMateria:string;
        codMateria:string;
        paralelo: string;
        idCurso: string;
        docente: string;
    }>;
  
    fechaCreacion:Date= `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    estado: string="Pendiente";
}

export interface rutaDTO  {
   
    id: number;
    carrera: string;
    idCarrera:number;
    nombrerub_espanol: string;
    nombrerub_ingles: string;
    idRubrica:number;
    niveles:  Array<{
        nivel: string;
        materia: string;
        idMateria:string;
        codMateria:string;
        paralelo: string;
        idCurso: string;
        docente: string;
    }>;
  
    fechaCreacion:Date= `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    estado: string="Pendiente";
}