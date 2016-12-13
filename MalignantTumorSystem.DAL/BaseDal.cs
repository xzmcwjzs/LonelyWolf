using System;
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
        /// <summary>
        /// 计数
        /// </summary>
        /// <returns></returns>
        public int CountEntities() {
            return Db.Set<T>().Count();
        }
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
        /// <summary>
        /// 增加
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public bool AddEntity(T entity)
        {
            Db.Set<T>().Add(entity);
            //Db.SaveChanges();
            return true;
        }
        /// <summary>
        /// 批量增加
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        public bool AddAllEntity(IList<T> list)
        {
            if (list != null && list.Any())
            {
                foreach (T item in list)
                {
                    Db.Set<T>().Add(item);
                }
                return true;
            }
            else
            {
                return true;
            }

        }
        /// <summary>
        /// 更新
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public bool UpdateEntity(T entity)
        {
            Db.Set<T>().Attach(entity);
            Db.Entry<T>(entity).State = EntityState.Modified;
            //return Db.SaveChanges() > 0;
            return true;
        }
        /// <summary>
        /// 部分更新
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="propertyName"></param>
        /// <returns></returns>
        public bool UpdatePartialPropertity(T entity, string[] propertyName)
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
        /// <summary>
        /// 修改某个实体的 某些属性(根据id修改)【*用这个需要注意关闭检查】
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="propertyName"></param>
        /// <returns></returns>
        public bool UpdatePartialPropertity2(T entity,params string[] propertyName){
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
        /// <summary>
        /// 根据条件 修改指定的 属性值
        /// </summary>
        /// <returns></returns>
        public bool UpdatePartialPropertityByLambda(Expression<Func<T,bool>> whereLambda,T entity,params string[] propertyName) { 
            //查询出满足条件的所有实体
            var models = Db.Set<T>().Where(whereLambda).ToList();
            //利用反射获取 类 对象 的所有公共属性 默认是[GetProperties(BindingFlags.Instance | BindingFlags.Public)]
            var pros = typeof(T).GetProperties().ToList();
            //属性对象键值对
            List<PropertyInfo> dic = new List<PropertyInfo>();
            pros.ForEach(u => {
                for (int i = 0; i < propertyName.Length; i++)
                {
                    //循环 判断 添加需要修改的 属性对象
                    if (u.Name == propertyName[i].Trim()) {
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
                        property.SetValue(myModel,newValue);
                    }
                }
            }
            return true;
        }

        /// <summary>
        ///  修改 多数 数据, 个别数据除外,proNames 不写 则是 修改全部
        /// </summary>
        /// <param name="model">要修改的实体对象</param>
        /// <param name="proNames">不需要要修改的 属性 名称</param>
        /// <returns></returns>
        public bool ModifyWithOutproNames<T>(T model, string prymartKey, params string[] proNames) where T : class
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

        /// <summary>
        /// 根据主键删除
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public bool DeleteEntity(T entity)
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
        /// <summary>
        /// 根据主键删除方法2
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public bool DeleteEntity2(T entity)
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
        /// <summary>
        /// 批量删除
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        public bool DeleteAllEntity(IList<T> list)
        {
            if (list != null && list.Any())
            {
                foreach (T item in list)
                {
                    Db.Entry<T>(item).State = EntityState.Deleted;
                    //Db.Set<T>().Remove(item);
                }
                return true;
            }
            else
            {
                return true;
            }

        }
        /// <summary>
        /// 根据条件进行删除
        /// </summary>
        /// <param name="whereLambda"></param>
        /// <returns></returns>
        public bool DeleteByLambda(Expression<Func<T,bool>> whereLambda) { 
            //查询满足条件的所有删除对象
            var models = Db.Set<T>().Where(whereLambda).ToList();
            models.ForEach(u => { 
                //附加到上下文
                Db.Set<T>().Attach(u);
                //标记为删除状态
                Db.Set<T>().Remove(u);
            });
            return true;
        }
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
        public List<T> LoadListBySql(string strSql, params Object[] paramObjects) 
        {
            if (paramObjects == null)
            {
                paramObjects = new object[0];
            }
            return this.Db.Database.SqlQuery<T>(strSql, paramObjects).ToList();
        }  
        /// <summary>
        /// EF执行sql语句 增、删、改
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="parms"></param>
        /// <returns></returns>
        //Db.Database.ExecuteSqlCommand(sql, parms); 
        public int  OperateEntityBySql(string sql, params SqlParameter[] parms)
        {
            var result = Db.Database.ExecuteSqlCommand(sql, parms);
            return result;
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
