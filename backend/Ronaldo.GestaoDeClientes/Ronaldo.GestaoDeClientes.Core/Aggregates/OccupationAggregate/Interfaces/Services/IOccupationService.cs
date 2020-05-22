using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.DTOs;
using System.Collections.Generic;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Interfaces.Services
{
    public interface IOccupationService
    {
        IEnumerable<OccupationForGetDto> GetOccupations();
    }
}
