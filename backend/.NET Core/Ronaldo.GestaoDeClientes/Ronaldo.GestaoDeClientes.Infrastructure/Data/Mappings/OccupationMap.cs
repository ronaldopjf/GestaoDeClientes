using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Ronaldo.GestaoDeClientes.Core.Aggregates.OccupationAggregate.Entities;

namespace Ronaldo.GestaoDeClientes.Infrastructure.Data.Mappings
{
    public class OccupationMap : IEntityTypeConfiguration<Occupation>
    {
        public void Configure(EntityTypeBuilder<Occupation> builder)
        {
            builder.ToTable("TB_CARGO");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("ID_CARGO");

            builder.Property(x => x.Name)
                .HasMaxLength(50)
                .IsRequired()
                .HasColumnName("NM_CARGO");

            builder.Property(x => x.Active)
                .HasDefaultValue(true)
                .HasColumnName("FL_ATIVO");

            builder.HasMany(o => o.Clients)
                .WithOne(c => c.Occupation)
                .HasForeignKey(c => c.IdOccupation);
        }
    }
}
