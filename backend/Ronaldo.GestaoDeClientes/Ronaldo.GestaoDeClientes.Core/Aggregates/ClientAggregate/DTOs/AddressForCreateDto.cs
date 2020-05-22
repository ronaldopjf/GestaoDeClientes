using Ronaldo.GestaoDeClientes.Core.SharedKernel.Entities;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.DTOs
{
    public class AddressForCreateDto : Entity
    {
        public string TypeOfAddress { get; set; }
        public string StreetName { get; set; }
        public int Number { get; set; }
        public string Complement { get; set; }
        public string Neighborhood { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int PostalCode { get; set; }

        public AddressForCreateDto()
        {
            Active = true;
        }
    }
}
