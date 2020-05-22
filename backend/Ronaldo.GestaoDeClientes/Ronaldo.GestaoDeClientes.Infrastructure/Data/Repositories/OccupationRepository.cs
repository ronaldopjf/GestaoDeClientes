using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Entities;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Interfaces.Repositories;

namespace Ronaldo.GestaoDeClientes.Infrastructure.Data.Repositories
{
    public class OccupationRepository : Repository<Occupation>, IOccupationRepository
    {
        public OccupationRepository(DataContext dbContext) : base(dbContext)
        {
        }
    }
}
