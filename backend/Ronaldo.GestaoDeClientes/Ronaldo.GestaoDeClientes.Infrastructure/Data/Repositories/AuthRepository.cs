using Microsoft.EntityFrameworkCore;
using Ronaldo.GestaoDeClientes.Core.Aggregates.AuthAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.Aggregates.AuthAggregate.Interfaces.Repositories;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Entities;
using System.Linq;

namespace Ronaldo.GestaoDeClientes.Infrastructure.Data.Repositories
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _dbContext;

        public AuthRepository(DataContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Client Login(ClientForLoginDto clientForLoginDto)
        {
            var client = _dbContext.Clients
                .Include(client => client.Address)
                .Include(client => client.Occupation)
                .FirstOrDefault(x => x.Email == clientForLoginDto.Email && x.Password == clientForLoginDto.Password);

            return client;
        }
    }
}