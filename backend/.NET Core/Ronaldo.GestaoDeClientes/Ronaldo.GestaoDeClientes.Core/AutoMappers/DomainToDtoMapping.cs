using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Entities;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Entities;

namespace Ronaldo.GestaoDeClientes.Core.AutoMappers
{
    public class DomainToDtoMapping : AutoMapper.Profile
    {
        public DomainToDtoMapping()
        {
            CreateMap<Client, ClientForGetDto>().ReverseMap();
            CreateMap<Client, ClientForCreateDto>().ReverseMap();
            CreateMap<Client, ClientForUpdateDto>().ReverseMap();
            CreateMap<Occupation, OccupationForGetDto>().ReverseMap();
            CreateMap<Occupation, OccupationForCreateDto>().ReverseMap();
            CreateMap<Occupation, OccupationForUpdateDto>().ReverseMap();
        }
    }
}
