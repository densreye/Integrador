using System;

namespace RubricasAPI.DTOs
{
    public class RubricaDTO
    {
        public int Id { get; set; }
        public string Nombre{ get; set; }
                
        public string Clasificacion{ get; set; }
        public string Criterios{ get; set; }
        public DateTime FechaCreacion { get; set; }

        public bool Estado { get; set; }
    }
}
