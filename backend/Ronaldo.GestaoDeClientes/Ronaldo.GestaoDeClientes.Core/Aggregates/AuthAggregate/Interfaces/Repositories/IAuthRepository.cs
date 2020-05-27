using Ronaldo.GestaoDeClientes.Core.Aggregates.AuthAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Entities;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.AuthAggregate.Interfaces.Repositories
{
    public interface IAuthRepository
    {
        Client Login(ClientForLoginDto clientForLoginDto);
    }
}
