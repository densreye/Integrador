using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.CSharp.RuntimeBinder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using RubricasAPI.DTOs;
using RubricasAPI.Entidades;
using RubricasAPI.Filtros;
using RubricasAPI.Utilidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RubricasAPI.Controllers
{
    [Route("api/rubricas")]
    [ApiController]
 

    public class RubricasController : ControllerBase
    {
        private readonly ILogger<RubricasController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public RubricasController(ILogger<RubricasController> logger, 
            ApplicationDbContext context,
            IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet] // api/rubricas
        public async Task<ActionResult<List<RubricaDTO>>> Get([FromQuery] PaginacionDTO paginacionDTO) 
        {
            var queryable = context.Rubricas.AsQueryable();
            await HttpContext.InsertarParametrosPaginacionEnCabecera(queryable);
            var rubricas = await queryable.OrderBy(x => x.Nombre).Paginar(paginacionDTO).ToListAsync();
            return mapper.Map<List<RubricaDTO>>(rubricas);
        }

        [HttpGet("todos")]
        [AllowAnonymous]
        public async Task<ActionResult<List<Rubrica>>> Todos()
        {
            var rubrica = await context.Rubricas.Include(x => x.Criterios).ToListAsync();

            // return mapper.Map<List<RubricaDTO>>(rubrica);
            return rubrica;
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<Rubrica>> Get(int id)
        {
            var rubrica = await context.Rubricas
                .Include(x => x.Criterios) 
                .FirstOrDefaultAsync(x=>x.Id == id);

            if (rubrica == null)
            {
                return NotFound();
            }
            
            return rubrica;
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Rubrica generoCreacionDTO)
        {
            var rubrica = mapper.Map<Rubrica>(generoCreacionDTO);
            Console.Write(rubrica.Criterios);
            var rubricaTemp = new Rubrica
            {
                Nombre = rubrica.Nombre,
                Clasificacion = rubrica.Clasificacion,
                Estado= rubrica.Estado,
                FechaCreacion= rubrica.FechaCreacion,
                Criterios = new List<Criterios>(rubrica.Criterios)
 
            };
        
            
          // var rubrica = mapper.Map<Rubrica>(generoCreacionDTO);
            context.Add(rubricaTemp);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] RubricaCreacionDTO generoCreacionDTO)
        {
            var rubrica = await context.Rubricas.FirstOrDefaultAsync(x => x.Id == id);

            if (rubrica == null)
            {
                return NotFound();
            }

            rubrica = mapper.Map(generoCreacionDTO, rubrica);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var existe = await context.Rubricas.AnyAsync(x => x.Id == id);

            if (!existe)
            {
                return NotFound();
            }

            context.Remove(new Rubrica() { Id = id });
            await context.SaveChangesAsync();
            return NoContent();
        }

    }
}
