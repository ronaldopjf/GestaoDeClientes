using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Entities;

namespace Ronaldo.GestaoDeClientes.Infrastructure.Data.Mappings
{
    public class ClientMap : IEntityTypeConfiguration<Client>
    {
        public void Configure(EntityTypeBuilder<Client> builder)
        {
            builder.ToTable("TB_CLIENTE");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("ID_CLIENTE");

            builder.Property(x => x.Name)
                .HasMaxLength(100)
                .IsRequired()
                .HasColumnName("NM_CLIENTE");

            builder.Property(x => x.SocialSecurityNumber)
                .HasMaxLength(11)
                .IsRequired()
                .HasColumnName("NR_CPF");

            builder.Property(x => x.DateOfBirth)
                .IsRequired()
                .HasColumnName("DT_NASCIMENTO");

            builder.Property(x => x.Sex)
                .HasMaxLength(10)
                .IsRequired()
                .HasColumnName("DS_SEXO");

            builder.Property(x => x.Active)
                .HasDefaultValue(true)
                .HasColumnName("FL_ATIVO");

            builder.HasOne(c => c.Address)
                .WithMany(a => a.Clients)
                .HasForeignKey(c => c.Address.Id);

            builder.HasOne(c => c.Occupation)
                .WithMany(o => o.Clients)
                .HasForeignKey(c => c.Occupation.Id);
        }
    }
}
