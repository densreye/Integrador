using RubricasAPI.Entidades;
using System;
using System.Collections.Generic;

namespace RubricasAPI.DTOs
{
    public class RubricaDTO
    {
        public int Id { get; set; }
        public string Nombre{ get; set; }
                
        public string Clasificacion{ get; set; }
       
        public DateTime FechaCreacion { get; set; }
        public string Estado { get; set; }
        public ICollection<Criterios> Criterios { get; set; }
    }
}
