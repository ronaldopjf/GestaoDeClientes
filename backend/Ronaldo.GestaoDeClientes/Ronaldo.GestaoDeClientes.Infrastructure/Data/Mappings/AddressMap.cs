using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Ronaldo.GestaoDeClientes.Core.Aggregates.ClientAggregate.Entities;

namespace Ronaldo.GestaoDeClientes.Infrastructure.Data.Mappings
{
    public class AddressMap : IEntityTypeConfiguration<Address>
    {
        public void Configure(EntityTypeBuilder<Address> builder)
        {
            builder.ToTable("TB_ENDERECO");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("ID_ENDERECO");

            builder.Property(x => x.TypeOfAddress)
                .HasMaxLength(12)
                .IsRequired()
                .HasColumnName("DS_TIPO_LOGRADOURO");

            builder.Property(x => x.StreetName)
                .HasMaxLength(100)
                .IsRequired()
                .HasColumnName("NM_LOGRADOURO");

            builder.Property(x => x.Number)
                .IsRequired()
                .HasColumnName("NR_IMOVEL");

            builder.Property(x => x.Complement)
                .HasMaxLength(50)
                .HasColumnName("DS_COMPLEMENTO");

            builder.Property(x => x.Neighborhood)
                .HasMaxLength(50)
                .IsRequired()
                .HasColumnName("NM_BAIRRO");

            builder.Property(x => x.City)
                .HasMaxLength(50)
                .IsRequired()
                .HasColumnName("NM_CIDADE");

            builder.Property(x => x.State)
                .HasMaxLength(50)
                .IsRequired()
                .HasColumnName("NM_ESTADO");

            builder.Property(x => x.PostalCode)
                .HasMaxLength(8)
                .IsRequired()
                .HasColumnName("NR_CEP");

            builder.Property(x => x.Active)
                .HasDefaultValue(true)
                .HasColumnName("FL_ATIVO");

            builder.HasMany(a => a.Clients)
                .WithOne(c => c.Address)
                .HasForeignKey(c => c.IdAddress);
        }
    }
}
