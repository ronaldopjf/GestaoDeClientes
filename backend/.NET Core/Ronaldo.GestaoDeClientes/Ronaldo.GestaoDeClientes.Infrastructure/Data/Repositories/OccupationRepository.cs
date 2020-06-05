using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Entities;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Interfaces.Repositories;
using System.Collections.Generic;
using System.Linq;

namespace Ronaldo.GestaoDeClientes.Infrastructure.Data.Repositories
{
    public class OccupationRepository : Repository<Occupation>, IOccupationRepository
    {
        public OccupationRepository(DataContext dbContext) : base(dbContext)
        {
        }

        public IEnumerable<Occupation> GetAll()
        {
            var occupations = DbContext.Occupations
                .Where(occupation => occupation.Active == true)
                .ToList();

            return occupations;
        }
    }
}
