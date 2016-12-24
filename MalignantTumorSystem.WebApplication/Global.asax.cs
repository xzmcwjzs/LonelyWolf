using MalignantTumorSystem.WebApplication.Ninject; 
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing; 

namespace MalignantTumorSystem.WebApplication
{
    // 注意: 有关启用 IIS6 或 IIS7 经典模式的说明，
    // 请访问 http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication :System.Web.HttpApplication//Spring.Web.Mvc.SpringMvcApplication
    {
        protected void Application_Start()
        {
            #region Ninject IOC/DI 注入
            NinjectRegister.RegisterFovMvc(); //为ASP.NET MVC注册IOC容器
            NinjectRegister.RegisterFovWebApi(GlobalConfiguration.Configuration);//为WebApi注册IOC容器 
            #endregion

            AreaRegistration.RegisterAllAreas();

            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            #region LOG4Net读取配置
            //从配置文件读取log4net的配置，然后进行一个初始化工作。
            log4net.Config.XmlConfigurator.Configure(); 
            #endregion

            #region 检测EF性能
            //使用EntityFramework.Profiler-v2.0-Build-2233  检测EF性能
            HibernatingRhinos.Profiler.Appender.EntityFramework.EntityFrameworkProfiler.Initialize(); 
            #endregion

            //code first数据迁移 先删除  后新建
            //System.Data.Entity.Database.SetInitializer(new System.Data.Entity.DropCreateDatabaseIfModelChanges<Model.EntityFrameworkCodeFirstEntities>());
             
            #region CodeFirst自动迁移，并允许数据丢失

            //Database.SetInitializer(new MigrateDatabaseToLatestVersion<Model.DataBaseContext.MalignantTumorEntities, MalignantTumorSystem.Model.Migrations.Configuration>());

            //var dbMigrator = new DbMigrator(new Model.Migrations.Configuration());
            //dbMigrator.Update(); 

            #endregion

            //避免数据库自动创建、自动迁移
           // Database.SetInitializer<Model.DataBaseContext.MalignantTumorEntities>(null);
           
        }
 
    }
}