using System;
using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using MalignantTumorSystem.WebApplication.Controllers;

namespace MalignantTumorSystem.UnitTest.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void DengLu()
        {
            HomeController controller = new HomeController();
            ViewResult result =controller.Index() as ViewResult;
            ViewDataDictionary viewData = result.ViewData;
            Assert.AreEqual("单元测试", viewData["Message"]);

        }
    }
}
