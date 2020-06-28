using AutoMapper;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Entities;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Interfaces.Repositories;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Interfaces.Services;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Interfaces.Repositories;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.Entities;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.UnityOfWork;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.Validators;
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
            if (!ValidateCPF.IsCpf(clientForRegisterDto.SocialSecurityNumber))
                return new ResponseObject<ClientForGetDto>(false, "CPF Inválido");

            var occupationForCheckId = _occupationRepository.GetById(clientForRegisterDto.IdOccupation);
            if (occupationForCheckId == null)
                return new ResponseObject<ClientForGetDto>(false, "Não existe um cargo com ID informado");

            var clientForRegister = _mapper.Map<Client>(clientForRegisterDto);
            _clientRepository.Create(clientForRegister);
            var commit = _unityOfWork.Commit();

            return commit
                ? new ResponseObject<ClientForGetDto>(true, obj: _mapper.Map<ClientForGetDto>(clientForRegister))
                : new ResponseObject<ClientForGetDto>(false);
        }

        public ResponseObject<ClientForGetDto> Update(ClientForUpdateDto clientForUpdateDto)
        {
            if (!ValidateCPF.IsCpf(clientForUpdateDto.SocialSecurityNumber))
                return new ResponseObject<ClientForGetDto>(false, "CPF Inválido");

            var occupationForCheckId = _occupationRepository.GetById(clientForUpdateDto.IdOccupation);
            if (occupationForCheckId == null)
                return new ResponseObject<ClientForGetDto>(false, "Não existe um cargo com o ID informado");

            var clientForCheckId = _clientRepository.GetById(clientForUpdateDto.Id);
            if (clientForCheckId == null)
                return new ResponseObject<ClientForGetDto>(false, "Não existe um usuário com o ID informado");

            var clientForUpdate = _mapper.Map<Client>(clientForUpdateDto);
            _clientRepository.Update(clientForUpdate);
            var commit = _unityOfWork.Commit();

            return commit
                ? new ResponseObject<ClientForGetDto>(true, obj: _mapper.Map<ClientForGetDto>(clientForUpdate))
                : new ResponseObject<ClientForGetDto>(false);
        }

        public ResponseObject<bool> Delete(int id)
        {
            _clientRepository.Delete(id);
            var commit = _unityOfWork.Commit();

            return commit
                ? new ResponseObject<bool>(true, "Cliente excluído com sucesso", true)
                : new ResponseObject<bool>(false, "A exclusão falhou", false);
        }

        public ResponseObject<bool> Activate(int id)
        {
            var clientForCheckId = _clientRepository.GetById(id);
            if (clientForCheckId == null)
                return new ResponseObject<bool>(false, "Não há cliente com o ID fornecido", false);

            var clientForActive = new Client { Id = id, Active = true };
            _clientRepository.ChangeActive(clientForActive);

            var commit = _unityOfWork.Commit();
            return new ResponseObject<bool>(commit, obj: commit);
        }

        public ResponseObject<bool> Inactivate(int id)
        {
            var clientForCheckId = _clientRepository.GetById(id);
            if (clientForCheckId == null)
                return new ResponseObject<bool>(false, "Não há cliente com o ID fornecido", false);

            var clientForInactive = new Client { Id = id, Active = false };
            _clientRepository.ChangeActive(clientForInactive);

            var commit = _unityOfWork.Commit();
            return new ResponseObject<bool>(commit, obj: commit);
        }
    }
}
