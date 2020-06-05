namespace Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.DTOs
{
    public class OccupationForUpdateDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; } = true;
    }
}
