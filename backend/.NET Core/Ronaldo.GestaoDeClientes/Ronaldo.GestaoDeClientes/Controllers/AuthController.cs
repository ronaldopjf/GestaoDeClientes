﻿using Microsoft.AspNetCore.Mvc;
using Ronaldo.GestaoDeClientes.Core.Aggregates.AuthAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.Aggregates.AuthAggregate.Interfaces.Services;

namespace Ronaldo.GestaoDeClientes.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("authenticate")]
        public IActionResult Authenticate(ClientForLoginDto clientForLoginDto)
        {
            var result = _authService.Authenticate(clientForLoginDto);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(new { error = result.Message });
        }
    }
}
