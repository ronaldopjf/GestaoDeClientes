using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Entities;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Interfaces.Repositories;

namespace Ronaldo.GestaoDeClientes.Infrastructure.Data.Repositories
{
    public class ClientRepository : Repository<Client>, IClientRepository
    {
        public ClientRepository(DataContext dbContext) : base(dbContext)
        {
        }
    }
}
