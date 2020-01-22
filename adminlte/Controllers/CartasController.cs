using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Services.Description;
using adminlte.BD;
using Newtonsoft.Json;
using Rotativa;

namespace adminlte.Controllers
{
    public class CartasController : Controller
    {

        public int RandomNumber(int min, int max)
        {
            Random random = new Random();
            return random.Next(min, max);
        }
        //Direcciones
        [HttpPost]
        public ActionResult InsertDirecciones(DIRECCIONES dir)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var direc = new DIRECCIONES()
                {
                    id_documento = dir.id_documento,
                    estado_id = dir.estado_id,
                    calle = dir.calle,
                    numero = dir.numero,
                    colonia_id = dir.colonia_id,
                    municipio_id = dir.municipio_id,
                    cp_id = dir.cp_id,
                    tipo = dir.tipo
                };
                db.DIRECCIONES.Add(direc);
                db.SaveChanges();
                return Json(new { redirectToUrl = Url.Action("VisitaDomiciliaria", "Cartas") });
            }
        }
        // GET: Cartas
        public ActionResult Index()
        {
            return View();
        }
        /*Protesta Bienes Muebles*/
        public ActionResult ProtestaBienes()
        {
            return View();
        }
        /*Separacion Crediticia*/
        public ActionResult SeparacionCrediticiaLista()
        {
            return View();
        }
        public ActionResult SeparacionCrediticia()
        {
            return View();
        }
        [HttpGet]
        public ActionResult ListaSeparacion()
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var room_query = from c in db.CARTAS
                                 where c.tipo_carta == "FPDC.AE-030"
                                 select new
                                 {
                                     id = c.id_carta,
                                     cliente = c.id_cliente,
                                     lugar = c.lugar,
                                     denominacion_institucion = c.denominacion_institucion,
                                     fecha = c.fecha.ToString()
                                 };
                return Json(room_query.ToList(), JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult InsertSeparacion(CARTAS car)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var cartas = new CARTAS()
                {
                    tipo_carta = car.tipo_carta,
                    id_documento = car.id_documento,
                    id_cliente = car.id_cliente,
                    denominacion_institucion = car.denominacion_institucion,
                    lugar = car.lugar,
                    fecha = car.fecha
                };

                db.CARTAS.Add(cartas);
                db.SaveChanges();
                int id = cartas.id_carta;
                return Json(id);
            }
        }
        [HttpPost]
        public JsonResult ConsultaSeparacion(int id)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var room_query = from c in db.CARTAS
                                 where c.id_carta == id
                                 select new
                                 {
                                   id = c.id_carta,
                                   id_documento = c.id_documento,
                                   cliente = c.id_cliente,
                                   institucion = c.denominacion_institucion,
                                   lugar = c.lugar,
                                   fecha = c.fecha.ToString()
                                 };
                return Json(room_query.ToList(), JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public JsonResult UpdateSeparacion(int id_carta, int id_documento , int id_cliente, string institucion, string lugar, DateTime fecha)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                db.Configuration.LazyLoadingEnabled = false;
                var valor = db.CARTAS.ToList<CARTAS>().Where(u => u.id_carta.Equals(id_carta)).FirstOrDefault();
                valor.id_documento = id_documento;
                valor.id_cliente = id_cliente;
                valor.denominacion_institucion= institucion;
                valor.lugar = lugar;
                valor.fecha = fecha;
                db.SaveChanges();
            }
            return Json("Ok");
        }
        /*Jurada Cliente*/
        public ActionResult JuradaCliente()
        {
            return View();
        }
        public ActionResult JuradaClienteNuevo()
        {
            return View();
        }
        [HttpGet]
        public JsonResult ListaJuradaCliente()
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var room_query = from c in db.CARTAS
                                 where c.tipo_carta == "FPDC.AE-019"
                                 select new
                                 {
                                     id = c.id_carta,
                                     cliente = c.cliente,
                                     negocio = c.actividad_negocio,
                                     ubicacion = c.ubicacion,
                                     fecha = c.fecha.ToString()
                                 };
                return Json(room_query.ToList(), JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult InsertJurada(CARTAS ca)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var cartas = new CARTAS()
                {
                    id_documento = ca.id_documento,
                    id_cliente = ca.id_cliente,
                    cliente = ca.cliente,
                    id_sucursal = ca.id_sucursal,
                    sucursal = ca.sucursal,
                    monto = ca.monto,
                    actividad_negocio = ca.actividad_negocio,
                    //
                    fecha = ca.fecha,
                    tipo_carta = ca.tipo_carta
                };

                db.CARTAS.Add(cartas);
                db.SaveChanges();
                int id = cartas.id_carta;
                //return Json(id);
                return Json(new { redirectToUrl = Url.Action("JuradaCliente", "Cartas"), id = id });
            }
        }
        [HttpPost]
        public ActionResult InsertDestinoI(Insumos_Productos ip)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var inpr = new Insumos_Productos()
                {
                    id_documento = ip.id_documento,
                    descripcion = ip.descripcion,
                    costo_unitario = ip.costo_unitario
                };

                db.Insumos_Productos.Add(inpr);
                db.SaveChanges();
                int id = inpr.id;
                return Json(new { redirectToUrl = Url.Action("JuradaCliente", "Cartas") });
            }
        }
        [HttpPost]
        public ActionResult editJurada(int id)
        {
            return Json(new { redirectToUrl = Url.Action("editViewJurada", "Cartas", new { id = id }) });
        }
        public ActionResult editViewJurada(int id)
        {
            ViewBag.ID = id;
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var leftOuterJoin = from c in db.CARTAS
                                    join d in db.DIRECCIONES on c.id_carta equals d.id_documento into dept
                                    from department in dept.DefaultIfEmpty()
                                    where c.id_carta == id
                                    select new
                                    {
                                        id = c.id_carta,
                                        idDoc = c.id_documento,
                                        idCliente = c.id_cliente,
                                        idSucursal = c.id_sucursal,
                                        monto = c.monto,
                                        negocio = c.actividad_negocio,
                                        ubicacion = c.ubicacion,
                                        fecha = c.fecha
                                    };
                foreach (var data in leftOuterJoin)
                {
                    ViewBag.idCarta = data.id;
                    ViewBag.idDoc = data.idDoc;
                    ViewBag.idCliente = data.idCliente;
                    ViewBag.idSucursal = data.idSucursal;
                    ViewBag.monto = data.monto;
                    ViewBag.negocio = data.negocio;
                    ViewBag.ubicacion = data.ubicacion;
                    ViewBag.fecha = data.fecha;
                }
            }
            return View();
        }
        //
        public ActionResult GetInsumosProductos(Insumos_Productos ip)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var room_query = from c in db.Insumos_Productos
                                 where c.id_documento == ip.id_documento
                                 select new
                                 {
                                     id = c.id,
                                     descripcion = c.descripcion,
                                     valor = c.costo_unitario
                                 };
                return Json(room_query.ToList(), JsonRequestBehavior.AllowGet);
            }
        }
        //updateVisita
        [HttpPost]
        public JsonResult UpdateJurada(CARTAS ca)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                db.Configuration.LazyLoadingEnabled = false;
                var valor = db.CARTAS.ToList<CARTAS>().Where(u => u.id_carta.Equals(ca.id_carta)).FirstOrDefault();
                valor.fecha = ca.fecha;
                valor.id_cliente = ca.id_cliente;
                valor.cliente = ca.cliente;
                valor.id_sucursal = ca.id_sucursal;
                valor.sucursal = ca.sucursal;
                valor.monto = Convert.ToDecimal(ca.monto);
                valor.actividad_negocio = ca.actividad_negocio;
                valor.ubicacion = ca.ubicacion;
                db.SaveChanges();
            }
            return Json(new { redirectToUrl = Url.Action("JuradaCliente", "Cartas") });
        }

        [HttpPost]
        public ActionResult DeleteJurada(int id)
        {
            DB_CEAEntities db = new DB_CEAEntities();
            try
            {
                CARTAS ca = db.CARTAS.Find(id);
                db.CARTAS.Remove(ca);
                db.SaveChanges();
                return Json(new { redirectToUrl = Url.Action("JuradaCliente", "Cartas") });
            }
            catch
            {
                return View();
            }
        }
        //PDFS
        public ActionResult PdfJurada(int id)
        {
            return Json(new { redirectToUrl = Url.Action("CJuradaPrint", "Cartas", new { id = id }) });
        }
        public ActionResult CJuradaPrint(int id)
        {
            return new ActionAsPdf("JuradaPdf", new { idP = id })
            { FileName = "CartaJurada.pdf" };
        }
        public ActionResult JuradaPdf(int idP)
        {
            ViewBag.Title = "Carta Jurada del Cliente Emprendedor";
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var leftOuterJoin = from c in db.CARTAS
                                    where c.id_carta == idP
                                    select new
                                    {
                                        id = c.id_carta,
                                        documento = c.id_documento,
                                        sucursal = c.sucursal,
                                        cliente = c.cliente,
                                        ubicacion = c.ubicacion,
                                        negocio = c.actividad_negocio,
                                        fecha = c.fecha.ToString(),
                                        monto = c.monto
                                    };
                foreach (var data in leftOuterJoin)
                {
                    ViewBag.idCarta = data.id;
                    ViewBag.documento = data.documento;
                    ViewBag.cliente = data.cliente;
                    ViewBag.ubicacion = data.ubicacion;
                    ViewBag.negocio = data.negocio;
                    ViewBag.monto = data.monto;
                }
            }
            return View();
        }
        //***Visita Domiciliaria***///
        //(int idP)
        public ActionResult VisitaPdf(int idP)
        {
            ViewBag.ID = idP;
            ViewBag.Title = "VISITA DOMICILIARIA";
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var leftOuterJoin = from c in db.CARTAS
                                    join d in db.DIRECCIONES on c.id_carta equals d.id_documento into dept
                                    from department in dept.DefaultIfEmpty()
                                    where c.id_carta == idP
                                    select new
                                    {
                                        id = c.id_carta,
                                        documento = c.id_documento,
                                        sucursal = c.sucursal,
                                        cliente = c.cliente,
                                        asesor = c.id_asesor,
                                        fecha = c.fecha.ToString(),
                                        secuencia = c.secuencia,
                                        respuesta1 = c.respuesta1,
                                        respuesta2 = c.respuesta2,
                                        respuesta3 = c.respuesta3,
                                        respuesta4 = c.respuesta4,
                                        respuesta5 = c.respuesta5,
                                        respuesta6 = c.respuesta6,
                                        respuesta7 = c.respuesta7,
                                        respuesta8 = c.respuesta8,
                                        latitud = c.latitud,
                                        longitud = c.longitud,
                                        latD = c.latD,
                                        lngD = c.lngD,
                                        calle = department.calle,
                                        numero = department.numero,
                                        pais = department.pais_id,
                                        colonia = department.colonia_id,
                                        municipio = department.municipio_id,
                                        ciudad = department.ciudad_id,
                                        estado = department.estado_id,
                                        cp = department.cp_id,
                                        localidad = department.localidad,
                                        referencia = department.referencias,
                                        tipo = department.tipo
                                    };
                foreach (var data in leftOuterJoin)
                {
                    ViewBag.idCarta = data.id;
                    ViewBag.documento = data.documento;
                    ViewBag.sucursal = data.sucursal;
                    ViewBag.cliente = data.cliente;
                    ViewBag.asesor = data.asesor;
                    ViewBag.fecha = data.fecha;
                    ViewBag.secuencia = data.secuencia;
                    ViewBag.respuesta1 = data.respuesta1;
                    ViewBag.respuesta2 = data.respuesta2;
                    ViewBag.respuesta3 = data.respuesta3;
                    ViewBag.respuesta4 = data.respuesta4;
                    ViewBag.respuesta5 = data.respuesta5;
                    ViewBag.respuesta6 = data.respuesta6;
                    ViewBag.respuesta7 = data.respuesta7;
                    ViewBag.respuesta8 = data.respuesta8;
                    ViewBag.latitud = data.latitud;
                    ViewBag.longitud = data.longitud;
                    ViewBag.latD = data.latD;
                    ViewBag.lngD = data.lngD;
                    ViewBag.calle= data.calle;
                    ViewBag.numero = data.numero;
                    ViewBag.pais = data.pais;
                    ViewBag.colonia = data.colonia;
                    ViewBag.municipio = data.municipio;
                    ViewBag.ciudad = data.ciudad;
                    ViewBag.estado = data.estado;
                    ViewBag.cp = data.cp;
                    ViewBag.localidad = data.localidad;
                    ViewBag.referencia = data.referencia;
                    ViewBag.tipo = data.tipo;
                }
            }
            return View();
        }

        public ActionResult VisitaDomiciliaria()
        {
            return View();
        }

        public ActionResult editaVisita(int id)
        {
            ViewBag.ID = id;
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var leftOuterJoin = from c in db.CARTAS
                                    join d in db.DIRECCIONES on c.id_carta equals d.id_documento into dept
                                    from department in dept.DefaultIfEmpty()
                                    where c.id_carta == id
                                    select new
                                    {
                                        id = c.id_carta,
                                        id_tipoCheck = c.id_documento,
                                        id_asesor = c.id_asesor,
                                        id_cliente = c.id_cliente,
                                        sucursal = c.id_sucursal,
                                        fecha_visita = c.fecha,
                                        secuencia = c.secuencia,
                                        latitud = c.latitud,
                                        longitud = c.longitud,
                                        latD = c.latD,
                                        lngD = c.lngD,
                                        estado = department.estado_id,
                                        municipio = department.municipio_id,
                                        cp = department.cp_id,
                                        colonia = department.colonia_id,
                                        numeroC = department.numero,
                                        calleC = department.calle,
                                        res1 = c.respuesta1,
                                        res2 = c.respuesta2,
                                        res3 = c.respuesta3,
                                        res4 = c.respuesta4,
                                        res5 = c.respuesta5,
                                        res6 = c.respuesta6,
                                        res7 = c.respuesta7,
                                        res8 = c.respuesta8,
                                        res9 = c.respuesta9,
                                        obs = c.observaciones
                                    };
                foreach (var data in leftOuterJoin)
                {
                    ViewBag.id_tipoCheck = data.id_tipoCheck;
                    ViewBag.sucursal = data.sucursal;
                    ViewBag.id_asesor = data.id_asesor;
                    ViewBag.id_cliente = data.id_cliente;
                    ViewBag.fechaVisita = data.fecha_visita;
                    ViewBag.secuencia = data.secuencia;
                    ViewBag.estado = data.estado;
                    ViewBag.municipio = data.municipio;
                    ViewBag.cp = data.cp;
                    ViewBag.colonia = data.colonia;
                    ViewBag.numeroC = data.numeroC;
                    ViewBag.calleC = data.calleC;
                    ViewBag.latitud = data.latitud;
                    ViewBag.longitud = data.longitud;
                    ViewBag.latD = data.latD;
                    ViewBag.lngD = data.lngD;
                    ViewBag.res1 = data.res1;
                    ViewBag.res2 = data.res2;
                    ViewBag.res3 = data.res3;
                    ViewBag.res4 = data.res4;
                    ViewBag.res5 = data.res5;
                    ViewBag.res6 = data.res6;
                    ViewBag.res7 = data.res7;
                    ViewBag.res8 = data.res8;
                    ViewBag.res9 = data.res9;
                    ViewBag.obs = data.obs;
                }
            }
            return View();
        }

        //API VISITA
        //[HttpPost]
        
        public ActionResult Print(int id)
        {
            ViewBag.ID = id;
            return new ActionAsPdf("VisitaPdf", new { idP = id })
            { FileName = "Visita.pdf"};
        }

        [HttpPost]
        public ActionResult PdfA(int id)
        {
            return Json(new { redirectToUrl = Url.Action("Print", "Cartas", new { id = id }) });
        }

        public ActionResult VisitaNuevo()
        {
            return View();
        }
        [HttpGet]
        public ActionResult ListaVisitas()
        {
            DB_CEAEntities db = new DB_CEAEntities();
            return Json(db.CARTAS.Select(x => new
            {
                id = x.id_carta,
                cliente = x.cliente,
                fecha = x.fecha.ToString(),
                asesor = x.id_asesor,
                sucursal = x.sucursal
            }).ToList(), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult DeleteVisita(int id)
        {
            DB_CEAEntities db = new DB_CEAEntities();
            try
            {
                CARTAS ca = db.CARTAS.Find(id);
                db.CARTAS.Remove(ca);
                db.SaveChanges();
                return Json(new { redirectToUrl = Url.Action("VisitaDomiciliaria", "Cartas")});
            }
            catch
            {
                return View();
            }
        }
        [HttpPost]
        public ActionResult InsertVisita(CARTAS ct)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var cartas = new CARTAS()
                {
                    id_documento = ct.id_documento,
                    id_sucursal = ct.id_sucursal,
                    sucursal = ct.sucursal,
                    id_cliente = ct.id_cliente,
                    cliente = ct.cliente,
                    id_asesor = ct.id_asesor,
                    tipo_carta = ct.tipo_carta,
                    fecha=ct.fecha,
                    secuencia = ct.secuencia,
                    respuesta1 = ct.respuesta1,
                    respuesta2 = ct.respuesta2,
                    respuesta3 = ct.respuesta3,
                    respuesta4 = ct.respuesta4,
                    respuesta5 = ct.respuesta5,
                    respuesta6 = ct.respuesta6,
                    respuesta7 = ct.respuesta7,
                    respuesta8 = ct.respuesta8,
                    respuesta9 = ct.respuesta9,
                    observaciones = ct.observaciones,
                    latitud = ct.latitud,
                    longitud = ct.longitud,
                    latD = ct.latD,
                    lngD = ct.lngD
                };

                db.CARTAS.Add(cartas);
                db.SaveChanges();
                int id = cartas.id_carta;
                //return RedirectToAction("VisitaDomiciliaria", "Cartas", new { id = id });
                    return Json(new { redirectToUrl = Url.Action("VisitaDomiciliaria", "Cartas") });
                

            }
        }
        //INSERT VISITA APP
        [HttpPost]
        public ActionResult InsertVisitaApp(string id_documento, 
            string id_sucursal, 
            string id_cliente,
            string id_asesor,
            string cliente, 
            string sucursal, 
            string tipo_carta,
            DateTime fecha,
              
            string secuencia, 
            string respuesta1, 
            string respuesta2,
            string respuesta3, 
            string respuesta4, string 
            respuesta5, string respuesta6,
            string respuesta7, string respuesta8, 
            string respuesta9, string observaciones,
            string latitud, string longitud, string latD, 
            string lngD, string pais, string calle, string numero,
            string colonia_id, string municipio_id, string ciudad, string estado, string cp_id, string localidad, string referencia, string tipo)
        {
            int idCarta = 0;



            CARTAS carta = new CARTAS();


            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var cartas = new CARTAS()
                {
                    id_documento = Convert.ToInt32(id_documento),
                    id_sucursal = Convert.ToInt32(id_sucursal),
                    sucursal = sucursal,
                    id_cliente = Convert.ToInt32(id_cliente),
                    cliente = cliente,
                    id_asesor = Convert.ToInt32(id_asesor),
                    tipo_carta = tipo_carta,
                    fecha = fecha,
                    secuencia = Convert.ToInt32(secuencia),
                    respuesta1 = respuesta1,
                    respuesta2 = respuesta2,
                    respuesta3 = respuesta3,
                    respuesta4 = respuesta4,
                    respuesta5 = respuesta5,
                    respuesta6 = respuesta6,
                    respuesta7 = respuesta7,
                    respuesta8 = respuesta8,
                    respuesta9 = respuesta9,
                    respuesta10 = "null",
                    respuesta11 = "null",
                    respuesta12 = "null",
                    respuesta13 = "null",
                     nombre_acreeditado = "null",
                    nombre_testigo = "null",
                        visita_res1 = "null",
                    visita_res_describe = "null",
                    visita_res2 = "null",
                    visita_res3 = "null",
                    visita_res4 = "null",
                    visita_res5 = "null",
                    visita_res6 = "null",
                    visita_res7 = "null",
                    visita_res8 = "null",
                    visita_describe = "null",
                    responsable_nombre = "null",
                    responsable_lugar = "null",
                    resposnable_fecha = fecha,
                    responsable_firma = "null",
                    observaciones = observaciones,
                    latitud = latitud,
                    longitud = longitud,
                    latD = latD,
                    lngD = lngD,
                    ubicacion = "null",
                     img_visita = "null",
                };

                db.CARTAS.Add(cartas);
                db.SaveChanges();
                idCarta = cartas.id_carta;


                //return RedirectToAction("VisitaDomiciliaria", "Cartas", new { id = id });
                  carta = cartas;

            }

            
            using (DB_CEAEntities db2 = new DB_CEAEntities())
            {
                var direc = new DIRECCIONES()
                {
                    id_documento = idCarta,
                    estado_id = Convert.ToInt32(estado),
                    calle = calle,
                    numero = numero,
                    colonia_id = Convert.ToInt32(colonia_id),
                    municipio_id = Convert.ToInt32(municipio_id),
                    cp_id = Convert.ToInt32(cp_id),
                    tipo = tipo
                };
                db2.DIRECCIONES.Add(direc);
                db2.SaveChanges();
            }

            return Json(carta);

        }

        [HttpPost]
        public ActionResult InsertImageVisita(HttpPostedFileBase datafiles,int idx) {
            var fx = datafiles;
            DateTime dtime = new DateTime();
            dtime = DateTime.Now;

            int idint = RandomNumber(1, 1000000000);
            string id = idint.ToString();
            string filename = "AnuncioCookies" + "_" + id + "_" +
                               String.Format("{0:d}", dtime) + datafiles.FileName;
            filename = filename.Replace("/", "_");

            try
            {

                fx.SaveAs(Path.Combine(@"C:\Users\EjeDesarrolloCS-165\source\repos\CAE_SUM\adminlte\Content", filename));

            }
            catch (Exception)
            {

                throw;
            }
            var img_visita = "/WebFiles/Imgs/" + filename;


            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                

                var carta = db.CARTAS.ToList<CARTAS>().Where(u => u.id_documento.Equals(idx)).FirstOrDefault();
                carta.img_visita = img_visita;

                
                db.SaveChanges();
              


                //return RedirectToAction("VisitaDomiciliaria", "Cartas", new { id = id });

            }

            return Json("Imagen de visita guardada con éxito.");
        }

        [HttpPost]
        public ActionResult InsertFirma64(string firma, string id_testigos, string id_documento,
            string nombre, string app, string apm, string cargo)
        {

            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var FIRMA_TESTIGOS = new FIRMA_TESTIGOS()
                {
                    id_documento = Convert.ToInt16(id_documento),
                    id_testigos = Convert.ToInt16(id_testigos),
                    nombre = nombre,
                    app = app,
                    apm = apm,
                    cargo = cargo

                };


                db.FIRMA_TESTIGOS.Add(FIRMA_TESTIGOS);
                db.SaveChanges();

                return Json("Firma guardada con éxito.");
            }
        }
   

       [HttpGet]
        public JsonResult CVisita(int id)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var leftOuterJoin = from c in db.CARTAS
                                    join d in db.DIRECCIONES on c.id_carta equals d.id_documento into dept
                                    from department in dept.DefaultIfEmpty()
                                    where c.id_carta == id
                                    select new
                                    {
                                        id = c.id_carta,
                                        documento = c.id_documento,
                                        sucursal = c.id_sucursal,
                                        cliente = c.id_cliente,
                                        asesor = c.id_asesor,
                                        fecha = c.fecha.ToString(),
                                        secuencia = c.secuencia,
                                        respuesta1 = c.respuesta1,
                                        respuesta2 = c.respuesta2,
                                        respuesta3 = c.respuesta3,
                                        respuesta4 = c.respuesta4,
                                        respuesta5 = c.respuesta5,
                                        respuesta6 = c.respuesta6,
                                        respuesta7 = c.respuesta7,
                                        respuesta8 = c.respuesta8,
                                        latitud = c.latitud,
                                        longitud = c.longitud,
                                        latD = c.latD,
                                        lngD = c.lngD,
                                        calle = department.calle,
                                        numero = department.numero,
                                        pais = department.pais_id,
                                        colonia = department.colonia_id,
                                        municipio = department.municipio_id,
                                        ciudad = department.ciudad_id,
                                        estado = department.estado_id,
                                        cp = department.cp_id,
                                        localidad = department.localidad,
                                        referencia = department.referencias,
                                        tipo = department.tipo
                                    };
                var x = leftOuterJoin.ToList();
                return Json(x, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult editVisitas(int id)
        {
            return Json(new { redirectToUrl = Url.Action("editaVisita", "Cartas", new { id = id }) });
        }
        //updateVisita
        [HttpPost]
        public JsonResult UpdateVisita(int id_carta, int id_documento, int id_cliente, String cliente, int id_asesor, int id_sucursal, String sucursal, DateTime fecha, int secuencia, int estado_id, int municipio_id, int cp_id, int colonia_id, String calle, String numero, String latitud, String longitud, String respuesta1, String respuesta2, String respuesta3, String respuesta4, String respuesta5, String respuesta6, String respuesta7, String respuesta8, String respuesta9, String latD, String lngD, String observaciones)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                db.Configuration.LazyLoadingEnabled = false;
                var valor = db.CARTAS.ToList<CARTAS>().Where(u => u.id_carta.Equals(id_carta)).FirstOrDefault();
                valor.fecha = fecha;
                valor.id_cliente = id_cliente;
                valor.cliente = cliente;
                valor.secuencia = secuencia;
                valor.id_sucursal = id_sucursal;
                valor.sucursal = sucursal;
                valor.id_asesor = id_asesor;
                valor.latitud = latitud;
                valor.longitud = longitud;
                valor.respuesta1 = respuesta1;
                valor.respuesta2 = respuesta2;
                valor.respuesta3 = respuesta3;
                valor.respuesta4 = respuesta4;
                valor.respuesta5 = respuesta5;
                valor.respuesta6 = respuesta6;
                valor.respuesta7 = respuesta7;
                valor.respuesta8 = respuesta8;
                valor.respuesta9 = respuesta9;
                valor.latD = latD;
                valor.lngD = lngD;
                valor.observaciones = observaciones;
                db.SaveChanges();
            }
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                db.Configuration.LazyLoadingEnabled = false;
                var valor = db.DIRECCIONES.ToList<DIRECCIONES>().Where(u => u.id_documento.Equals(id_carta)).FirstOrDefault();
                valor.estado_id = estado_id;
                valor.municipio_id = municipio_id;
                valor.cp_id = cp_id;
                valor.colonia_id = colonia_id;
                valor.calle = calle;
                valor.numero = numero;
                db.SaveChanges();
            }
            return Json(new { redirectToUrl = Url.Action("VisitaDomiciliaria", "Cartas") });
        }

        /****DECLARACION FORMAL****/
        public ActionResult DeclaracionFormal()
        {
            return View();
        }
        public ActionResult DeclaracionFormalNuevo()
        {
            return View();
        }
        [HttpGet]
        public JsonResult ListaDeclaracionFormal()
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var room_query = from c in db.CARTAS
                    where c.tipo_carta == "FPDC.AE-020"
                    select new
                    {
                        id = c.id_carta,
                        cliente = c.id_cliente,
                        folio = c.folio,
                        sucursal = c.id_sucursal,
                        fecha = c.fecha.ToString()
                    };
                return Json(room_query.ToList(), JsonRequestBehavior.AllowGet);
            }
            
        }
        [HttpPost]
        public JsonResult ConsultaDetalleFormal(int id)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var room_query = from c in db.CARTA_BIENES_MUEBLES
                                 where c.id_carta == id
                                 select new
                                 {
                                     id = c.id_bienes_muebles,
                                     descripcion = c.descripcion,
                                     marca = c.marca,
                                     modelo = c.modelo,
                                     ann_prenda = c.ann_prenda,
                                     color_prenda = c.color_prenda,
                                     uso_prenda = c.uso_prenda,
                                     estado_prenda = c.estado_prenda,
                                     valor_compra_actual = c.valor_compra_actual,
                                     valor_actual_compra = c.valor_actual_compra,
                                     numero_serie = c.numero_serie,
                                     lugar_responsable = c.lugar_responsable
                                 };
                return Json(room_query.ToList(), JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult InsertDeclaracion(CARTAS car) {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var cartas = new CARTAS()
                {
                    tipo_carta = car.tipo_carta,
                    id_cliente = car.id_cliente,
                    folio = car.folio,
                    fecha = car.fecha,
                    nombre_acreeditado = car.nombre_acreeditado,
                    nombre_testigo = car.nombre_testigo,
                    antiguedad_conocer = car.antiguedad_conocer
                };

                db.CARTAS.Add(cartas);
                db.SaveChanges();
                int id = cartas.id_carta;
                return Json(id);
            }
        }
        [HttpPost]
        public ActionResult InsertDeclaracionBienes(CARTA_BIENES_MUEBLES cbm) {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var cartaBM = new CARTA_BIENES_MUEBLES()
                {
                    id_carta = cbm.id_carta,
                    descripcion = cbm.descripcion,
                    marca = cbm.marca,
                    modelo = cbm.modelo,
                    numero_serie = cbm.numero_serie,
                    ann_prenda = cbm.ann_prenda,
                    color_prenda = cbm.color_prenda,
                    lugar_responsable = cbm.lugar_responsable,
                    uso_prenda = cbm.uso_prenda,
                    estado_prenda = cbm.estado_prenda,
                    valor_compra_actual = cbm.valor_compra_actual,
                    valor_actual_compra = cbm.valor_actual_compra
                };

                db.CARTA_BIENES_MUEBLES.Add(cartaBM);
                db.SaveChanges();
                int id = cartaBM.id_carta;
                return Json(id);
            }
        }
        [HttpPost]
        public ActionResult DeleteDeclaracionFormal(int id) {
            DB_CEAEntities db = new DB_CEAEntities();
            try
            {
                db.CARTA_BIENES_MUEBLES.Remove(db.CARTA_BIENES_MUEBLES.Single(a => a.id_carta == id));
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

        //WEB SERVICES
        /*--PRODUCTOS--*/
        [HttpGet]
        public JsonResult GetProducto()
        {
            CPAWS.CPAWS fx =
                new CPAWS.CPAWS();
            var fxx = fx.WsExecuteProductos();

            string json = JsonConvert.SerializeObject(fxx, Formatting.Indented);
            return Json(json, JsonRequestBehavior.AllowGet);
            //return Json(fxx.ToString());

        }

        [HttpGet]
        public JsonResult GetProductos()
        {
            CPAWS.CPAWS fx =
                new CPAWS.CPAWS();
            var fxx = fx.WsExecuteProductos();
            

            string json = JsonConvert.SerializeObject(fxx);
            return Json(json, JsonRequestBehavior.AllowGet);
            //return Json(fxx.ToString());

        }
        /*--SUCURSAL---*/
        [HttpGet]
        public JsonResult GetSucursales()
        {
            
            CPAWS.CPAWS fx =
                new CPAWS.CPAWS();


            var fxx = fx.WsExecuteSucursales();



            string json = JsonConvert.SerializeObject(fxx, Formatting.Indented);
            return Json(json, JsonRequestBehavior.AllowGet);
            //return Json(fxx.ToString());

        }
        /*--CLIENTE---*/
        [HttpGet]
        public JsonResult GetCliente()
        {

            CPAWS.CPAWS fx =
                new CPAWS.CPAWS();


            var fxx = fx.WsGruposClientes(1);



            string json = JsonConvert.SerializeObject(fxx, Formatting.Indented);
            return Json(json, JsonRequestBehavior.AllowGet);
            //return Json(fxx.ToString());

        }
        /*--ESTADO---*/
        public JsonResult GetEstados()
        {
            CPAWS.CPAWS fx =
                new CPAWS.CPAWS();
            var fxx = fx.WsExecuteEstados();
            
            string json = JsonConvert.SerializeObject(fxx, Formatting.Indented);
            return Json(json, JsonRequestBehavior.AllowGet);
            //return Json(fxx.ToString());

        }
        /*--MUNICIPIO--*/
        [HttpPost]
        public JsonResult GetMunicipio(int id)
        {
            CPAWS.CPAWS fx =
                new CPAWS.CPAWS();
            var fxx = fx.WsExecuteMunicipios(id);
            string json = JsonConvert.SerializeObject(fxx, Formatting.Indented);
            return Json(json, JsonRequestBehavior.AllowGet);
            //return Json(fxx.ToString());
        }
        /*--CODIGO POSTAL--*/
        [HttpPost]
        public JsonResult GetColonia(int id_estado, int id_muni)
        {
            CPAWS.CPAWS fx =
                new CPAWS.CPAWS();
            var fxx = fx.WsExecuteColonias(id_estado,id_muni);

            string json = JsonConvert.SerializeObject(fxx, Formatting.Indented);
            return Json(json, JsonRequestBehavior.AllowGet);
            //return Json(fxx.ToString());

        }
        [HttpPost]
        public JsonResult GetCPs(int idCP)
        {
            CPAWS.CPAWS fx =
                new CPAWS.CPAWS();
            var fxx = fx.WsExecuteCP(72120);

            string json = JsonConvert.SerializeObject(fxx, Formatting.Indented);
            return Json(json, JsonRequestBehavior.AllowGet);
            //return Json(fxx.ToString());

        }
    }
}
