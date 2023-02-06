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
    [Route("api/rutasdemedicion")]
    [ApiController]


    public class RutasController : ControllerBase
    {
        private readonly ILogger<RutasController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public RutasController(ILogger<RutasController> logger,
            ApplicationDbContext context,
            IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet] // api/rutasdemedicion
        public async Task<ActionResult<List<RutaDTO>>> Get([FromQuery] PaginacionDTO paginacionDTO)
        {
            var queryable = context.Rutasdemedicion.AsQueryable();
            await HttpContext.InsertarParametrosPaginacionEnCabecera(queryable);
            var rutas = await queryable.OrderBy(x => x.Carrera).Paginar(paginacionDTO).ToListAsync();
            return mapper.Map<List<RutaDTO>>(rutas);
        }

        [HttpGet("todos")]
        [AllowAnonymous]
        public async Task<ActionResult<List<RutaDTO>>> Todos()
        {
            var ruta = await context.Rutasdemedicion.OrderBy(x => x.Carrera).ToListAsync();
            return mapper.Map<List<RutaDTO>>(ruta);
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<RutaDTO>> Get(int Id)
        {
            var ruta = await context.Rutasdemedicion.FirstOrDefaultAsync(x => x.Id == Id);

            if (ruta == null)
            {
                return NotFound();
            }

            return mapper.Map<RutaDTO>(ruta);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] RutaCreacionDTO rutaCreacionDTO)
        {
            var ruta = mapper.Map<Rutas>(rutaCreacionDTO);
            context.Add(ruta);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] RutaCreacionDTO rutaCreacionDTO)
        {
            var ruta = await context.Rutasdemedicion.FirstOrDefaultAsync(x => x.Id == id);

            if (ruta == null)
            {
                return NotFound();
            }

            ruta = mapper.Map(rutaCreacionDTO, ruta);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var existe = await context.Rutasdemedicion.AnyAsync(x => x.Id == id);

            if (!existe)
            {
                return NotFound();
            }

            context.Remove(new Rutas() { Id = id });
            await context.SaveChangesAsync();
            return NoContent();
        }

    }
}
