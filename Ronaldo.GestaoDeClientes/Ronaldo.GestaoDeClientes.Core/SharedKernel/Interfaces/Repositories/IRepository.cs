using Ronaldo.GestaoDeClientes.Core.SharedKernel.Entities;
using System.Collections.Generic;

namespace Ronaldo.GestaoDeClientes.Core.SharedKernel.Interfaces.Repositories
{
    public interface IRepository<T> where T : Entity
    {
        ICollection<T> GetAll();
        T GetById(int id);
        T Create(T entity);
        T Update(T entity);
        void Delete(int id);
        void Inactivate(T entity);
    }
}
