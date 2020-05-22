using AutoMapper;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Interfaces.Repositories;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Interfaces.Services;
using System.Collections.Generic;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Services
{
    public class OccupationService : IOccupationService
    {
        private readonly IMapper _mapper;
        private readonly IOccupationRepository _occupationRepository;

        public OccupationService(IMapper mapper, IOccupationRepository occupationRepository)
        {
            _mapper = mapper;
            _occupationRepository = occupationRepository;
        }

        public IEnumerable<OccupationForGetDto> GetOccupations()
        {
            var result = _occupationRepository.GetAll();
            return _mapper.Map<IEnumerable<OccupationForGetDto>>(result);
        }
    }
}
