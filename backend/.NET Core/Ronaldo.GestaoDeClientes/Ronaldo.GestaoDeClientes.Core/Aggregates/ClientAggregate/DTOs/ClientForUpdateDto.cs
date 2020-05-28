using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Entities;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.Entities;
using System;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.DTOs
{
    public class ClientForUpdateDto : Entity
    {
        public string Name { get; set; }
        public string SocialSecurityNumber { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Sex { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int IdAddress { get; set; }
        public Address Address { get; set; }
        public int IdOccupation { get; set; }
    }
}
