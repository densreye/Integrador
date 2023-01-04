using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
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
        public async Task<ActionResult<List<RubricaDTO>>> Todos()
        {
            var rubrica = await context.Rubricas.OrderBy(x => x.Nombre).ToListAsync();
            return mapper.Map<List<RubricaDTO>>(rubrica);
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<RubricaDTO>> Get(int Id)
        {
            var rubrica = await context.Rubricas.FirstOrDefaultAsync(x => x.Id == Id);

            if (rubrica == null)
            {
                return NotFound();
            }

            return mapper.Map<RubricaDTO>(rubrica);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] RubricaCreacionDTO generoCreacionDTO)
        {
            var rubrica = mapper.Map<Rubrica>(generoCreacionDTO);
            context.Add(rubrica);
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
