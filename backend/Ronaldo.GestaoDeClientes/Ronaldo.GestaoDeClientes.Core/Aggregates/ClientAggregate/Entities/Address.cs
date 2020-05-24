using Ronaldo.GestaoDeClientes.Core.SharedKernel.Entities;
using System.Collections.Generic;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Entities
{
    public class Address : Entity
    {
        public string TypeOfAddress { get; set; }
        public string StreetName { get; set; }
        public int Number { get; set; }
        public string Complement { get; set; }
        public string Neighborhood { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int PostalCode { get; set; }
        public virtual IEnumerable<Client> Clients { get; set; }
    }
}
