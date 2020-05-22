using AutoMapper;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Entities;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Interfaces.Repositories;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Interfaces.Services;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Interfaces.Repositories;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.Entities;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.UnityOfWork;
using System.Collections.Generic;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Services
{
    public class ClientService : IClientService
    {
        private readonly IMapper _mapper;
        private readonly IUnityOfWork _unityOfWork;
        private readonly IClientRepository _clientRepository;
        private readonly IOccupationRepository _occupationRepository;

        public ClientService(IMapper mapper, IUnityOfWork unityOfWork, IClientRepository clientRepository, IOccupationRepository occupationRepository)
        {
            _mapper = mapper;
            _unityOfWork = unityOfWork;
            _clientRepository = clientRepository;
            _occupationRepository = occupationRepository;
        }

        public IEnumerable<ClientForGetDto> GetClients()
        {
            var clients = _clientRepository.GetAll();
            return _mapper.Map<IEnumerable<ClientForGetDto>>(clients);
        }

        public ClientForGetDto GetClient(int id)
        {
            throw new System.NotImplementedException();
        }

        public ResponseObject<ClientForGetDto> Create(ClientForCreateDto clientForRegisterDto)
        {
            var occupation = _occupationRepository.GetById(clientForRegisterDto.IdOccupation);
            if (occupation == null)
                return new ResponseObject<ClientForGetDto>(false, "Não existe um cargo com cargoId informado");

            var client = _mapper.Map<Client>(clientForRegisterDto);
            _clientRepository.Create(client);
            var commit = _unityOfWork.Commit();

            return commit
                ? new ResponseObject<ClientForGetDto>(true, obj: _mapper.Map<ClientForGetDto>(client))
                : new ResponseObject<ClientForGetDto>(false);
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
