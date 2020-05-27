using Ronaldo.GestaoDeClientes.Core.Aggregates.AuthAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.Entities;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.AuthAggregate.Interfaces.Services
{
    public interface IAuthService
    {
        ResponseObject<ClientForGetDto> Login(ClientForLoginDto clientForLoginDto);
    }
}
