namespace Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.DTOs
{
    public class OccupationForCreateDto
    {
        public string Name { get; set; }
        public bool Active { get; set; } = true;
    }
}
