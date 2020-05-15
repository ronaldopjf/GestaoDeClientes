using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.UnityOfWork;
using Ronaldo.GestaoDeClientes.Infrastructure.Data;
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

            // Repositories

            // Validators

            // Configuration
        }
    }
}
