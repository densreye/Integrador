using RubricasAPI.Validaciones;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace RubricasAPI.Entidades
{
    public class Rutas
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
