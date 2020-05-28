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

        public Client Update(Client client)
        {
            var address = DbContext.Addresses.FirstOrDefault(a => a.Id == client.Address.Id);
            DbContext.Entry(address).CurrentValues.SetValues(client.Address);
            DbContext.Entry(client).State = EntityState.Modified;
            return client;
        }

        public void Delete(int id)
        {
            var client = DbContext.Clients
                .Include(client => client.Address)
                .FirstOrDefault(c => c.Id == id);

            if (client.Address != null)
                DbContext.Remove(client.Address);

            if (client == null)
                return;

            DbContext.Clients.Remove(client);
        }
    }
}
