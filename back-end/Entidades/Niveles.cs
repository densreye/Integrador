using System.Collections.Generic;

namespace RubricasAPI.Entidades
{
    public class Niveles
    {
        public int Id { get; set; }
        public string Nivel { get; set; }
        public string Materia { get; set; }
        public int IdMateria { get; set; }
        public string CodMateria { get; set; }
        public string Paralelo { get; set; }
        public int IdCurso { get; set; }
        public string Docente { get; set; }
     
        public Rutas Rutas { get; set; }

    }
}
