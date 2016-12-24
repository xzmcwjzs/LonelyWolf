using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using MalignantTumorSystem.IDAL;

namespace MalignantTumorSystem.IBLL
{
    public interface IBaseService<T> where T : class ,new()
    {
        int CountEntities();
        IBaseDal<T> CurrentDal { get; set; }
        IQueryable<T> LoadEntities(System.Linq.Expressions.Expression<Func<T, bool>> whereLambda);
        IQueryable<T> LoadEntityAsNoTracking(System.Linq.Expressions.Expression<Func<T, bool>> whereLambda);
        IQueryable<T> LoadOrderEntities<S>(Expression<Func<T, bool>> whereLambda, Expression<Func<T, S>> orderByLambda, bool isAsc);
        IQueryable<T> LoadPageEntities<S>(int pageSize, int pageIndex, out int totalCount, System.Linq.Expressions.Expression<Func<T, bool>> whereLambda, System.Linq.Expressions.Expression<Func<T, S>> orderbyLambda, bool isAsc);
        bool DeleteEntity(T entity);
        bool DeleteEntity2(T entity);
        bool DeleteAllEntity(IList<T> list);
        bool DeleteByLambda(Expression<Func<T, bool>> whereLambda);
        bool UpdateEntity(T entity);
        bool UpdateEntity(List<T> list);
        bool UpdatePartialPropertity(T entity, string[] propertyName);
        bool UpdatePartialPropertity2(T entity, params string[] propertyName);
        bool UpdatePartialPropertityByLambda(Expression<Func<T, bool>> whereLambda, T entity, params string[] propertyName);
        bool AddEntity(T entity);
        bool AddAllEntity(IList<T> list);
        IQueryable<T> LoadEntityBySql(string sql, params SqlParameter[] parms);
        List<TResult> LoadListBySql<TResult>(string strSql, params Object[] paramObjects);
        List<TResult> RunProc<TResult>(string sql, params object[] pamrs);
        int OperateEntityBySql(string sql, params SqlParameter[] parms);
        
    }
}
