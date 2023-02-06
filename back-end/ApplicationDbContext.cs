using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RubricasAPI.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Threading.Tasks;
namespace RubricasAPI
{
    public class ApplicationDbContext : IdentityDbContext
    {
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Rubrica>()
            .HasMany(c => c.Criterios)
            .WithOne(s => s.Rubrica)
            .IsRequired();
            base.OnModelCreating(builder);

            builder.Entity<Rutas>()
             .HasMany(c => c.Niveles)
             .WithOne(s => s.Rutas)
             .IsRequired();
            base.OnModelCreating(builder);
        }
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Rubrica> Rubricas{get;set;}
        public DbSet<Criterios> Criterios { get; set; }//creacion de la base con la solicitud con el tipo de clase
        public DbSet<Rutas> Rutasdemedicion { get; set; }
        public DbSet<Niveles> Niveles { get; set; }

    }
}
