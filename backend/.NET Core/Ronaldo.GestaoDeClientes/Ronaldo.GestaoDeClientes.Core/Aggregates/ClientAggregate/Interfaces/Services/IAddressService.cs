using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.Entities;
using System.Collections.Generic;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Interfaces.Services
{
    public interface IAddressService
    {
        AddressForGetDto GetAddress(int id);
        ResponseObject<bool> Activate(int id);
        ResponseObject<bool> Inactivate(int id);
        ResponseObject<AddressForGetDto> Create(AddressForCreateDto addressForCreateDto);
        ResponseObject<AddressForGetDto> Update(AddressForUpdateDto addressForUpdateDto);
        IEnumerable<AddressForGetDto> GetClients();
    }
}
