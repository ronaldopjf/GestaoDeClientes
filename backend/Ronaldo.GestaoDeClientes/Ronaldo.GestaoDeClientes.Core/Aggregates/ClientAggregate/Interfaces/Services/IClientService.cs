using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.Entities;
using System.Collections.Generic;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Interfaces.Services
{
    public interface IClientService
    {
        ClientForGetDto GetClient(int id);
        ResponseObject<bool> Activate(int id);
        ResponseObject<bool> Inactivate(int id);
        ResponseObject<ClientForGetDto> Create(ClientForCreateDto clientForRegisterDto);
        ResponseObject<ClientForGetDto> Update(ClientForUpdateDto clientForEditDto);
        IEnumerable<ClientForGetDto> GetClients();
    }
}
