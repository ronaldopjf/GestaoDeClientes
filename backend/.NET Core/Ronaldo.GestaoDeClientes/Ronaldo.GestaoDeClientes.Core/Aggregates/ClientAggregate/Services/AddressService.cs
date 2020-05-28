using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Interfaces.Services;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.Entities;
using System.Collections.Generic;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Services
{
    public class AddressService : IAddressService
    {
        public AddressForGetDto GetAddress(int id)
        {
            throw new System.NotImplementedException();
        }

        public ResponseObject<bool> Activate(int id)
        {
            throw new System.NotImplementedException();
        }

        public ResponseObject<bool> Inactivate(int id)
        {
            throw new System.NotImplementedException();
        }

        public ResponseObject<AddressForGetDto> Create(AddressForCreateDto addressForCreateDto)
        {
            throw new System.NotImplementedException();
        }

        public ResponseObject<AddressForGetDto> Update(AddressForUpdateDto addressForUpdateDto)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<AddressForGetDto> GetClients()
        {
            throw new System.NotImplementedException();
        }
    }
}
