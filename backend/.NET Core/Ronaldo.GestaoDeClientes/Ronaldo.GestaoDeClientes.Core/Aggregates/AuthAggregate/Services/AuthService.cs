using AutoMapper;
using Ronaldo.GestaoDeClientes.Core.Aggregates.AuthAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.Aggregates.AuthAggregate.Interfaces.Repositories;
using Ronaldo.GestaoDeClientes.Core.Aggregates.AuthAggregate.Interfaces.Services;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.Entities;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.AuthAggregate.Services
{
    public class AuthService : IAuthService
    {
        private readonly IMapper _mapper;
        private readonly IAuthRepository _authRepository;

        public AuthService(IMapper mapper, IAuthRepository authRepository)
        {
            _mapper = mapper;
            _authRepository = authRepository;
        }

        public ResponseObject<ClientForGetDto> Authenticate(ClientForLoginDto clientForLoginDto)
        {
            var client = _authRepository.Authenticate(clientForLoginDto);

            if (client == null)
                return new ResponseObject<ClientForGetDto>(false, "Dados incorretos", null);

            return new ResponseObject<ClientForGetDto>(true, obj: _mapper.Map<ClientForGetDto>(client));
        }
    }
}
