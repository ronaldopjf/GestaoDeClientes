using AutoMapper;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Entities;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Interfaces.Repositories;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Interfaces.Services;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.Entities;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.UnityOfWork;
using System.Collections.Generic;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Services
{
    public class OccupationService : IOccupationService
    {
        private readonly IMapper _mapper;
        private readonly IUnityOfWork _unityOfWork;
        private readonly IOccupationRepository _occupationRepository;

        public OccupationService(IMapper mapper, IUnityOfWork unityOfWork, IOccupationRepository occupationRepository)
        {
            _mapper = mapper;
            _unityOfWork = unityOfWork;
            _occupationRepository = occupationRepository;
        }

        public IEnumerable<OccupationForGetDto> GetOccupations()
        {
            var result = _occupationRepository.GetAll();
            return _mapper.Map<IEnumerable<OccupationForGetDto>>(result);
        }

        public OccupationForGetDto GetOccupation(int id)
        {
            throw new System.NotImplementedException();
        }

        public ResponseObject<OccupationForGetDto> Create(OccupationForCreateDto occupationForCreateDto)
        {
            var occupation = _mapper.Map<Occupation>(occupationForCreateDto);
            _occupationRepository.Create(occupation);
            var commit = _unityOfWork.Commit();

            return commit
                ? new ResponseObject<OccupationForGetDto>(true, obj: _mapper.Map<OccupationForGetDto>(occupation))
                : new ResponseObject<OccupationForGetDto>(false);
        }

        public ResponseObject<OccupationForGetDto> Update(OccupationForUpdateDto occupationForUpdateDto)
        {
            var occupationForCheckId = _occupationRepository.GetById(occupationForUpdateDto.Id);
            if (occupationForCheckId == null)
            {
                return new ResponseObject<OccupationForGetDto>(false, "Não existe um cargo com o ID informado");
            }

            var occupationForUpdate = _mapper.Map<Occupation>(occupationForUpdateDto);
            _occupationRepository.Update(occupationForUpdate);
            var commit = _unityOfWork.Commit();

            return commit
                ? new ResponseObject<OccupationForGetDto>(true, obj: _mapper.Map<OccupationForGetDto>(occupationForUpdate))
                : new ResponseObject<OccupationForGetDto>(false);
        }

        public ResponseObject<bool> Delete(int id)
        {
            _occupationRepository.Delete(id);
            var commit = _unityOfWork.Commit();

            return commit
                ? new ResponseObject<bool>(true, "Cargo excluído com sucesso", true)
                : new ResponseObject<bool>(false, "A exclusão falhou", false);
        }

        public ResponseObject<bool> Activate(int id)
        {
            var occupationForCheckId = _occupationRepository.GetById(id);
            if (occupationForCheckId == null)
            {
                return new ResponseObject<bool>(false, "Não existe um cargo com o ID informado");
            }

            var occupationForActive = new Occupation { Id = id, Active = true };
            _occupationRepository.ChangeActive(occupationForActive);

            var commit = _unityOfWork.Commit();
            return new ResponseObject<bool>(commit, obj: commit);
        }

        public ResponseObject<bool> Inactivate(int id)
        {
            var occupationForCheckId = _occupationRepository.GetById(id);
            if (occupationForCheckId == null)
            {
                return new ResponseObject<bool>(false, "Não existe um cargo com o ID informado");
            }

            var occupationForInactive = new Occupation { Id = id, Active = false };
            _occupationRepository.ChangeActive(occupationForInactive);

            var commit = _unityOfWork.Commit();
            return new ResponseObject<bool>(commit, obj: commit);
        }
    }
}
