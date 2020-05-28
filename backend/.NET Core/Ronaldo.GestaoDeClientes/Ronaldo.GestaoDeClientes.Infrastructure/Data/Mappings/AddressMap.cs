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

            builder.Property(x => x.PostalCode)
                .HasMaxLength(10)
                .IsRequired()
                .HasColumnName("DS_CEP");

            builder.Property(x => x.PublicPlace)
                .HasMaxLength(100)
                .IsRequired()
                .HasColumnName("DS_LOGRADOURO");

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

            builder.Property(x => x.Locality)
                .HasMaxLength(50)
                .IsRequired()
                .HasColumnName("NM_LOCALIDADE");

            builder.Property(x => x.State)
                .HasMaxLength(50)
                .IsRequired()
                .HasColumnName("NM_ESTADO");

            builder.Property(x => x.Active)
                .HasDefaultValue(true)
                .HasColumnName("FL_ATIVO");

            builder.HasMany(a => a.Clients)
                .WithOne(c => c.Address)
                .HasForeignKey(c => c.IdAddress);
        }
    }
}
