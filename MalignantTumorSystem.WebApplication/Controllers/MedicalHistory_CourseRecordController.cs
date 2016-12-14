using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MalignantTumorSystem.WebApplication.Controllers
{
    public class MedicalHistory_CourseRecordController : Controller
    {
        //
        // GET: /MedicalHistory_CourseRecord/

        #region 基本框架页
        public ActionResult Frame()
        {
            return View();
        }
        public ActionResult Top()
        {
            return View();
        }
        public ActionResult Body()
        {
            return View();
        }
        public ActionResult Left()
        {
            return View();
        }
        #endregion

        //新增页面
        public ActionResult CourseRecord()
        {
            return View();
        }

        //列表页
        public ActionResult List()
        {
            return View();
        }

    }
}
