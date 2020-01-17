using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using adminlte.BD;

namespace adminlte.Controllers
{
    public class BitacoraController : Controller
    {
        // GET: Bitacora
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public void InsertInBitacora(string id_user, string action, string coments)
        {

            using (DB_CEAEntities db = new DB_CEAEntities())
            {

                DateTime aDate = DateTime.Now;

                var bitacoraitem = new AdminBitacora()
                {
                    id_userCreated = id_user,
                    action = action,
                    comments = coments,
                    created_at = aDate,
                    id = RandomNumber(1, 1000000000)
                };

                db.AdminBitacora.Add(bitacoraitem);
                db.SaveChanges();
            }
        }

        public int RandomNumber(int min, int max)
        {
            Random random = new Random();
            return random.Next(min, max);
        }

        private static Random random = new Random();
        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }

    }
}
