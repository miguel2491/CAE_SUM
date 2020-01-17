using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Web;
using System.Web.Mvc;
using adminlte.BD;

namespace adminlte.Controllers
{
    public class PromocionController : Controller
    {
        // GET: Promocion
        public ActionResult Index()
        {
            return View();
        }
        // Get Prospecto Edit
        [HttpGet]
        public ActionResult UpdateViewProspecto(int? idProspecto)
        {
            ViewBag.prospecto = idProspecto;
            return View();
        }
        public ActionResult ListadoRegistro() {
            return View();
        }
        //Nuevo Registros
        public ActionResult NuevoRegistro() {
            return View();
        }
        //Agregar Prospecto
        [HttpPost]
        public JsonResult InsertProspecto(PROSPECTOS ip)
        {

            using (DB_CEAEntities db = new DB_CEAEntities())
            {

                var pros = new PROSPECTOS()
                {
                    id_sucursal = ip.id_sucursal,
                    id_asesor = ip.id_asesor,
                    fecha = ip.fecha,
                    nombre = ip.nombre,
                    app = ip.app,
                    apm = ip.apm,
                    telefono = ip.telefono,
                    calle = ip.calle,
                    numero = ip.numero,
                    colonia = ip.colonia,
                    cp = ip.cp,
                    estado = ip.estado,
                    municipio = ip.municipio,
                    actividad_negocio = ip.actividad_negocio,
                    tipo_producto = ip.tipo_producto,
                    fecha_visita_tentativa = ip.fecha_visita_tentativa,
                    resolucion = ip.resolucion,
                    modo_enterado = ip.modo_enterado
                };

                db.PROSPECTOS.Add(pros);
                
                db.SaveChanges();
            }
            return Json(new { redirectToUrl = Url.Action("ListadoRegistro", "Promocion") });
        }
        
        
        //Obtener Lista Prospectos
        [HttpGet]
        public ActionResult GetListProspectos()
        {
            DB_CEAEntities db = new DB_CEAEntities();
            return Json(db.PROSPECTOS.Select(x => new
            {
                id = x.id_prospecto,
                fecha = x.fecha.ToString(),
                nombre = x.nombre+" "+x.app+" "+x.apm,
                direccion = x.municipio+" "+x.colonia+" "+x.calle+" "+x.numero,
                telefono = x.telefono,
                actividad = x.actividad_negocio,
                tipo_producto = x.tipo_producto,
                asesor = x.id_asesor,
                fecha_tentativa = x.fecha_visita_tentativa.ToString(),
                resolucion = x.resolucion,
                enterado = x.modo_enterado
            }).ToList(), JsonRequestBehavior.AllowGet);
        }
        //GetProspectoID
        [HttpGet]
        public ActionResult GetListProspectosID(int id)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var room_query = from c in db.PROSPECTOS
                                 where c.id_prospecto == id
                                 select new
                                 {
                                    id_sucursal = c.id_sucursal,
                                    id_asesor = c.id_asesor,
                                    fecha_visita_tentativa = c.fecha_visita_tentativa.ToString(),
                                    nombre = c.nombre,
                                    app = c.app,
                                    apm = c.apm,
                                    fecha = c.fecha.ToString(),
                                    telefono = c.telefono,
                                    calle = c.calle,
                                    numero = c.numero,
                                    colonia = c.colonia,
                                    cp = c.cp,
                                    municipio = c.municipio,
                                    estado = c.estado,
                                    actividad_negocio = c.actividad_negocio,
                                    tipo_producto = c.tipo_producto,
                                    resolucion = c.resolucion,
                                    modo_enterado = c.modo_enterado
                                };
                            return Json(room_query.ToList(), JsonRequestBehavior.AllowGet);
            }
        }
        //Actualizar Prospecto
        //Eliminar Prospecto
        [HttpPost]
        public ActionResult DeleteProspecto(int? id)
        {
            DB_CEAEntities db = new DB_CEAEntities();
            try
            {
                PROSPECTOS check = db.PROSPECTOS.Find(id);
                db.PROSPECTOS.Remove(check);
                db.SaveChanges();
            }
            catch (DataException/* dex */)
            {
                //Log the error (uncomment dex variable name and add a line here to write a log.
                return Json("Error");
            }
            return Json(new { redirectToUrl = Url.Action("ListadoRegistro", "Promocion") });
        }
        //
        [HttpPost]
        public ActionResult editProspecto(int id)
        {
            return Json(new { redirectToUrl = Url.Action("editaProspecto", "Promocion", new { id = id }) });
        }

        [HttpPost]
        public JsonResult UpdateProspecto(PROSPECTOS pro)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                db.Configuration.LazyLoadingEnabled = false;
                var valor = db.PROSPECTOS.ToList<PROSPECTOS>().Where(u => u.id_prospecto.Equals(pro.id_prospecto)).FirstOrDefault();
                valor.id_sucursal = pro.id_sucursal;
                valor.id_asesor = pro.id_asesor;
                valor.fecha_visita_tentativa = pro.fecha_visita_tentativa;
                valor.nombre = pro.nombre;
                valor.app = pro.app;
                valor.apm = pro.apm;
                valor.fecha = pro.fecha;
                valor.telefono = pro.telefono;
                valor.calle = pro.calle;
                valor.numero = pro.numero;
                valor.colonia = pro.colonia;
                valor.cp = pro.cp;
                valor.municipio = pro.municipio;
                valor.estado = pro.estado;
                valor.actividad_negocio = pro.actividad_negocio;
                valor.tipo_producto = pro.tipo_producto;
                valor.resolucion = pro.resolucion;
                valor.modo_enterado = pro.modo_enterado;
                db.SaveChanges();
            }
            return Json(new { redirectToUrl = Url.Action("ListadoRegistro", "Promocion") });
        }
        public ActionResult editaProspecto(int id)
        {
            ViewBag.ID = id;
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var leftOuterJoin = from c in db.PROSPECTOS
                                    where c.id_prospecto == id
                                    select new
                                    {
                                        id = c.id_prospecto,
                                        asesor = c.id_asesor,
                                        sucursal = c.id_sucursal,
                                        fecha = c.fecha, 
                                        nombre = c.nombre,
                                        app = c.app,
                                        apm = c.apm,
                                        tipo = c.tipo_producto,
                                        numero = c.numero,
                                        calle = c.calle,
                                        colonia = c.colonia,
                                        cp = c.cp,
                                        munic = c.municipio,
                                        estado = c.estado,
                                        telefono = c.telefono,
                                        actividad = c.actividad_negocio,
                                        tipo_producto = c.tipo_producto,
                                        fechaV = c.fecha_visita_tentativa,
                                        resolucion = c.resolucion,
                                        enterado = c.modo_enterado
                                    };
                foreach (var data in leftOuterJoin)
                {
                    ViewBag.asesor = data.asesor;
                    ViewBag.sucursal = data.sucursal;
                    ViewBag.nombre = data.nombre;
                    ViewBag.app = data.app;
                    ViewBag.apm = data.apm;
                    ViewBag.tipo = data.tipo;
                    ViewBag.fecha = data.fecha;
                    ViewBag.numero = data.numero;
                    ViewBag.calle = data.calle;
                    ViewBag.colonia = data.colonia;
                    ViewBag.cp = data.cp;
                    ViewBag.munic = data.munic;
                    ViewBag.estado = data.estado;
                    ViewBag.telefono = data.telefono;
                    ViewBag.actividad = data.actividad;
                    ViewBag.tipo_producto = data.tipo_producto;
                    ViewBag.fechaVisita = data.fechaV;
                    ViewBag.resolucion = data.resolucion;
                    ViewBag.enterado = data.enterado;
                }
            }
                return View();
        }
        /*Reporte*/
            // GET: ReporteLista
            public ActionResult ListadoReportes()
        {
            return View();
        }
        [HttpGet]
        public ActionResult GetListActividad()
        {
            DB_CEAEntities db = new DB_CEAEntities();
            return Json(db.PROSPECTOS.Select(x => new
            {
                fecha = x.fecha.ToString(),
                zona = x.calle + " " + x.numero,
                municipio = x.municipio,
                localidad = x.colonia,
                colonia = x.colonia
            }).ToList(), JsonRequestBehavior.AllowGet);
        }
    }
}
