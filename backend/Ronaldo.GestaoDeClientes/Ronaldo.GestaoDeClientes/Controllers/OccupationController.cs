using Microsoft.AspNetCore.Mvc;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Interfaces.Services;

namespace Ronaldo.GestaoDeClientes.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OccupationController : ControllerBase
    {
        private readonly IOccupationService _occupationService;

        public OccupationController(IOccupationService occupationService)
        {
            _occupationService = occupationService;
        }

        [HttpGet]
        public IActionResult GetOccupations()
        {
            var result = _occupationService.GetOccupations();
            if (result != null)
                return Ok(result);
            return BadRequest();
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
