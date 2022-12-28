namespace PeliculasAPI.DTOs
{
    public class GeneroDTO
    {
        public int Id { get; set; }
        public string Nombre{ get; set; }
                
        public string Clasificacion{ get; set; }
        public string Criterios{ get; set; }
        public string FechaCreacion { get; set; }

        public string Estado { get; set; }
    }
}
