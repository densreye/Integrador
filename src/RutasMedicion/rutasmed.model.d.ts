const current = new Date();
export interface rutaCreacionDTO {
 
    idCarrera: string;
    idCurso: string;
    idMateria: string;
    descripcionEspanol:string;
    descripcionIngles: string;
    codigoMateria: string;
    medicion: string;
    materia: string;
    paralelo: string;
  
    fechaCreacion:Date= `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    estado: string="Pendiente";
}

export interface rutaDTO {
    id: number; //agregar un ID PARA RUTA
    idCarrera: string;
    idCurso: string;
    idMateria: string;
    descripcionEspanol:string;
    descripcionIngles: string;
    codigoMateria: string;
    medicion: string;
    materia: string;
    paralelo: string;
  
    fechaCreacion:Date= `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    estado: string="Pendiente";
}