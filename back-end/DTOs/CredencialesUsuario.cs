using System.ComponentModel.DataAnnotations;

namespace RubricasAPI.DTOs
{
    public class CredencialesUsuario
    {
        [EmailAddress]
        [Required]
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
