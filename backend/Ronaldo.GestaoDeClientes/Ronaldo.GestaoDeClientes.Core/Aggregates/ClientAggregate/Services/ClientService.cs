using AutoMapper;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Interfaces.Repositories;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Interfaces.Services;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.Entities;
using System.Collections.Generic;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Services
{
    public class ClientService : IClientService
    {
        private readonly IMapper _mapper;
        private readonly IClientRepository _clientRepository;

        public ClientService(IMapper mapper, IClientRepository clientRepository)
        {
            _mapper = mapper;
            _clientRepository = clientRepository;
        }

        public IEnumerable<ClientForGetDto> GetClients()
        {
            var clients = _mapper.Map<IEnumerable<ClientForGetDto>>(_clientRepository.GetAll());
            return clients;
        }

        public ClientForGetDto GetClient(int id)
        {
            throw new System.NotImplementedException();
        }

        public ResponseObject<ClientForGetDto> Create(ClientForCreateDto clientForRegisterDto)
        {
            throw new System.NotImplementedException();
        }

        public ResponseObject<ClientForGetDto> Update(ClientForUpdateDto clientForEditDto)
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
    }
}
