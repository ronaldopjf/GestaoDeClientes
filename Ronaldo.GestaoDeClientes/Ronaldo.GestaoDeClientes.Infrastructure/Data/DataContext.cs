using Microsoft.EntityFrameworkCore;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Entities;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Entities;
using Ronaldo.GestaoDeClientes.Infrastructure.Data.Mappings;

namespace Ronaldo.GestaoDeClientes.Infrastructure.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Client> Clients { get; set; }
        public DbSet<Occupation> Occupations { get; set; }
        public DbSet<Address> Addresses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ClientMap());
            modelBuilder.ApplyConfiguration(new OccupationMap());
            modelBuilder.ApplyConfiguration(new AddressMap());
        }
    }
}
