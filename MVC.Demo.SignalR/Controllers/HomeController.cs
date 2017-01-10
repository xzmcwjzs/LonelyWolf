using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;

namespace MVC.Demo.SignalR.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Chat()
        {
            ViewBag.Message = "Your SignalR page.";
            return View();
        }

        public ActionResult Demo()
        {
            ViewBag.Message = "Your Demo page.";
            return View();
        }
        public ActionResult WebApi()
        {
            ViewBag.Message = "Your WebApi page.";
            //客户端对象的创建与初始化
            using (HttpClient client = new HttpClient())
            {
                 client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                //执行get操作
                HttpResponseMessage response = client.GetAsync("http://localhost:57398/api/Customer").Result;
                string temp = response.Content.ReadAsStringAsync().Result;
                ViewBag.json = temp;
            }  
            return View();
        }
    }
}