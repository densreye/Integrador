using RubricasAPI.Validaciones;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RubricasAPI.Entidades
{
    public class Rubrica 
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "El campo {0} es requerido")]
        [StringLength(maximumLength: 50)]
        [PrimeraLetraMayuscula]
        public string Nombre { get; set; }
        public string Clasificacion { get; set; }
        public DateTime FechaCreacion { get; set; }

        public string Estado { get; set; }
        public  ICollection<Criterios> Criterios { get; set; }

    }
}
