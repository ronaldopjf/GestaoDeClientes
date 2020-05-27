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
                .HasMaxLength(14)
                .IsRequired()
                .HasColumnName("DS_CPF");

            builder.Property(x => x.DateOfBirth)
                .IsRequired()
                .HasColumnName("DT_NASCIMENTO");

            builder.Property(x => x.Sex)
                .HasMaxLength(10)
                .IsRequired()
                .HasColumnName("DS_SEXO");

            builder.Property(x => x.Email)
                .HasMaxLength(50)
                .IsRequired()
                .HasColumnName("DS_EMAIL");

            builder.Property(x => x.Password)
                .HasMaxLength(50)
                .IsRequired()
                .HasColumnName("DS_SENHA");

            builder.Property(x => x.IdAddress)
                .IsRequired()
                .HasColumnName("ID_ENDERECO");

            builder.Property(x => x.IdOccupation)
                .IsRequired()
                .HasColumnName("ID_CARGO");

            builder.Property(x => x.Active)
                .HasDefaultValue(true)
                .HasColumnName("FL_ATIVO");

            builder.HasOne(c => c.Address)
                .WithMany(a => a.Clients)
                .HasForeignKey(c => c.IdAddress);

            builder.HasOne(c => c.Occupation)
                .WithMany(o => o.Clients)
                .HasForeignKey(c => c.IdOccupation);
        }
    }
}
