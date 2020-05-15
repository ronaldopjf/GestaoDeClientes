namespace Ronaldo.GestaoDeClientes.Core.SharedKernel.UnityOfWork
{
    public interface IUnityOfWork
    {
        bool Commit();
    }
}
