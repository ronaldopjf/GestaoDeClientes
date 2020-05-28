using Microsoft.AspNetCore.Mvc;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Interfaces.Services;

namespace Ronaldo.GestaoDeClientes.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClientController : ControllerBase
    {
        private readonly IClientService _clientService;

        public ClientController(IClientService clientService)
        {
            _clientService = clientService;
        }

        [HttpGet]
        public IActionResult GetClients()
        {
            var result = _clientService.GetClients();
            if (result != null)
                return Ok(result);
            return BadRequest();
        }

        [HttpGet("{id}")]
        public IActionResult GetClient([FromRoute]int id)
        {
            var result = _clientService.GetClient(id);
            if (result != null)
                return Ok(result);
            return NotFound();
        }

        [HttpPost]
        public IActionResult Create([FromBody]ClientForCreateDto clientForCreateDto)
        {
            var result = _clientService.Create(clientForCreateDto);
            if (result.Success)
            {
                return Created("/client", result.Object);
            }

            if (result.Message != null)
            {
                return BadRequest(new { error = result.Message });
            }

            return StatusCode(500);
        }

        [HttpPut]
        public IActionResult Update([FromBody]ClientForUpdateDto clientForUpdateDto)
        {
            var result = _clientService.Update(clientForUpdateDto);
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
            var result = _clientService.Delete(id);

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
            var result = _clientService.Inactivate(id);
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
            var result = _clientService.Activate(id);
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
