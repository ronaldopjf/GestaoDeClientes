using Ronaldo.GestaoDeClientes.Core.SharedKernel.Entities;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.DTOs
{
    public class AddressForUpdateDto : Entity
    {
        public string PostalCode { get; set; }
        public string PublicPlace { get; set; }
        public int Number { get; set; }
        public string Complement { get; set; }
        public string Neighborhood { get; set; }
        public string Locality { get; set; }
        public string State { get; set; }
    }
}
