using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Entities;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.Interfaces.Repositories;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Interfaces.Repositories
{
    public interface IClientRepository : IRepository<Client>
    {
    }
}
