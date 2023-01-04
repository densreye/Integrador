using RubricasAPI.Validaciones;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RubricasAPI.DTOs
{
    public class RubricaCreacionDTO
    {
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [StringLength(maximumLength: 50)]
        [PrimeraLetraMayuscula]
        public string Nombre { get; set; }
        public string Clasificacion { get; set; }
        public string Criterios { get; set; }
        public DateTime FechaCreacion { get; set; }

        public bool Estado { get; set; }
    }
}
