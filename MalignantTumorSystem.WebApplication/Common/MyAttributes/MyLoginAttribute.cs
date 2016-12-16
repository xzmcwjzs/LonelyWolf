using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MalignantTumorSystem.WebApplication.Common.MyAttributes
{
    public class MyLoginAttribute:AuthorizeAttribute
    {
        
        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            var loginModel = filterContext.HttpContext.Session["worker"];
            if(loginModel==null || !(loginModel is Model.Entities.Comm_Platform_Worker)){
                //filterContext.Result =new RedirectResult("/Home/Index");
                //filterContext.Result = new RedirectToRouteResult
                //    (new System.Web.Routing.RouteValueDictionary
                //    (new { controller = "Home", action = "Index" }));
                filterContext.HttpContext.Response.Write("<script type='text/javascript'> window.top.location.href='/Home/Index';</script>"); 
            }
        }

    }
}