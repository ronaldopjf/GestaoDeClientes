using Ronaldo.GestaoDeClientes.Core.SharedKernel.Entities;
using System.Collections.Generic;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Entities
{
    public class Address : Entity
    {
        public string PostalCode { get; set; }
        public string PublicPlace { get; set; }
        public int Number { get; set; }
        public string Complement { get; set; }
        public string Neighborhood { get; set; }
        public string Locality { get; set; }
        public string State { get; set; }
        public virtual IEnumerable<Client> Clients { get; set; }
    }
}
