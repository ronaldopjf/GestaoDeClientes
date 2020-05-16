using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Entities;

namespace Ronaldo.GestaoDeClientes.Core.AutoMappers
{
    public class DomainToDtoMapping : AutoMapper.Profile
    {
        public DomainToDtoMapping()
        {
            CreateMap<Client, ClientForGetDto>().ReverseMap();
        }
    }
}
