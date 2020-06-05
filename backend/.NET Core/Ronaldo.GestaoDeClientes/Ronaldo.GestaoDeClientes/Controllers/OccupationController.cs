using Microsoft.AspNetCore.Mvc;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.DTOs;
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
        public IActionResult GetOccupation([FromRoute]int id)
        {
            var result = _occupationService.GetOccupation(id);
            if (result != null)
                return Ok(result);
            return NotFound();
        }

        [HttpPost]
        public IActionResult Create([FromBody]OccupationForCreateDto occupationForCreateDto)
        {
            var result = _occupationService.Create(occupationForCreateDto);
            if (result.Success)
            {
                return Created("/occupation", result.Object);
            }

            if (result.Message != null)
            {
                return BadRequest(new { error = result.Message });
            }

            return StatusCode(500);
        }

        [HttpPut]
        public IActionResult Update([FromBody]OccupationForUpdateDto occupationForUpdateDto)
        {
            var result = _occupationService.Update(occupationForUpdateDto);
            if (result.Success)
            {
                return Ok(result.Object);
            }

            if (!string.IsNullOrEmpty(result.Message))
            {
                return BadRequest(new { error = result.Message });
            }

            return StatusCode(500);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete([FromRoute]int id)
        {
            var result = _occupationService.Delete(id);

            if (result.Success)
            {
                return Ok(result.Object);
            }

            if (!string.IsNullOrEmpty(result.Message))
            {
                return BadRequest(new { error = result.Message });
            }

            return StatusCode(500);
        }

        [HttpPut("inactivate/{id}")]
        public IActionResult Inactivate([FromRoute]int id)
        {
            var result = _occupationService.Inactivate(id);
            if (result.Success)
            {
                return Ok(result);
            }
            if (!string.IsNullOrEmpty(result.Message))
            {
                return BadRequest(new { error = result.Message });
            }
            return StatusCode(500);
        }

        [HttpPut("activate/{id}")]
        public IActionResult Activate([FromRoute]int id)
        {
            var result = _occupationService.Activate(id);
            if (result.Success)
            {
                return Ok(result);
            }
            if (!string.IsNullOrEmpty(result.Message))
            {
                return BadRequest(new { error = result.Message });
            }
            return StatusCode(500);
        }
    }
}
