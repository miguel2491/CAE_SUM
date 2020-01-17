using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace adminlte.Controllers
{
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Dashboardv1()
        {
            return View("~/Views/Examples/Login.cshtml");
        }
        public ActionResult Inicio()
        {
            return View("~/Views/Dashboard/Dashboardv1.cshtml");
        }
        public ActionResult Dashboardv2()
        {
            return View();
        }
    }
}