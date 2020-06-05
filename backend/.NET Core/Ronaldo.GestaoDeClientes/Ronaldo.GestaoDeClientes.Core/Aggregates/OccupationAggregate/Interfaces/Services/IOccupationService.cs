using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.DTOs;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.Entities;
using System.Collections.Generic;

namespace Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Interfaces.Services
{
    public interface IOccupationService
    {
        OccupationForGetDto GetOccupation(int id);
        ResponseObject<bool> Activate(int id);
        ResponseObject<bool> Inactivate(int id);
        ResponseObject<bool> Delete(int id);
        ResponseObject<OccupationForGetDto> Create(OccupationForCreateDto occupationForRegisterDto);
        ResponseObject<OccupationForGetDto> Update(OccupationForUpdateDto occupationForEditDto);
        IEnumerable<OccupationForGetDto> GetOccupations();
    }
}
