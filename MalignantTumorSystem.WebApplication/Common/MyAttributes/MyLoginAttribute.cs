using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MalignantTumorSystem.WebApplication.Common.MyAttributes
{
    public class MyLoginAttribute:AuthorizeAttribute
    {
        //protected override bool AuthorizeCore(HttpContextBase httpContext)
        //{
        //    var isAuthorized = false;
        //    if (httpContext != null && httpContext.Session != null)
        //    {
        //        if (HttpContext.Current.Session["worker"] != null)
        //        {
        //            isAuthorized = true;
        //        }
        //    }

        //    return isAuthorized;
        //}
        //protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        //{
        //    base.HandleUnauthorizedRequest(filterContext); 
        //    filterContext.HttpContext.Response.Write("<script type='text/javascript'> window.top.location='/Home/Index';</script>"); 
        //}
        
        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            var loginModel = filterContext.HttpContext.Session["worker"];
            if(loginModel==null){
                //filterContext.Result =new RedirectResult("/Home/Index");
                filterContext.HttpContext.Response.Write("<script type='text/javascript'> window.top.location.href='/Home/Index';</script>"); 
            }
        }

    }
}