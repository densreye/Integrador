using RubricasAPI.Entidades;
using System;
using System.Collections.Generic;

namespace RubricasAPI.DTOs
{
    public class RutaDTO
    {
        public int Id { get; set; }
        public string Carrera { get; set; }
        public int IdCarrera { get; set; }
        public string Nombrerub_espanol { get; set; }
        public string Nombrerub_ingles { get; set; }
        public int IdRubrica { get; set; }
        public ICollection<Niveles> Niveles { get; set; }

        public DateTime FechaCreacion { get; set; }
        public string Estado { get; set; }
    }
}
