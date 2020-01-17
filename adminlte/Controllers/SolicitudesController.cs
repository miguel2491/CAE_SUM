using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using adminlte.BD;
using Rotativa;

namespace adminlte.Controllers
{
    public class SolicitudesController : Controller
    {
        // GET: Solicitudes
        public ActionResult Index()
        {
            return View();
        }

        // GET: Solicitudes/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }
        // GET: Solicitudes Productos Agrosumate
        public ActionResult ProductosAgrosumate()
        {
            return View();
        }
        public ActionResult ProductoAgrosumateNuevo()
        {
            return View();
        }
        // Anexo AF1
        public ActionResult AnexoAF()
        {
            return View();
        }
        public ActionResult AnexoNuevo()
        {
            return View();
        }
        //GET VIEW PYME
        public ActionResult creditoPyme()
        {
            return View();
        }
        public ActionResult PymeNuevo()
        {
            return View();
        }
        //View Reporte Credito
        public ActionResult AutorizacionReportes()
        {
            return View();
        }
        // POST: Solicitudes/Create ProductoAgrosumate
        [HttpPost]
        public ActionResult InsertPAgrosumate(SOLICITUDES sl)
        {
                using (DB_CEAEntities db = new DB_CEAEntities())
                {

                    var sol = new SOLICITUDES()
                    {
                        id_documento = sl.id_documento,
                        id_sucursal = sl.id_sucursal,
                        sucursal = sl.sucursal,
                        tipo_solicitud = sl.tipo_solicitud,
                        codigo_operacion = sl.codigo_operacion,
                        fecha = sl.fecha,
                        tipo_garantia = sl.tipo_garantia,
                        nivel_riesgo = sl.nivel_riesgo,
                        secuencia = sl.secuencia,
                        tipo_transaccion = sl.tipo_transaccion,
                        monto_solicitado = sl.monto_solicitado,
                        tasa = sl.saldo_insoluto,
                        cuotas = sl.cuotas,
                        dia_pago = sl.dia_pago,
                        codigo_analista = sl.codigo_analista,
                        nombre_solicitante = sl.nombre_solicitante,
                        nombre_aval = sl.nombre_aval,
                        producto= sl.producto,
                        seguro_agropecuario = sl.seguro_agropecuario,
                        periodicidad = sl.periodicidad,
                        modo_pago = sl.modo_pago,
                        monto_operacion_mes = sl.monto_operacion_mes,
                        numero_operacion_mes = sl.numero_operacion_mes,
                        canal_pago = sl.canal_pago,
                        banco = sl.banco,
                        especificacion_garantia= sl.especificacion_garantia,
                        valor_garantia = sl.valor_garantia,
                        cobertura_garantia = sl.cobertura_garantia,
                        respuesta_manifiesto = sl.respuesta_accionista,
                        cliente_recomendado = sl.cliente_recomendado
                    };

                    db.SOLICITUDES.Add(sol);
                    db.SaveChanges();
                    return Json(new { redirectToUrl = Url.Action("ProductosAgrosumate", "Solicitudes") });
            }
        }
        //Vista PA Edit
        [HttpPost]
        public ActionResult v_editPA(int id)
        {
            return Json(new { redirectToUrl = Url.Action("editViewPA", "Solicitudes", new { id = id }) });
        }
        public ActionResult editViewPA(int id)
        {
            ViewBag.ID = id;
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var room_query = from sl in db.SOLICITUDES
                                 where sl.id_solicitud == id
                                 select new
                                 {
                                     idSol = sl.id_solicitud,
                                     idDoc = sl.id_documento,
                                     id_sucursal = sl.id_sucursal,
                                     sucursal = sl.sucursal,
                                     tipo_solicitud = sl.tipo_solicitud,
                                     codigo_operacion = sl.codigo_operacion,
                                     fecha = sl.fecha,
                                     tipo_garantia = sl.tipo_garantia,
                                     nivel_riesgo = sl.nivel_riesgo,
                                     secuencia = sl.secuencia,
                                     tipo_transaccion = sl.tipo_transaccion,
                                     monto_solicitado = sl.monto_solicitado,
                                     tasa = sl.saldo_insoluto,
                                     cuotas = sl.cuotas,
                                     dia_pago = sl.dia_pago,
                                     codigo_analista = sl.codigo_analista,
                                     nombre_solicitante = sl.nombre_solicitante,
                                     nombre_aval = sl.nombre_aval,
                                     producto = sl.producto,
                                     seguro_agropecuario = sl.seguro_agropecuario,
                                     periodicidad = sl.periodicidad,
                                     modo_pago = sl.modo_pago,
                                     monto_operacion_mes = sl.monto_operacion_mes,
                                     numero_operacion_mes = sl.numero_operacion_mes,
                                     canal_pago = sl.canal_pago,
                                     banco = sl.banco,
                                     especificacion_garantia = sl.especificacion_garantia,
                                     valor_garantia = sl.valor_garantia,
                                     cobertura_garantia = sl.cobertura_garantia,
                                     respuesta_manifiesto = sl.respuesta_accionista,
                                     cliente_recomendado = sl.cliente_recomendado
                                 };
                foreach (var data in room_query)
                {
                    ViewBag.idSolicitud = data.idSol;
                    ViewBag.idDoc = data.idDoc;
                    ViewBag.Sucursal = data.sucursal;
                    ViewBag.fecha = data.fecha;
                }
            }
            return View();
        }
        [HttpGet]
        public ActionResult editPA(int id)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var room_query = from sl in db.SOLICITUDES
                                 where sl.id_solicitud == id
                                 select new
                                 {
                                     id_documento = sl.id_documento,
                                     id_sucursal = sl.id_sucursal,
                                     sucursal = sl.sucursal,
                                     tipo_solicitud = sl.tipo_solicitud,
                                     codigo_operacion = sl.codigo_operacion,
                                     fecha = sl.fecha,
                                     tipo_garantia = sl.tipo_garantia,
                                     nivel_riesgo = sl.nivel_riesgo,
                                     secuencia = sl.secuencia,
                                     tipo_transaccion = sl.tipo_transaccion,
                                     monto_solicitado = sl.monto_solicitado,
                                     tasa = sl.saldo_insoluto,
                                     cuotas = sl.cuotas,
                                     dia_pago = sl.dia_pago,
                                     codigo_analista = sl.codigo_analista,
                                     nombre_solicitante = sl.nombre_solicitante,
                                     nombre_aval = sl.nombre_aval,
                                     producto = sl.producto,
                                     seguro_agropecuario = sl.seguro_agropecuario,
                                     periodicidad = sl.periodicidad,
                                     modo_pago = sl.modo_pago,
                                     monto_operacion_mes = sl.monto_operacion_mes,
                                     numero_operacion_mes = sl.numero_operacion_mes,
                                     canal_pago = sl.canal_pago,
                                     banco = sl.banco,
                                     especificacion_garantia = sl.especificacion_garantia,
                                     valor_garantia = sl.valor_garantia,
                                     cobertura_garantia = sl.cobertura_garantia,
                                     respuesta_manifiesto = sl.respuesta_accionista,
                                     cliente_recomendado = sl.cliente_recomendado
                                 };
                return Json(room_query.ToList(), JsonRequestBehavior.AllowGet);
            }
        }
        //GET LIST PRODUCT AGROSUMATE
        [HttpGet]
        public ActionResult GetListProductosAgrosumate() {
            DB_CEAEntities db = new DB_CEAEntities();
            return Json(db.SOLICITUDES.Select(x => new
            {
                id = x.id_solicitud,
                codigo_operacion = x.codigo_operacion,
                sucursal = x.sucursal,
                nivel_riesgo= x.nivel_riesgo,
                fecha = x.fecha.ToString(),
            }).ToList(), JsonRequestBehavior.AllowGet);
        }
        //Add AnexoAF
        public ActionResult InsertAnexoAF(CARTAS c) {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var anexo = new CARTAS()
                {
                    id_sucursal = c.id_sucursal,
                    id_cliente = c.id_cliente,
                    tipo_carta = c.tipo_carta,
                    id_asesor = c.id_asesor,
                    fecha = c.fecha,
                    respuesta1 = c.respuesta1,
                    respuesta2 = c.respuesta2,
                    respuesta3 = c.respuesta3,
                    respuesta4 = c.respuesta4,
                    respuesta5 = c.respuesta5,
                    respuesta6 = c.respuesta6,
                    respuesta7 = c.respuesta7,
                    respuesta8 = c.respuesta8,
                    respuesta9 = c.respuesta9,
                    respuesta10 = c.respuesta10,
                    respuesta11 = c.respuesta11,
                    respuesta12 = c.respuesta12,
                    respuesta13 = c.respuesta13
                };

                db.CARTAS.Add(anexo);
                db.SaveChanges();
                return Json("Ok");
            }
        }
        //GetList Anexo
        public ActionResult GetListAnexo() {
            DB_CEAEntities db = new DB_CEAEntities();
            return Json(db.CARTAS.Select(x => new
            {
                id = x.id_carta,
                sucursal = x.id_sucursal,
                cliente = x.id_cliente,
                fecha = x.fecha.ToString(),
            }).ToList(), JsonRequestBehavior.AllowGet);
        }
        //GetList Pyme
        public ActionResult ListaPyme() {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var room_query = (from SOLICITUDES in db.SOLICITUDES
                                  join CREDITO_PYME in db.CREDITO_PYME
                                  on SOLICITUDES.id_solicitud equals CREDITO_PYME.id_solicitud
                                  select new { SOLICITUDES.tipo_transaccion, SOLICITUDES.fecha, CREDITO_PYME.id_credito_pyme, CREDITO_PYME.nombre_completo_razon_social}).ToList();
                return Json(new { data = room_query }, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult ListaReportesAutoizados()
        {
            DB_CEAEntities db = new DB_CEAEntities();
            return Json(db.SOLICITUDES.Select(x => new
            {
                id = x.id_solicitud,
                nombre = x.nombre_aval,
                fecha = x.fecha.ToString(),
            }).ToList(), JsonRequestBehavior.AllowGet);
        }
        //Post Autorizacion
        [HttpPost]
        public ActionResult SaveAutorizacion(SOLICITUDES au) {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var car = new SOLICITUDES()
                {
                    fecha = au.fecha,
                    fecha_recibe = au.fecha_recibe,
                    rfc_contribuyente = au.rfc_contribuyente,
                    nombre_aval = au.nombre_aval,
                    telefono_aval = au.telefono_aval,
                    fecha_folio1 = au.fecha_folio1,
                    fecha_folio2 = au.fecha_folio2,
                    fecha_folio3 = au.fecha_folio3
                };

                db.SOLICITUDES.Add(car);
                db.SaveChanges();
                var dir = new DIRECCIONES()
                {
                    /*
                    estado: $('#estado option:selected').val() == undefined ? '0' : $('#estado option:selected').val(),
                    municipio: $('#municipio option:selected').val() == undefined ? '0' : $('#municipio option:selected').val(),
                    codigo_postal: $('#codigo_postal option:selected').val() == undefined ? '0' : $('#codigo_postal option:selected').val(),
                    calle: $('#calle').val(),
                    */
                };
                //db.DIRECCIONES.Add(dir);
                //db.SaveChanges();
                return Json("Ok");
            }
        }
        //POST DELETE AGROSUMATE
        [HttpPost]
        public ActionResult DeleteAgrosumate(int id)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                
                
                db.SOLICITUDES.Remove(db.SOLICITUDES.Single(a => a.id_solicitud == id));
                SOLICITUDES sol = db.SOLICITUDES.Find(id);
                db.SOLICITUDES.Remove(sol);
                db.SaveChanges();
                return Json(new { redirectToUrl = Url.Action("ProductosAgrosumate", "Solicitudes") });
            }
        }
        //Delete Anexo
        [HttpPost]
        public ActionResult DeleteAnexo(int id) {
            DB_CEAEntities db = new DB_CEAEntities();
            try
            {
                CARTAS ca = db.CARTAS.Find(id);
                db.CARTAS.Remove(ca);
                db.SaveChanges();
                return Json("Deleted");
            }
            catch
            {
                return View();
            }
        }
        /**Acta de Integración***/
        public ActionResult ActaIntegracion()
        {
            return View();
        }
        public ActionResult ActaIntegracionNuevo()
        {
            return View();
        }
        public ActionResult ListaActasIntegracion() {
            DB_CEAEntities db = new DB_CEAEntities();
            return Json(db.ACTA_INTEGRACION_COMITE.Select(x => new
            {
                id = x.id_acta_integracion,
                grupo = x.id_grupo,
                fecha = x.dia+" "+x.mes+" "+x.anio,
                municipio = x.lugar,
            }).ToList(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult InsertActaIntegracion(ACTA_INTEGRACION_COMITE aic)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {

                var acta = new ACTA_INTEGRACION_COMITE()
                {
                    id_check_list = aic.id_check_list,
                    id_grupo = aic.id_grupo,
                    hrs = aic.hrs,
                    dia = aic.dia,
                    mes = aic.mes,
                    anio =aic.anio,
                    observaciones = aic.observaciones,
                    cantidad_representada = aic.cantidad_representada,
                    porcentaje = aic.porcentaje,
                    aportacion_semanal = aic.aportacion_semanal,
                    dia_reunion = aic.dia_reunion,
                    hora_reunion = aic.hora_reunion,
                    lugar = aic.lugar,
                    cargo_duenio_lugar = aic.cargo_duenio_lugar,
                    minutos_castigo =aic.minutos_castigo,
                    multa_retardo = aic.multa_retardo,
                    multa_inasistencia = aic.multa_inasistencia,                
                    id_presidenta = aic.id_presidenta,
                    id_tesorera = aic.id_tesorera,
                    id_secretaria = aic.id_secretaria
            };

                db.ACTA_INTEGRACION_COMITE.Add(acta);
                db.SaveChanges();
            }
            return Json("Ok");
        }

        [HttpPost]
        public ActionResult DeleteActaIntegracion(int id)
        {
            DB_CEAEntities db = new DB_CEAEntities();
            try
            {
                ACTA_INTEGRACION_COMITE ca = db.ACTA_INTEGRACION_COMITE.Find(id);
                db.ACTA_INTEGRACION_COMITE.Remove(ca);
                db.SaveChanges();
                return Json("Deleted");
            }
            catch
            {
                return View();
            }
        }
        /**************/
        /**SUPERVISION CLIENTES**/
        public ActionResult Supervision()
        {
            return View();
        }
        public ActionResult SupervisionNuevo()
        {
            return View();
        }

        [HttpGet]
        public ActionResult ListaSupervisionC()
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var room_query = from c in db.SOLICITUDES
                                 where c.tipo_solicitud == "FPDC.AE-021.1"
                                 select new
                                 {
                                     id = c.id_solicitud,
                                     cliente = c.id_grupo,
                                     codigo = c.codigo_operacion,
                                     sucursal = c.id_sucursal,
                                     fecha = c.fecha.ToString()
                                 };
                return Json(room_query.ToList(), JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult InsertSupervisionC(SOLICITUDES sol) {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var so = new SOLICITUDES()
                {
                    id_documento = sol.id_documento,
                    id_sucursal = sol.id_sucursal,
                    id_asesor = sol.id_asesor,
                    id_grupo = sol.id_grupo,
                    tipo_solicitud = sol.tipo_solicitud,
                    codigo_operacion = sol.codigo_operacion,
                    fecha = sol.fecha,
                    secuencia = sol.secuencia,
                    importe_credito = sol.importe_credito,
                    numero_integrantes = sol.numero_integrantes
                };

                db.SOLICITUDES.Add(so);
                db.SaveChanges();
                int id = so.id_solicitud;
                return Json(id);
            }
        }

        [HttpPost]
        public ActionResult InsertSupervisiones(SUPERVISION_CLIENTE sc)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var sucl = new SUPERVISION_CLIENTE()
                {
                    id_solicitud = sc.id_solicitud,
                    id_cliente = sc.id_cliente,
                    respuesta1 = sc.respuesta1,
                    respuesta2 = sc.respuesta2,
                    respuesta3 = sc.respuesta3,
                    respuesta4 = sc.respuesta4,
                    respuesta5 = sc.respuesta5,
                    respuesta6 = sc.respuesta6,
                    respuesta7 = sc.respuesta7,
                };
                db.SUPERVISION_CLIENTE.Add(sucl);
                db.SaveChanges();
                return Json("Ok");
            }
        }
        [HttpPost]
        public JsonResult ListaSupervisiones(int id) {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var room_query = from c in db.SUPERVISION_CLIENTE
                                 where c.id_solicitud== id
                                 select new
                                 {
                                     id = c.id_cliente,
                                     r1 = c.respuesta1,
                                     r2 = c.respuesta2,
                                     r3 = c.respuesta3,
                                     r4 = c.respuesta4,
                                     r5 = c.respuesta5,
                                     r6 = c.respuesta6,
                                     r7 = c.respuesta7
                                 };
                return Json(room_query.ToList(), JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult DeleteSupervision(int id)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                db.SUPERVISION_CLIENTE.Remove(db.SUPERVISION_CLIENTE.Single(a => a.id_solicitud == id));
                SOLICITUDES sol = db.SOLICITUDES.Find(id);
                db.SOLICITUDES.Remove(sol);
                db.SaveChanges();
                return Json("Deleted");
            }
        }
        /*---------------------*/
        /*******CREDITO SOLIDARIO*******/
        // GET: Solicitudes
        public ActionResult creditoSolidario()
        {
            return View();
        }
        public ActionResult creditoSolidarioNuevo()
        {
            return View();
        }
        [HttpGet]
        public ActionResult ListaCreditoSolidario()
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var room_query = from c in db.SOLICITUDES
                                 where c.tipo_solicitud == "FPDC.AE-012.4"
                                 select new
                                 {
                                     id = c.id_solicitud,
                                     asesor = c.id_asesor,
                                     codigo = c.codigo_operacion,
                                     sucursal = c.id_sucursal,
                                     fecha = c.fecha.ToString()
                                 };
                return Json(room_query.ToList(), JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult InsertCreditoSol(SOLICITUDES cs)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var csol = new SOLICITUDES()
                {
                    id_documento = cs.id_documento,
                    id_sucursal = cs.id_sucursal,
                    id_asesor = cs.id_asesor,
                    id_grupo = cs.id_grupo,
                    fecha = cs.fecha,
                    codigo_operacion = cs.codigo_operacion,
                    tipo_garantia = cs.tipo_garantia,
                    secuencia = cs.secuencia,
                    recomendado_por = cs.recomendado_por,
                    monto_solicitado = cs.monto_solicitado,
                    saldo_insoluto = cs.saldo_insoluto,
                    cuotas = cs.cuotas,
                    fecha_recibe = cs.fecha_recibe,
                    primer_fecha_pago = cs.primer_fecha_pago,
                    dia_pago = cs.dia_pago,
                    canal_pago = cs.canal_pago,
                    banco = cs.banco,
                    modo_pago = cs.modo_pago,
                    respuesta_accionista = cs.respuesta_accionista,
                    respuesta_manifiesto = cs.respuesta_manifiesto,
                    monto_grupal_sol = cs.monto_grupal_sol,
                    tipo_solicitud = cs.tipo_solicitud
                };
                db.SOLICITUDES.Add(csol);
                db.SaveChanges();
                int id = cs.id_solicitud;
                return Json(id);
            }
        }
        /*-------------------------*/
        /******* CREDITO COMUNAL *******/
        // GET: Solicitudes
        public ActionResult creditoComunal()
        {
            return View();
        }
        public ActionResult creditoComunalNuevo()
        {
            return View();
        }
        [HttpGet]
        public ActionResult ListaCreditoComunal()
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var room_query = from c in db.SOLICITUDES
                                 where c.tipo_solicitud == "FPDC.AE-014.4"
                                 select new
                                 {
                                     id = c.id_solicitud,
                                     asesor = c.id_asesor,
                                     codigo = c.codigo_operacion,
                                     sucursal = c.id_sucursal,
                                     fecha = c.fecha.ToString()
                                 };
                return Json(room_query.ToList(), JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult InsertCreditoCom(SOLICITUDES cs)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var csol = new SOLICITUDES()
                {
                    id_documento = cs.id_documento,
                    id_sucursal = cs.id_sucursal,
                    id_asesor = cs.id_asesor,
                    id_grupo = cs.id_grupo,
                    fecha = cs.fecha,
                    fecha_desembolso = cs.fecha_desembolso,
                    tipo_garantia = cs.tipo_garantia,
                    secuencia = cs.secuencia,
                    id_credito = cs.id_credito,
                    monto_solicitado = cs.monto_solicitado,
                    tasa = cs.tasa,
                    cuotas = cs.cuotas,
                    fondo_comunal = cs.fondo_comunal,
                    frecuencia_pago = cs.frecuencia_pago,
                    tipo_desembolso = cs.tipo_desembolso,
                    primer_fecha_pago = cs.primer_fecha_pago,
                    dia_pago = cs.dia_pago,
                    canal_pago = cs.canal_pago,
                    banco = cs.banco,
                    respuesta_accionista = cs.respuesta_accionista,
                    respuesta_manifiesto = cs.respuesta_manifiesto,
                    subtotal = cs.subtotal,
                    total = cs.total,                    
                    tipo_solicitud = cs.tipo_solicitud
                };
                db.SOLICITUDES.Add(csol);
                db.SaveChanges();
                int id = csol.id_solicitud;
                return Json(id);
            }
        }
        /*-------------------------*/

        /*PDFS*/
        public ActionResult SolicitudPDF(String nombre = "")
        {
            ViewBag.nombre = nombre;
            ViewBag.Title = "SOLICITUD PRODUCTO CRÉDITO AGROSÚMATE";
            return View();
        }
        public ActionResult PdfSol()
        {
            return Json(new { redirectToUrl = Url.Action("Print", "Solicitudes") });
        }
        public ActionResult Print()
        {
            return new ActionAsPdf("SolicitudPDF", new { nombre = "Pedro " })
            { FileName = "Solicitud.pdf" };
        }
    }
}
