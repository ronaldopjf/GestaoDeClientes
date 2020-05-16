using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Entities;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.Entities;
using System.Collections.Generic;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Entities
{
    public class Occupation : Entity
    {
        public string Name { get; set; }
        public ICollection<Client> Clients { get; set; } = new List<Client>();
    }
}
