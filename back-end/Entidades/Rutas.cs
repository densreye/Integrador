using System;

namespace RubricasAPI.Entidades
{
    public class Rutas
    {
        public int Id { get; set; }
        public int IdCarrera { get; set; }
        public int IdCurso { get; set; }
        public int IdMateria { get; set; }
        public string DescripcionEspanol { get; set; }
        public string DescripcionIngles { get; set; }
        public string CodigoMateria { get; set; }
        public string Medicion { get; set; }
        public string Materia { get; set; }
        public string Paralelo { get; set; }

        public DateTime FechaCreacion { get; set; }
        public string Estado { get; set; }
    }
}
