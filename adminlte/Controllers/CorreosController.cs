using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace adminlte.Controllers
{
    public class CorreosController : Controller
    {
        // GET: Correos
        public ActionResult Index()
        {
            return View();
        }
        //Enviar
        public ActionResult Enviar()
        {
            return View();
        }
    }
}
