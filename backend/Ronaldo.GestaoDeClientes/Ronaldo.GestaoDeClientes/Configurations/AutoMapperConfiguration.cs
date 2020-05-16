using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using Ronaldo.GestaoDeClientes.Core.AutoMappers;

namespace Ronaldo.GestaoDeClientes.Api.Configurations
{
    public static class AutoMapperConfiguration
    {
        public static void RegisterMappings(this IServiceCollection services)
        {
            var mappingConfig = new MapperConfiguration(mapperConfiguration =>
            {
                mapperConfiguration.AddProfile(new DomainToDtoMapping());
            });

            var mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);
        }
    }
}
