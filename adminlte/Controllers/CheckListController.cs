using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using adminlte.BD;

namespace adminlte.Controllers
{
    public class CheckListController : Controller
    {
        // GET: CheckList
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AgregarCheckList()
        {
            return View();
        }
        public ActionResult AgregarContenidoCheckList()
        {
            return View();
        }
        public ActionResult ListadoCheckList()
        {
            return View();
        }
        public ActionResult ListadoContenidoCheckList() {
            return View();
        }
        [HttpPost]
        public JsonResult InsertDatos(CHECK_LIST chl)
        {

            using (DB_CEAEntities db = new DB_CEAEntities())
            {

                var cl = new CHECK_LIST()
                {
                    id_cliente = chl.id_cliente,
                    id_asesor = chl.id_asesor,
                    codigo_operacion = chl.codigo_operacion,
                    secuencia = chl.secuencia,
                    monto_solicitado = chl.monto_solicitado,
                    tipo_garantia = chl.tipo_garantia,
                    fecha_validacion_checklist = chl.fecha_validacion_checklist,
                    numero_integrantes = chl.numero_integrantes,
                    tipo_check_list = chl.tipo_check_list,
                    status = chl.status
                };

                db.CHECK_LIST.Add(cl);

                //db..add(cat);
                db.SaveChanges();
            }
            return Json("Ok");
        }

        [HttpGet]
        public ActionResult Getchecks()
        {
            DB_CEAEntities db = new DB_CEAEntities();
            return Json(db.CHECK_LIST.Select(x => new
            {
                id_check_list = x.id_check_list,
                checkList = x.tipo_check_list
            }).ToList(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public ActionResult GetContenidoChecks() {
            DB_CEAEntities db = new DB_CEAEntities();
            return Json(db.CONTENIDO_CHECK.Select(x => new
            {
                id = x.id_documento,
                descripcion = x.descripcion
            }).ToList(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult InsertDatosContenido(CONTENIDO_CHECK cc) {

            using (DB_CEAEntities db = new DB_CEAEntities())
            {

                var co = new CONTENIDO_CHECK()
                {
                    id_check_list = cc.id_check_list,
                    descripcion = cc.descripcion,
                    status_SI = cc.status_SI,
                    status_na = cc.status_na,
                    status_carpeta_electronica = cc.status_carpeta_electronica,
                    seccion_pertenece = cc.seccion_pertenece,
                    status = cc.status
                };

                db.CONTENIDO_CHECK.Add(co);

                //db..add(cat);
                db.SaveChanges();
            }
            return Json("Ok");
        }

        [HttpGet]
        public ActionResult GetListCheck() {
            DB_CEAEntities db = new DB_CEAEntities();
            return Json(db.CHECK_LIST.Select(x => new
            {
                checkList = x.id_check_list,
                id_cliente = x.id_cliente,
                id_asesor = x.id_asesor,
                tipo_check = x.tipo_check_list,
                fecha_valida = x.fecha_validacion_checklist.ToString(),
            }).ToList(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult EliminaCheck(int? id) {
            DB_CEAEntities db = new DB_CEAEntities();
            try
            {
                CHECK_LIST check = db.CHECK_LIST.Find(id);
                db.CHECK_LIST.Remove(check);
                db.SaveChanges();
            }
            catch (DataException/* dex */)
            {
                //Log the error (uncomment dex variable name and add a line here to write a log.
                return Json("Error");
            }
            return Json("Success");
        }

        [HttpGet]
        public JsonResult ConsultaCheckUnico(int id)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                db.Configuration.LazyLoadingEnabled = false;

                var user = db.CHECK_LIST.ToList<CHECK_LIST>().Where(u => u.id_check_list.Equals(id)).FirstOrDefault();

                return Json(user, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public JsonResult ConsultaCheckContenido(int id)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                db.Configuration.LazyLoadingEnabled = false;

                var user = db.CONTENIDO_CHECK.ToList<CONTENIDO_CHECK>().Where(u => u.id_check_list.Equals(id));

                return Json(user, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public JsonResult UpdateCheck(int id, string tipo_check, int monto_solicitado, short secuencia, string tipo_garantia, string codigo_operacion)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                db.Configuration.LazyLoadingEnabled = false;
                var valor = db.CHECK_LIST.ToList<CHECK_LIST>().Where(u => u.id_check_list.Equals(id)).FirstOrDefault();
                valor.secuencia = secuencia;
                valor.monto_solicitado = monto_solicitado;
                valor.tipo_check_list = tipo_check;
                valor.tipo_garantia = tipo_garantia;
                valor.codigo_operacion = codigo_operacion;
                db.SaveChanges();
            }
            return Json("Ok");
        }
        [HttpGet]
        public ActionResult GetListContenidoCheck() {
            DB_CEAEntities db = new DB_CEAEntities();
            return Json(db.CONTENIDO_CHECK.Select(x => new
            {
                contenidoID = x.id_documento,
                id_check = x.id_check_list,
                descripcion = x.descripcion,
                status_SI = x.status_SI,
                status_na = x.status_na,
                status_carpeta_electronica = x.status_carpeta_electronica,
                status = x.status,
                seccion = x.seccion_pertenece
            }).ToList(), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult ConsultaContenidoUnico(int id)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                db.Configuration.LazyLoadingEnabled = false;

                var user = db.CONTENIDO_CHECK.ToList<CONTENIDO_CHECK>().Where(u => u.id_documento.Equals(id)).FirstOrDefault();

                return Json(user, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult EliminaCheckContenido(int? id)
        {
            DB_CEAEntities db = new DB_CEAEntities();
            try
            {
                CONTENIDO_CHECK check = db.CONTENIDO_CHECK.Find(id);
                db.CONTENIDO_CHECK.Remove(check);
                db.SaveChanges();
            }
            catch (DataException/* dex */)
            {
                //Log the error (uncomment dex variable name and add a line here to write a log.
                return Json("Error");
            }
            return Json("Success");
        }
        [HttpPost]
        public JsonResult UpdateCheckContenido(int id, string descripcion, Boolean status_si, Boolean status_na, Boolean status_carpeta_electronica, Boolean status, byte seccion_pertenece)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                db.Configuration.LazyLoadingEnabled = false;
                var valor = db.CONTENIDO_CHECK.ToList<CONTENIDO_CHECK>().Where(u => u.id_documento.Equals(id)).FirstOrDefault();
                valor.descripcion = descripcion;
                valor.status_SI= status_si;
                valor.status_na = status_na;
                valor.status_carpeta_electronica = status_carpeta_electronica;
                valor.seccion_pertenece = seccion_pertenece;
                valor.status = status;
                db.SaveChanges();
            }
            return Json("OK-UPDATE");
        }


    }
}
