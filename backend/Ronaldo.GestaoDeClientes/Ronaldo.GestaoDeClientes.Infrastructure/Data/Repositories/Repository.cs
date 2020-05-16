using Microsoft.EntityFrameworkCore;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.Entities;
using Ronaldo.GestaoDeClientes.Core.SharedKernel.Interfaces.Repositories;
using System.Collections.Generic;
using System.Linq;

namespace Ronaldo.GestaoDeClientes.Infrastructure.Data.Repositories
{
    public class Repository<T> : IRepository<T> where T : Entity
    {
        protected readonly DataContext DbContext;

        public Repository(DataContext dbContext)
        {
            DbContext = dbContext;
        }

        public ICollection<T> GetAll()
        {
            return DbContext.Set<T>().ToList();
        }

        public T GetById(int id)
        {
            return DbContext.Set<T>().AsNoTracking().FirstOrDefault(x => x.Id == id);
        }

        public T Create(T entity)
        {
            DbContext.Set<T>().Add(entity);
            return entity;
        }

        public T Update(T entity)
        {
            DbContext.Entry(entity).State = EntityState.Modified;
            return entity;
        }

        public void Delete(int id)
        {
            var obj = DbContext.Set<T>().FirstOrDefault(x => x.Id == id);

            if (obj == null)
                return;

            DbContext.Set<T>().Remove(obj);
        }

        public void Inactivate(T entity)
        {
            DbContext.Entry(entity).Property(x => x.Active).IsModified = true;
        }
    }
}
