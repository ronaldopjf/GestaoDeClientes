using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Ronaldo.GestaoDeClientes.Core.Aggregates.AuthAggregate.Interfaces.Repositories;
using Ronaldo.GestaoDeClientes.Core.Aggregates.AuthAggregate.Interfaces.Services;
using Ronaldo.GestaoDeClientes.Core.Aggregates.AuthAggregate.Services;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Interfaces.Repositories;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Interfaces.Services;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Services;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Interfaces.Repositories;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Interfaces.Services;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Services;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.UnityOfWork;
using Ronaldo.GestaoDeClientes.Infrastructure.Data;
using Ronaldo.GestaoDeClientes.Infrastructure.Data.Repositories;
using Ronaldo.GestaoDeClientes.Infrastructure.Data.UnityOfWork;

namespace Ronaldo.GestaoDeClientes.Cross_Cutting.Injector
{
    public static class Injector
    {
        public static void RegisterServices(this IServiceCollection services, IConfiguration configuration)
        {
            // Entity Framework
            services.AddScoped<DataContext>();

            services.AddDbContext<DataContext>(x =>
                x.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));

            // Unity Of Work
            services.AddScoped<IUnityOfWork, UnityOfWork>();

            // Services
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IClientService, ClientService>();
            services.AddScoped<IOccupationService, OccupationService>();
            services.AddScoped<IAddressService, AddressService>();

            // Repositories
            services.AddScoped<IAuthRepository, AuthRepository>();
            services.AddScoped<IClientRepository, ClientRepository>();
            services.AddScoped<IOccupationRepository, OccupationRepository>();
            services.AddScoped<IAddressRepository, AddressRepository>();

            // Validators

            // Configuration
        }
    }
}
