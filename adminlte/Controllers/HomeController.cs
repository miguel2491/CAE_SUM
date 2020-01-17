using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace adminlte.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Views/Examples/Login.cshtml");
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";
            string ip = Request.UserHostAddress;
            string hostname = Request.UserHostName;
            ViewBag.IP = ip;
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        /*-------------------------------------*/
       
       
        /*--------------------------*/
    }
}