using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using adminlte.BD;

namespace adminlte.Controllers
{
    public class EvaluacionesController : Controller
    {
        // GET: Evaluaciones
        public ActionResult Index()
        {
            return View();
        }
        // GET: Evaluaciones
        public ActionResult ListadoEvaluacionCualitativa()
        {
            return View();
        }
        // GET: Evaluaciones Preguntas
        public ActionResult ListadoPreguntasCualitativa()
        {
            return View();
        } 
        // GET: Evaluaciones Respuestas
        public ActionResult ListadoRespuestasCualitativa()
        {
            return View();
        }
        [HttpGet]
        public ActionResult GetListRespuestasCualitativa()
        {
            DB_CEAEntities db = new DB_CEAEntities();
            return Json(db.EvaluacionCualitativadeGrupoComunalSecuencial_Respuestas.Select(x => new
            {
                id = x.id,
                id_pregunta = x.id_EvaluacionCualitativa_pregunta,
                valor = x.valor,
                respuesta = x.respuesta,
                status = x.status,
            }).ToList(), JsonRequestBehavior.AllowGet);
        }
        // POST: Evaluaciones/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        /***Evaluación Económica***/
        public ActionResult EvaluacionEconomica()
        {
            return View();
        }
        [HttpPost]
        public JsonResult InsertHistorialCrediticio(HISTORIAL_CREDITICIO_CLIENTE hcc)
        {

            using (DB_CEAEntities db = new DB_CEAEntities())
            {


                var historial = new HISTORIAL_CREDITICIO_CLIENTE()
                {
                    id_cliente = hcc.id_cliente,
                    secuencia = hcc.secuencia,
                    monto = hcc.monto,
                    plazo = hcc.plazo,
                    CuotaMensual = hcc.CuotaMensual,
                    incrementoMonto = hcc.incrementoMonto,
                    incrementoCuota = hcc.incrementoCuota,
                    disponobleMaximoreportadoporcliente = hcc.disponobleMaximoreportadoporcliente,
                    utilidadOperativa = hcc.utilidadOperativa,
                    capDePagoMensual = hcc.capDePagoMensual,
                    coberturadeCuota = hcc.coberturadeCuota,




                };
                db.HISTORIAL_CREDITICIO_CLIENTE.Add(historial); //insert into homebarras (obj) values (obj)
                //db..add(cat);
                db.SaveChanges();
            }
            //var action = "Insert";
            //var comments = "barra ingresada por el usuario : ";
            //   InsertInBitacora(data.id_userCreated, action, comments + data.id_userCreated);

            return Json("ok", JsonRequestBehavior.AllowGet);

        }

        [HttpGet]
        public JsonResult EvaCualitN_PREGUNTAS_ListJson()
        {


            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var preguntas = db.EvaluacionCualitativadeGrupoComunalNuevo_Preguntas.ToList<EvaluacionCualitativadeGrupoComunalNuevo_Preguntas>();

                return Json(preguntas, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public JsonResult EvaCualitN_RESPUESTAS_IDP(int id)
        {

            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var respuestas = //db.SCORING_RESPUESTAS.Where(u => u.id_pregunta.Equals(id)).ToList<SCORING_RESPUESTAS>();

                db.EvaluacionCualitativadeGrupoComunalNuevo_Respuestas.ToList<EvaluacionCualitativadeGrupoComunalNuevo_Respuestas>().Where(u => u.id_EvaluacionCualitativa_pregunta.Equals(id));

                return Json(respuestas, JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public JsonResult InsertEvaluacionSimple(EVALUACION_ECONOMICA_SIMPLE hcc)
        {

            using (DB_CEAEntities db = new DB_CEAEntities())
            {

                CONTENIDO_CHECK cont = new CONTENIDO_CHECK()
                {
                    id_documento = 1
                };
                var ev = new EVALUACION_ECONOMICA_SIMPLE()
                {
                    //CONTENIDO_CHECK = cont,
                    id_cliente = 1,
                    id_documento = 1,
                    id_sucursal = 1,
                    id = 1,
                    venta_promedio_lunes = hcc.venta_promedio_lunes,
                    venta_promedio_martes = hcc.venta_promedio_martes,
                    venta_promedio_miercoles = hcc.venta_promedio_miercoles,
                    venta_promedio_jueves = hcc.venta_promedio_jueves,
                    venta_promedio_viernes = hcc.venta_promedio_viernes,
                    venta_promedio_sabado = hcc.venta_promedio_sabado,
                    venta_promedio_domingo = hcc.venta_promedio_domingo,
                    venta_promedio_semanal = hcc.venta_promedio_semanal,
                    venta_promedio_mensual = hcc.venta_promedio_mensual,
                    utilidad_bruta_sobreventas = hcc.utilidad_bruta_sobreventas,
                    renta_derecho_piso_cooperacion = hcc.renta_derecho_piso_cooperacion,
                    transporte = hcc.transporte,
                    telefono = hcc.telefono,
                    alimentacion = hcc.alimentacion,
                    eduacacion_salud = hcc.eduacacion_salud,
                    trasporte_familiar = hcc.trasporte_familiar,
                    gastos_grales_familiares = hcc.gastos_grales_familiares,
                    gas = hcc.gas,
                    renta = hcc.renta,
                    luz_predial = hcc.luz_predial,
                    telefonia_familiar = hcc.telefonia_familiar,
                    total_gastos_familiares = hcc.total_gastos_familiares,
                    pago_mensual_otras_microfinancieras = hcc.pago_mensual_otras_microfinancieras,
                    cuota_cliente_pagar_mensual = hcc.cuota_cliente_pagar_mensual,
                    monto_propuesto = hcc.monto_propuesto,
                    cuota_cubierta = hcc.cuota_cubierta,
                    caja_activo = hcc.caja_activo,
                    caja_pasivo = hcc.caja_pasivo,
                    ahorro_bancos_activo = hcc.ahorro_bancos_activo,
                    cuentas_pagar_negocio_activo = hcc.cuentas_pagar_negocio_activo,
                    inventarios_activo = hcc.inventarios_activo,
                    cuentas_pagar_fam_activo = hcc.cuentas_pagar_fam_activo,
                    deudas_otras_instituciones_activo = hcc.deudas_otras_instituciones_activo,
                    tandas = hcc.tandas,
                    bienes_negocio = hcc.bienes_negocio,
                    bienes_propios = hcc.bienes_propios,
                    otros_ingresos_valorTotal = hcc.otros_ingresos_valorTotal,
                    numero_hijos_trabajan = hcc.numero_hijos_trabajan,
                    Numero_hijos_edad_escolar = hcc.Numero_hijos_edad_escolar,
                    monto_solicitado_cliente = hcc.monto_solicitado_cliente,
                    monto_maximo_trabajado = hcc.monto_maximo_trabajado,
                    plazo_propuesto_cliente = hcc.plazo_propuesto_cliente,
                    capacidad_pago = hcc.capacidad_pago,
                    porcentaje_utilidad_brutas_ventas = hcc.porcentaje_utilidad_brutas_ventas,
                    comentarios_observaciones_adicionales_asesor = hcc.comentarios_observaciones_adicionales_asesor





                };
                db.EVALUACION_ECONOMICA_SIMPLE.Add(ev); //insert into homebarras (obj) values (obj)
                //db..add(cat);
                db.SaveChanges();
            }
            //var action = "Insert";
            //var comments = "barra ingresada por el usuario : ";
            //   InsertInBitacora(data.id_userCreated, action, comments + data.id_userCreated);

            return Json("ok", JsonRequestBehavior.AllowGet);

        }

        /***Evaluacion Detallada***/
        public ActionResult EvaluacionDetallada()
        {
            return View();
        }
        public ActionResult EvaluacionDetalladaNueva()
        {
            return View();
        }
        [HttpGet]
        public ActionResult ListaEvaluaciones()
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
        public JsonResult InsertInformacionOperativaDetallada(INFORMACION_OPERATIVA_DETALLADA hx)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var ev = new INFORMACION_OPERATIVA_DETALLADA()
                {
                    id_cliente = 1,
                    sector_economico = hx.sector_economico,
                    actividad_especifica = hx.actividad_especifica,
                    numero_evaluacion = hx.numero_evaluacion,
                    secuencia_base = hx.secuencia_base,
                    fecha = DateTime.Now,
                    monto_solicitar = hx.monto_solicitar,
                    ultimo_monto_operado = hx.ultimo_monto_operado,
                    venta_semanal_lunes = hx.venta_semanal_lunes,
                    venta_Semanal_martes = hx.venta_Semanal_martes,
                    venta_semanal_miercoles = hx.venta_semanal_miercoles,
                    venta_Semanal__jueves = hx.venta_Semanal__jueves,
                    venta_semanal_viernes = hx.venta_semanal_viernes,
                    venta_semanal_sabado = hx.venta_semanal_sabado,
                    venta_semanal_domingo = hx.venta_semanal_domingo,
                    semanal = hx.semanal,
                    venta_mensual_enero = hx.venta_mensual_enero,
                    venta_mensual_febrero = hx.venta_mensual_febrero,
                    venta_mensual_marzo = hx.venta_mensual_marzo,
                    venta_mensual_abril = hx.venta_mensual_abril,
                    venta_mensual_mayo = hx.venta_mensual_mayo,
                    venta_mensual_junio = hx.venta_mensual_junio,
                    venta_mensual_julio = hx.venta_mensual_julio,
                    venta_mensual_agosto = hx.venta_mensual_agosto,
                    venta_mensual_septimebre = hx.venta_mensual_septimebre,
                    venta_mensual_octubre = hx.venta_mensual_octubre,
                    venta_mensual_noviembre = hx.venta_mensual_noviembre,
                    venta_mensual_diciembre = hx.venta_mensual_diciembre,
                    utilidad_bruta_negocio_capital = hx.utilidad_bruta_negocio_capital,
                    utilidad_bruta_negocio_porcentual = hx.utilidad_bruta_negocio_porcentual,
                    utilidad_operativa_negocio_capital = hx.utilidad_operativa_negocio_capital,
                    utilidad_operativa_negocio_porcentual = hx.utilidad_operativa_negocio_porcentual,
                    ingresos_negocio = hx.ingresos_negocio,
                    otros_ingresos_cliente = hx.otros_ingresos_cliente,
                    aportaciones_familiar_comprobables = hx.aportaciones_familiar_comprobables,
                    ingresos_totales = hx.ingresos_totales,
                    gastos_familia = hx.gastos_familia,
                    suma_cuotas_deudas_otras_microfinancieras = hx.suma_cuotas_deudas_otras_microfinancieras,
                    cuotas_deudas_acreedores_diversos = hx.cuotas_deudas_acreedores_diversos,
                    pago_mensual_portandas = hx.pago_mensual_portandas,
                    egresos_totales = hx.egresos_totales,
                    disponible_mensual_maximo_reportado_cliente = hx.disponible_mensual_maximo_reportado_cliente,
                    capacidad_pago = hx.capacidad_pago,
                    gastos_operativos_negocio_total = hx.gastos_operativos_negocio_total,
                    gastos_familia_total = hx.gastos_familia_total
                };
                db.INFORMACION_OPERATIVA_DETALLADA.Add(ev); //insert into homebarras (obj) values (obj)
                //db..add(cat);
                db.SaveChanges();
            }
            //            var action = "Insert";
            //          var comments = "barra ingresada por el usuario : ";
            //   InsertInBitacora(data.id_userCreated, action, comments + data.id_userCreated);
            return Json("Informacion Ingresada", JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult InsertDinamicasDeVentas(Insumos_Productos hx)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var ev = new Insumos_Productos()
                {
                    productoInsumo = hx.productoInsumo,
                    cantidad = hx.cantidad,
                    id_documento = 1,
                    unidad_medida = hx.unidad_medida,
                    costo_unitario = hx.costo_unitario,
                    frecuencia_venta = hx.frecuencia_venta,
                    compra_mensual = hx.compra_mensual,
                    venta_mensual = hx.venta_mensual,
                    utilidad_bruta = hx.utilidad_bruta,
                    utilidad_bruta_prom = hx.utilidad_bruta_prom,
                    descripcion = hx.descripcion
                };
                db.Insumos_Productos.Add(ev); //insert into homebarras (obj) values (obj)
                //db..add(cat);
                db.SaveChanges();
            }
            //            var action = "Insert";
            //          var comments = "barra ingresada por el usuario : ";
            //   InsertInBitacora(data.id_userCreated, action, comments + data.id_userCreated);
            return Json("Informacion Ingresada", JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult HistorialCrediticio_ListJson(int id)
        {

            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var respuestas = //db.SCORING_RESPUESTAS.Where(u => u.id_pregunta.Equals(id)).ToList<SCORING_RESPUESTAS>();

                db.HISTORIAL_CREDITICIO_CLIENTE.ToList<HISTORIAL_CREDITICIO_CLIENTE>().Where(u => u.id_documento.Equals(id));

                return Json(respuestas, JsonRequestBehavior.AllowGet);
            }

        }

        [HttpGet]
        public ActionResult TTry(String i)
        {


            ViewBag.ID_I = i;

            return View("about");
        }

        [HttpPost]
        public JsonResult INSERT_CalificaiconGrupo(SCORING res)
        {

            using (DB_CEAEntities db = new DB_CEAEntities())
            {

                var p = new SCORING()
                {
                    id_check_list = res.id_check_list,
                    id_sucursal = res.id_sucursal,
                    id_cliente = res.id_cliente,
                    fecha = new DateTime(),
                    calificacion = res.calificacion,
                    secuencia = res.secuencia,
                    numero_evaluacion = res.numero_evaluacion,
                    id_catalogo = res.id_catalogo
                };

                db.SCORING.Add(p);
                db.SaveChanges();

                return Json(p, JsonRequestBehavior.AllowGet);

            }
        }

        //EVALUACIÓN SIMPLE
        public ActionResult EvaluacionSimple()
        {
            return View();
        }

        //EVALUACIÓN CLIENTE EMPRENDEDOR
        public ActionResult EvaluacionClienteEmprendedor()
        {
            return View();
        }

        //CREDITO RURAL
        public ActionResult CreditoRural()
        {
            return View();
        }
    }
}
