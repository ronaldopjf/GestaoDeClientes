using Microsoft.EntityFrameworkCore;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Entities;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Interfaces.Repositories;
using System.Collections.Generic;
using System.Linq;

namespace Ronaldo.GestaoDeClientes.Infrastructure.Data.Repositories
{
    public class ClientRepository : Repository<Client>, IClientRepository
    {
        public ClientRepository(DataContext dbContext) : base(dbContext)
        {
        }

        public IEnumerable<Client> GetAll()
        {
            var clients = DbContext.Clients
                .Include(client => client.Address)
                .Include(client => client.Occupation)
                .ToList();

            return clients;
        }
    }
}
