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

        public ResponseObject<ClientForGetDto> Update(ClientForUpdateDto clientForUpdateDto)
        {
            var occupation = _occupationRepository.GetById(clientForUpdateDto.IdOccupation);
            if (occupation == null)
            {
                return new ResponseObject<ClientForGetDto>(false, "Não existe um cargo com o id informado");
            }

            var verifyUserBd = _clientRepository.GetById(clientForUpdateDto.Id);
            if (verifyUserBd == null)
            {
                return new ResponseObject<ClientForGetDto>(false, "Não existe usuário com o id informado");
            }

            var client = _mapper.Map<Client>(clientForUpdateDto);

            _clientRepository.Update(client);
            var commit = _unityOfWork.Commit();

            return commit
                ? new ResponseObject<ClientForGetDto>(true, obj: _mapper.Map<ClientForGetDto>(client))
                : new ResponseObject<ClientForGetDto>(false);
        }

        public ResponseObject<bool> Delete(int id)
        {
            _clientRepository.Delete(id);
            var commit = _unityOfWork.Commit();

            return commit
                ? new ResponseObject<bool>(true, "Ação realizada com sucesso", true)
                : new ResponseObject<bool>(false, "A ação falhou", false);
        }

        public ResponseObject<bool> Activate(int id)
        {
            var clientForCheckId = _clientRepository.GetById(id);
            if (clientForCheckId == null)
            {
                return new ResponseObject<bool>(false, "Não há cliente com o ID fornecido", false);
            }

            var client = new Client { Id = id, Active = true };
            _clientRepository.ChangeActive(client);

            var commit = _unityOfWork.Commit();
            return new ResponseObject<bool>(commit, obj: commit);
        }

        public ResponseObject<bool> Inactivate(int id)
        {
            var clientForCheckId = _clientRepository.GetById(id);
            if (clientForCheckId == null)
            {
                return new ResponseObject<bool>(false, "Não há cliente com o ID fornecido", false);
            }

            var client = new Client { Id = id, Active = false };
            _clientRepository.ChangeActive(client);

            var commit = _unityOfWork.Commit();
            return new ResponseObject<bool>(commit, obj: commit);
        }
    }
}
