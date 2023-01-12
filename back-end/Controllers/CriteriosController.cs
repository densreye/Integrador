using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using RubricasAPI.DTOs;
using RubricasAPI.Entidades;
using RubricasAPI.Filtros;
using RubricasAPI.Utilidades;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RubricasAPI.Controllers
{
    [Route("api/criterios")]
    [ApiController]


    public class CriteriosController : ControllerBase
    {
        private readonly ILogger<CriteriosController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public CriteriosController(ILogger<CriteriosController> logger,
            ApplicationDbContext context,
            IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet] // api/Criterios
        public async Task<ActionResult<List<CriteriosDTO>>> Get([FromQuery] PaginacionDTO paginacionDTO)
        {
            var queryable = context.Criterios.AsQueryable();
            await HttpContext.InsertarParametrosPaginacionEnCabecera(queryable);
            var criterios = await queryable.OrderBy(x => x.Criterio).Paginar(paginacionDTO).ToListAsync();
            return mapper.Map<List<CriteriosDTO>>(criterios);
        }

        [HttpGet("todos")]
        [AllowAnonymous]
        public async Task<ActionResult<List<CriteriosDTO>>> Todos()
        {
            var criterio = await context.Criterios.OrderBy(x => x.Criterio).ToListAsync();
            return mapper.Map<List<CriteriosDTO>>(criterio);
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<CriteriosDTO>> Get(int Id)
        {
            var criterio = await context.Criterios.FirstOrDefaultAsync(x => x.Id == Id);

            if (criterio == null)
            {
                return NotFound();
            }

            return mapper.Map<CriteriosDTO>(criterio);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] CriteriosCreacionDTO criteriosCreacionDTO)
        {
            var criterio = mapper.Map<Criterios>(criteriosCreacionDTO);
            context.Add(criterio);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] CriteriosCreacionDTO criteriosCreacionDTO)
        {
            var criterio = await context.Criterios.FirstOrDefaultAsync(x => x.Id == id);

            if (criterio == null)
            {
                return NotFound();
            }

            criterio = mapper.Map(criteriosCreacionDTO, criterio);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var existe = await context.Criterios.AnyAsync(x => x.Id == id);

            if (!existe)
            {
                return NotFound();
            }

            context.Remove(new Criterios() { Id = id });
            await context.SaveChangesAsync();
            return NoContent();
        }

    }
}
