﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using MalignantTumorSystem.DAL.DALFactory;
using System.Reflection; 

namespace MalignantTumorSystem.DAL
{
    public class BaseDal<T> where T : class ,new()
    {
        DbContext Db = DbContextFactory.CreateDbContext();

        #region 计数 count
        /// <summary>
        /// 计数
        /// </summary>
        /// <returns></returns>
        public int CountEntities()
        {
            return Db.Set<T>().Count();
        } 
        #endregion

        #region 查询
        /// <summary>
        /// 查询过滤
        /// </summary>
        /// <param name="whereLambda"></param>
        /// <returns></returns>
        public IQueryable<T> LoadEntities(Expression<Func<T, bool>> whereLambda)
        {
            return Db.Set<T>().Where(whereLambda).AsQueryable();
        }
        /// <summary>
        /// EF不跟踪查询AsNoTracking() 
        /// 无跟踪查询而已，也就是说查询出来的对象不能直接做修改
        /// </summary>
        /// <param name="whereLambda"></param>
        /// <returns></returns>
        public IQueryable<T> LoadEntityAsNoTracking(Expression<Func<T, bool>> whereLambda)
        {
            //使用AsNoTracking()可以提高查询效率，不用在DbContext中进行缓存
            return Db.Set<T>().AsNoTracking().Where(whereLambda).AsQueryable();
        }
        /// <summary>
        /// 带排序的查询过滤
        /// </summary>
        /// <typeparam name="S"></typeparam>
        /// <param name="whereLambda"></param>
        /// <param name="orderByLambda"></param>
        /// <param name="isAsc"></param>
        /// <returns></returns>
        public IQueryable<T> LoadOrderEntities<S>(Expression<Func<T, bool>> whereLambda, Expression<Func<T, S>> orderByLambda, bool isAsc)
        {
            if (isAsc)
            {
                return Db.Set<T>().Where(whereLambda).OrderBy<T, S>(orderByLambda).AsQueryable();
            }
            else
            {
                return Db.Set<T>().Where(whereLambda).OrderByDescending<T, S>(orderByLambda).AsQueryable();
            }

        }
        
        #endregion

        #region 分页 查询
        /// <summary>
        /// 分页
        /// </summary>
        /// <typeparam name="S"></typeparam>
        /// <param name="pageSize"></param>
        /// <param name="pageIndex"></param>
        /// <param name="total"></param>
        /// <param name="whereLambda"></param>
        /// <param name="orderByLambda"></param>
        /// <param name="isAsc"></param>
        /// <returns></returns>
        public IQueryable<T> LoadPageEntities<S>(int pageSize, int pageIndex, out int totalCount,
                                                 Expression<Func<T, bool>> whereLambda,
                                                   Expression<Func<T, S>> orderByLambda,
                                                    bool isAsc)
        {
            var temp = Db.Set<T>().Where<T>(whereLambda);
            totalCount = temp.Count();
            if (isAsc)
            {
                temp = temp.OrderBy<T, S>(orderByLambda)
                             .Skip<T>(pageSize * (pageIndex - 1))
                             .Take<T>(pageSize).AsNoTracking().AsQueryable();

            }
            else
            {
                temp = temp.OrderByDescending<T, S>(orderByLambda)
                               .Skip<T>(pageSize * (pageIndex - 1))
                               .Take<T>(pageSize).AsNoTracking().AsQueryable();
            }
            return temp;
        } 
        #endregion

        #region 新增（方法名字 相同  利用重载）
        /// <summary>
        /// 增加
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public bool AddEntity(T entity)
        {
            try
            {
                Db.Set<T>().Add(entity);
                Db.Entry(entity).State = EntityState.Added;
                return true;
            }
            catch (Exception ex)
            {
                if (!string.IsNullOrEmpty(ex.InnerException.Message))
                    throw new Exception("新增失败：" + ex.InnerException.Message);
                throw new Exception("新增失败：" + ex.Message);
            }

        }
        /// <summary>
        /// 批量增加
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        public bool AddAllEntity(IList<T> list)
        {
            try
            {
                if (list != null && list.Any())
                {
                    foreach (T item in list)
                    {
                        Db.Set<T>().Add(item);
                        Db.Entry(item).State = EntityState.Added;
                    }
                    return true;
                }
                else
                {
                    throw new Exception("新增的实体集合为空");
                }
            }
            catch (Exception ex)
            {
                if (!string.IsNullOrEmpty(ex.InnerException.Message))
                    throw new Exception("新增失败：" + ex.InnerException.Message);
                throw new Exception("新增失败：" + ex.Message);
            }


        } 
        #endregion

        #region 修改（方法名相同  利用重载）
        /// <summary>
        /// 更新
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public bool UpdateEntity(T entity)
        {
            try
            {
                Db.Set<T>().Attach(entity);
                Db.Entry<T>(entity).State = EntityState.Modified;
                //return Db.SaveChanges() > 0;
                return true;
            }
            catch (Exception ex)
            {
                if (!string.IsNullOrEmpty(ex.InnerException.Message))
                    throw new Exception("修改失败：" + ex.InnerException.Message);
                throw new Exception("修改失败：" + ex.Message);
            }

        }

        public bool UpdateEntity(List<T> list)
        {
            try
            {
                Parallel.ForEach(list, (entity) =>
                {
                    Db.Set<T>().Attach(entity);
                    Db.Entry(entity).State = EntityState.Modified;
                });
                return true;
            }
            catch (Exception ex)
            {
                if (!string.IsNullOrEmpty(ex.InnerException.Message))
                    throw new Exception("修改失败：" + ex.InnerException.Message);
                throw new Exception("修改失败：" + ex.Message);
            }
        }
        /// <summary>
        /// 部分更新
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="propertyName"></param>
        /// <returns></returns>
        public bool UpdatePartialPropertity(T entity, string[] propertyName)
        {
            try
            {
                if (entity == null)
                {
                    throw new Exception("entity必须为实体对象");
                }
                if (propertyName == null || propertyName.Any() == false)
                {
                    throw new Exception("必须至少指定一个要修改的属性");
                }
                //2.将对象加入 EF容器,并获取当前实体对象的状态管理对象
                DbEntityEntry<T> entry = Db.Entry<T>(entity);
                //3.设置该对象未被修改过
                entry.State = EntityState.Unchanged;
                foreach (var item in propertyName)
                {
                    //4.设置该对象的 各个属性为修改状态，同时 entry.State 被修改为 Modified 状态
                    entry.Property(item).IsModified = true;
                }
                //5.关闭EF实体合法性检查（如果创建出来的要修改的数据有的字段没有赋值则关闭实体合法性检查，如果所有字段都赋值了则不用关闭EF实体合法性检查） 
                Db.Configuration.ValidateOnSaveEnabled = false;
                return true;
            }
            catch (Exception ex)
            {
                if (!string.IsNullOrEmpty(ex.InnerException.Message))
                    throw new Exception("修改失败：" + ex.InnerException.Message);
                throw new Exception("修改失败：" + ex.Message);
            }

        }
        /// <summary>
        /// 修改某个实体的 某些属性(根据id修改)【*用这个需要注意关闭检查】
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="propertyName"></param>
        /// <returns></returns>
        public bool UpdatePartialPropertity2(T entity, params string[] propertyName)
        {
            try
            {
                //关闭检查
                Db.Configuration.ValidateOnSaveEnabled = false;
                //附加到上下文
                var entry = Db.Entry<T>(entity);
                //把全部属性标记为没有修改
                entry.State = EntityState.Unchanged;
                for (int i = 0; i < propertyName.Length; i++)
                {
                    //标记要修改的属性
                    entry.Property(propertyName[i]).IsModified = true;
                }
                //打开检查
                Db.Configuration.ValidateOnSaveEnabled = true;
                return true;
            }
            catch (Exception ex)
            {
                if (!string.IsNullOrEmpty(ex.InnerException.Message))
                    throw new Exception("修改失败：" + ex.InnerException.Message);
                throw new Exception("修改失败：" + ex.Message);
            }

        }
        /// <summary>
        /// 根据条件 修改指定的 属性值
        /// </summary>
        /// <returns></returns>
        public bool UpdatePartialPropertityByLambda(Expression<Func<T, bool>> whereLambda, T entity, params string[] propertyName)
        {
            try
            {
                //查询出满足条件的所有实体
                var models = Db.Set<T>().Where(whereLambda).ToList();
                //利用反射获取 类 对象 的所有公共属性 默认是[GetProperties(BindingFlags.Instance | BindingFlags.Public)]
                var pros = typeof(T).GetProperties().ToList();
                //属性对象键值对
                List<PropertyInfo> dic = new List<PropertyInfo>();
                pros.ForEach(u =>
                {
                    for (int i = 0; i < propertyName.Length; i++)
                    {
                        //循环 判断 添加需要修改的 属性对象
                        if (u.Name == propertyName[i].Trim())
                        {
                            dic.Add(u);
                            break;
                        }
                    }
                });

                if (dic.Count > 0)//判断属性对象集合是否有数据
                {
                    foreach (var property in dic)
                    {
                        //取 传过来的对象 里面的值
                        var newValue = property.GetValue(entity);
                        foreach (var myModel in models)
                        {
                            //修改到对象集合
                            property.SetValue(myModel, newValue);
                        }
                    }
                }
                return true;
            }
            catch (Exception ex)
            {
                if (!string.IsNullOrEmpty(ex.InnerException.Message))
                    throw new Exception("修改失败：" + ex.InnerException.Message);
                throw new Exception("修改失败：" + ex.Message);
            }

        }

        /// <summary>
        ///  修改 多数 数据, 个别数据除外,proNames 不写 则是 修改全部
        /// </summary>
        /// <param name="model">要修改的实体对象</param>
        /// <param name="proNames">不需要要修改的 属性 名称</param>
        /// <returns></returns>
        public bool ModifyWithOutproNames(T model, string prymartKey, params string[] proNames)
        {
            DbEntityEntry entry = Db.Entry<T>(model);
            entry.State = EntityState.Unchanged;
            var properties = model.GetType().GetProperties();
            for (int i = 0; i < properties.Length; i++)
            {
                if (properties[i].PropertyType.Name.Contains("ICollection")
                    || properties[i].Name == prymartKey
                    || proNames.Contains(properties[i].Name)) continue;// 排除 外面 主键  proNames
                entry.Property(properties[i].Name).IsModified = true;
            }
            Db.Configuration.ValidateOnSaveEnabled = false;
            return true;
        } 
        #endregion

        #region 删除（可以方法名字 相同 利用重载）

        /// <summary>
        /// 根据主键删除
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public bool DeleteEntity(T entity)
        {
            try
            {
                //Db.Entry<T>(entity).State = EntityState.Deleted;
                //实例化一个Users对象，并指定Id的值 
                //Users entity = new Users() { Id = 1 };

                //1.将entity附加到上下文对象中，并获得EF容器的管理对象
                var entry = Db.Entry<T>(entity);
                //2.设置该对象的状态为删除
                entry.State = EntityState.Deleted;
                //return Db.SaveChanges() > 0;
                return true;
            }
            catch (Exception ex)
            {
                if (!string.IsNullOrEmpty(ex.InnerException.Message))
                    throw new Exception("删除失败：" + ex.InnerException.Message);
                throw new Exception("删除失败：" + ex.Message);
            }

        }
        /// <summary>
        /// 根据主键删除方法2
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public bool DeleteEntity2(T entity)
        {
            try
            {
                //实例化一个Users对象，并指定Id的值 
                //Users entity = new Users() { Id = 1 };

                //1.将entity附加到上下文对象中
                Db.Set<T>().Attach(entity);
                //2.删除entity对象
                Db.Set<T>().Remove(entity);
                //Db.Entry<T>(entity).State = EntityState.Deleted;
                return true;
            }
            catch (Exception ex)
            {
                if (!string.IsNullOrEmpty(ex.InnerException.Message))
                    throw new Exception("删除失败：" + ex.InnerException.Message);
                throw new Exception("删除失败：" + ex.Message);
            }

        }
        /// <summary>
        /// 批量删除
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        public bool DeleteAllEntity(IList<T> list)
        {
            try
            {
                if (list != null && list.Any())
                {
                    foreach (T item in list)
                    {
                        Db.Set<T>().Attach(item);
                        Db.Entry<T>(item).State = EntityState.Deleted;
                        //Db.Set<T>().Remove(item);
                    }
                    return true;
                }
                else
                {
                    throw new Exception("删除的实体集合为空");
                }
            }
            catch (Exception ex)
            {
                if (!string.IsNullOrEmpty(ex.InnerException.Message))
                    throw new Exception("删除失败：" + ex.InnerException.Message);
                throw new Exception("删除失败：" + ex.Message);
            }


        }
        /// <summary>
        /// 根据条件进行删除
        /// </summary>
        /// <param name="whereLambda"></param>
        /// <returns></returns>
        public bool DeleteByLambda(Expression<Func<T, bool>> whereLambda)
        {
            try
            {
                //查询满足条件的所有删除对象
                var models = Db.Set<T>().Where(whereLambda).ToList();
                models.ForEach(u =>
                {
                    //附加到上下文
                    Db.Set<T>().Attach(u);
                    //标记为删除状态
                    Db.Set<T>().Remove(u);
                });
                return true;
            }
            catch (Exception ex)
            {
                if (!string.IsNullOrEmpty(ex.InnerException.Message))
                    throw new Exception("删除失败：" + ex.InnerException.Message);
                throw new Exception("删除失败：" + ex.Message);
            }

        } 
        #endregion

        #region EF执行sql语句
        /// <summary>
        /// EF执行sql查询语句
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="parms"></param>
        /// <returns></returns>
        //Db.Database.SqlQuery<T>(sql, parms).AsQueryable();
        public IQueryable<T> LoadEntityBySql(string sql, params SqlParameter[] parms)
        {
            var result = Db.Database.SqlQuery<T>(sql, parms).AsQueryable();
            return result;
        }
        /// <summary>  
        /// 执行Sql查询  
        /// </summary>  
        /// <typeparam name="TEntity"></typeparam>  
        /// <param name="strSql"></param>  
        /// <param name="paramObjects"></param>  
        /// <returns></returns>  
        public List<TResult> LoadListBySql<TResult>(string strSql, params Object[] paramObjects)
        {
            if (paramObjects == null)
            {
                paramObjects = new object[0];
            }
            return this.Db.Database.SqlQuery<TResult>(strSql, paramObjects).ToList();
        }
        /// <summary>
        /// EF执行sql语句 增、删、改
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="parms"></param>
        /// <returns></returns>
        //Db.Database.ExecuteSqlCommand(sql, parms); 
        public int OperateEntityBySql(string sql, params SqlParameter[] parms)
        {
            var result = Db.Database.ExecuteSqlCommand(sql, parms);
            return result;
        }
        /// <summary>
        ///  调用存储过程返回一个指定的TResult
        /// </summary>
        /// <typeparam name="TResult"></typeparam>
        /// <param name="sql"></param>
        /// <param name="pamrs"></param>
        /// <returns></returns> 
        public List<TResult> RunProc<TResult>(string sql, params object[] pamrs)
        {
            return Db.Database.SqlQuery<TResult>(sql, pamrs).ToList();
        }  
        #endregion

        /// <summary>
        /// 统一ParameterExpression
        /// </summary>
        internal class ParameterReplacer : ExpressionVisitor
        {
            public ParameterReplacer(ParameterExpression paramExpr)
            {
                this.ParameterExpression = paramExpr;
            }

            public ParameterExpression ParameterExpression { get; private set; }

            public Expression Replace(Expression expr)
            {
                return this.Visit(expr);
            }

            protected override Expression VisitParameter(ParameterExpression p)
            {
                return this.ParameterExpression;
            }
        }
        public static class PredicateExtensionses
    {
        public static Expression<Func<T, bool>> True<T>() { return f => true; }

        public static Expression<Func<T, bool>> False<T>() { return f => false; }

        public static Expression<Func<T, bool>> And<T>(this Expression<Func<T, bool>> exp_left, Expression<Func<T, bool>> exp_right)
        {
            var candidateExpr = Expression.Parameter(typeof(T), "candidate");
            var parameterReplacer = new ParameterReplacer(candidateExpr);

            var left = parameterReplacer.Replace(exp_left.Body);
            var right = parameterReplacer.Replace(exp_right.Body);
            var body = Expression.And(left, right);

            return Expression.Lambda<Func<T, bool>>(body, candidateExpr);
        }

        public static Expression<Func<T, bool>> Or<T>(this Expression<Func<T, bool>> exp_left, Expression<Func<T, bool>> exp_right)
        {
            var candidateExpr = Expression.Parameter(typeof(T), "candidate");
            var parameterReplacer = new ParameterReplacer(candidateExpr);

            var left = parameterReplacer.Replace(exp_left.Body);
            var right = parameterReplacer.Replace(exp_right.Body);
            var body = Expression.Or(left, right);

            return Expression.Lambda<Func<T, bool>>(body, candidateExpr);
        }
        /// <summary>
        /// 多条件排序
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="source"></param>
        /// <param name="ordermodel"></param>
        /// <returns></returns>
        public static IQueryable<T> OrderBy<T>(this IQueryable<T> source, params OrderModel[] ordermodel) where T : class
        {
            var data = source;
            if (ordermodel == null) return data;
            Type type = typeof(T);
            for (int i = 0; i < ordermodel.Length; i++)
            {
                var item = ordermodel[i];
                PropertyInfo property = type.GetProperty(item.Orderby);
                if (property == null)
                    throw new ArgumentException("propertyName", "Not Exist");

                ParameterExpression param = Expression.Parameter(type, "p");
                Expression propertyAccessExpression = Expression.MakeMemberAccess(param, property);
                LambdaExpression orderByExpression = Expression.Lambda(propertyAccessExpression, param);

                string methodName = item.ascending ? "OrderBy" : "OrderByDescending";

                MethodCallExpression resultExp = Expression.Call(typeof(Queryable), methodName, new Type[] { type, property.PropertyType }, source.Expression, Expression.Quote(orderByExpression));
                data = data.Provider.CreateQuery<T>(resultExp);

            }
            return data;
        }
    }
        public class OrderModel
    {
        /// <summary>
        /// 排序字段
        /// </summary>
        public string Orderby { get; set; }
        /// <summary>
        /// 是否正序
        /// </summary>
        public bool ascending { get; set; }

        public static OrderModel[] GetOrderModels(string orderby)
        {
            if (string.IsNullOrEmpty(orderby))
                return null;
            var orderbys = orderby.TrimEnd(',').Split(',');
            OrderModel[] ordermodels = new OrderModel[orderbys.Length];
            for (int i = 0; i < orderbys.Length; i++)
            {
                var item = orderbys[i].Split(':');
                if (item.Length != 2)
                    throw new Exception("格式不正确,例:字段1:1,字段2:0");
                var model = new OrderModel();
                model.Orderby = item[0];
                model.ascending = item[1] == "1" ? true : false;
                ordermodels[i] = model;
            }
            return ordermodels;
        }
    } 
        /// <summary>
        /// 对数据库进行一次性操作
        /// </summary>
        /// <returns></returns>
        public bool SaveChanges()
        {
            return Db.SaveChanges() > 0;
        }



    }
}
