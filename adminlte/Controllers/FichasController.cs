using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Rotativa;
using adminlte.BD;

namespace adminlte.Controllers
{
    public class FichasController : Controller
    {
        // GET: Fichas
        public ActionResult Index()
        {
            return View();
        }

        /*--FICHA IDENT CLIENTE REAL--*/
        public ActionResult IdentificacionReal()
        {
            return View();
        }
        public ActionResult IdentificacionRealNuevo()
        {
            return View();
        }
        [HttpGet]
        public ActionResult ListaFichasClieReal()
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var room_query = from c in db.FICHAS
                                 where c.tipo_ficha == "FPDC.AE-014.4"
                                 select new
                                 {
                                     id = c.id_ficha,
                                     codigo_cliente = c.id_cliente,
                                     nombre = c.nombre_cliente+" "+c.app_cliente+" "+c.apm_cliente,
                                     actividad = c.actividad,
                                     negocio = c.negocio,
                                     fecha = c.fecha_levantamiento.ToString()
                                 };
                return Json(room_query.ToList(), JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult InsertDirecciones(DIRECCIONES dir)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var direc = new DIRECCIONES()
                {
                    id_documento = dir.id_documento,
                    calle = dir.calle,
                    numero = dir.numero,
                    colonia_id = dir.colonia_id,
                    municipio_id = dir.municipio_id,
                    cp_id = dir.cp_id,
                    tipo = dir.tipo
                };
                return Json("OK");
            }
        }
            
        [HttpPost]
        public ActionResult InsertClienteReal(FICHAS fic)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var fichas = new FICHAS()
                {
                    id_documento = fic.id_documento,
                    tipo_documento = fic.tipo_documento,
                    tipo_ficha = fic.tipo_documento,
                    fecha_levantamiento = fic.fecha_levantamiento,
                    nombre_cliente = fic.nombre_cliente,
                    app_cliente = fic.app_cliente,
                    apm_cliente = fic.apm_cliente,
                    clave_elector = fic.clave_elector,
                    curp = fic.curp,
                    rfc = fic.rfc,
                    numero_serie_fiel = fic.numero_serie_fiel,
                    nacionalidad = fic.nacionalidad,
                    pais_nacimiento = fic.pais_nacimiento,
                    fecha_nacimiento = fic.fecha_nacimiento,
                    deps_economicos = fic.deps_economicos,
                    ann_estudio = fic.ann_estudio,
                    sexo = fic.sexo,
                    estado_civil = fic.estado_civil,
                    escolaridad = fic.escolaridad,
                    telefono_fijo = fic.telefono_fijo,
                    tipo_casa = fic.tipo_casa,
                    nombre_adicional = fic.nombre_adicional,
                    app_adicional = fic.app_adicional,
                    apm_adicional = fic.apm_adicional,
                    fecha_nacimiento_adicional = fic.fecha_nacimiento_adicional,
                    estado_nacimiento_adicional = fic.estado_nacimiento_adicional,
                    ocupacion = fic.ocupacion_adicional,
                    conocido_por = fic.conocido_por,
                    lugar_trabajo_adicional = fic.lugar_trabajo_adicional,
                    clave_elector_adicional = fic.clave_elector_adicional,
                    escolaridad_adicional = fic.escolaridad_adicional,
                    ann_estudio_adicional = fic.ann_estudio_adicional,
                    actividad_e = fic.actividad_e,
                    negocio = fic.negocio,
                    sector = fic.sector,
                    ano_oficio = fic.ano_oficio,
                    tipo_negocio = fic.tipo_negocio,
                    referencia_localizacion = fic.referencia_localizacion,
                    ubicacion_negocio = fic.ubicacion_negocio,
                    telefono_negocio = fic.telefono_negocio,
                    tipo_local = fic.tipo_local,
                    numero_trabajadores = fic.numero_trabajadores,
                    dias_trabajo = fic.dias_trabajo,
                    dias_descanso = fic.dias_descanso,
                    horario = fic.horario,
                    otros_ingresos = fic.otros_ingresos,
                    lat_negocio = fic.lat_negocio,
                    lon_negocio = fic.lon_negocio,
                    lat_domicilio = fic.lat_domicilio,
                    lon_domicilio = fic.lon_domicilio,
                    respuesta_accionista = fic.respuesta_accionista,
                    respuesta_manifiesto = fic.respuesta_manifiesto,
                    avenida_acceso = fic.avenida_acceso,
                    lineas_transporte = fic.lineas_transporte,
                    calles_principales = fic.calles_principales,
                    tiempo_aprox = fic.tiempo_aprox
                };

                db.FICHAS.Add(fichas);
                db.SaveChanges();
                int id = fichas.id_ficha;
                return Json(id);
            }
        }

        /*----------------------------*/
        /*-------FICHA DE IDENTIFICACION MORAL------*/
        public ActionResult IdentificacionMoral()
        {
            return View();
        }
        public ActionResult IdentificacionMoralNuevo()
        {
            return View();
        }
        [HttpGet]
        public ActionResult ListaFichasClieMoral()
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var room_query = from c in db.FICHAS
                                 where c.tipo_documento == "FPDC.AE-029"
                                 select new
                                 {
                                     id = c.id_ficha,
                                     codigo_cliente = c.id_cliente,
                                     nombre = c.nombre_cliente + " " + c.app_cliente + " " + c.apm_cliente,
                                     actividad = c.actividad,
                                     negocio = c.negocio,
                                     fecha = c.fecha_levantamiento.ToString()
                                 };
                return Json(room_query.ToList(), JsonRequestBehavior.AllowGet);
            }
        }
        
        [HttpPost]
        public ActionResult InsertClienteMoral(FICHAS fic)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var fichas = new FICHAS()
                {
                    id_documento = fic.id_documento,
                    id_cliente = fic.id_cliente,
                    fecha_levantamiento = fic.fecha_levantamiento,
                    nombre_cliente = fic.nombre_cliente,
                    nombre_comercial = fic.nombre_comercial,
                    rfc = fic.rfc,
                    fecha_constitucion = fic.fecha_constitucion,
                    nacionalidad = fic.nacionalidad,
                    numero_serie_fiel = fic.numero_serie_fiel,
                    telefono_fijo = fic.telefono_fijo,
                    tipo_casa = fic.tipo_casa,
                    nombre_adicional = fic.nombre_adicional,
                    app_adicional = fic.app_adicional,
                    apm_adicional = fic.apm_adicional,
                    fecha_nacimiento_adicional = fic.fecha_nacimiento_adicional,
                    rol_cliente = fic.rol_cliente,
                    respuesta_accionista = fic.respuesta_accionista,
                    porcentaje_accionista = fic.porcentaje_accionista,
                    actividad_e = fic.actividad_e,
                    negocio = fic.negocio,
                    sector = fic.sector,
                    antiguedad_domicilio = fic.antiguedad_domicilio,
                    antiguedad_actividad = fic.antiguedad_actividad,
                    dias_trabajo = fic.dias_trabajo,
                    dias_descanso = fic.dias_descanso,
                    horario = fic.horario,
                    otros_ingresos = fic.otros_ingresos,
                    numero_trabajadores = fic.numero_trabajadores,
                    cuenta_sucursales = fic.cuenta_sucursales,
                    avenida_acceso = fic.avenida_acceso,
                    lineas_transporte = fic.lineas_transporte,
                    calles_principales = fic.calles_principales,
                    tiempo_aprox = fic.tiempo_aprox,
                    lat_negocio = fic.lat_negocio,
                    lon_negocio = fic.lon_negocio,
                    lat_domicilio = fic.lat_negocio,
                    lon_domicilio = fic.lon_domicilio,
                    nombre_beneficiario = fic.nombre_beneficiario,
                    app_beneficiario = fic.app_beneficiario,
                    apm_beneficiario = fic.apm_beneficiario,
                    fecha_nacimiento_beneficiario = fic.fecha_nacimiento_beneficiario,
                    sexo_beneficiario = fic.sexo_beneficiario,
                    parentesco_beneficiario = fic.parentesco_beneficiario,
                    participacion_beneficiario = fic.participacion_beneficiario,
                    respuesta_manifiesto2 = fic.respuesta_manifiesto2,
                    respuesta_manifiesto3 = fic.respuesta_manifiesto3,
                    nombre_tercero = fic.nombre_tercero,
                    app_tercero = fic.app_tercero,
                    apm_tercero = fic.apm_tercero,
                    redes_sociales2 = fic.redes_sociales2,
                    medio_enterado = fic.medio_enterado,
                    tipo_documento = fic.tipo_documento
                };

                db.FICHAS.Add(fichas);
                db.SaveChanges();
                int id = fichas.id_ficha;
                return Json(new { redirectToUrl = Url.Action("IdentificacionMoral", "Fichas", new { id = id }) });
            }
        }

        /*PDFS*/
        public ActionResult FichaMoralPDF(int idP)
        {
            ViewBag.ID = idP;
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var leftOuterJoin = from fic in db.FICHAS
                                    join d in db.DIRECCIONES on fic.id_documento equals d.id_documento into dept
                                    from department in dept.DefaultIfEmpty()
                                    where fic.id_documento == idP
                                    select new
                                    {
                                        id = fic.id_documento,
                                        cocli = fic.id_cliente,
                                        fecha_levantamiento = fic.fecha_levantamiento,
                                        nombre_cliente = fic.nombre_cliente,
                                        nombre_comercial = fic.nombre_comercial,
                                        rfc = fic.rfc,
                                        fecha_constitucion = fic.fecha_constitucion,
                                        nacionalidad = fic.nacionalidad,
                                        numero_serie_fiel = fic.numero_serie_fiel,
                                        telefono_fijo = fic.telefono_fijo,
                                        tipo_casa = fic.tipo_casa,
                                        nombre_adicional = fic.nombre_adicional,
                                        app_adicional = fic.app_adicional,
                                        apm_adicional = fic.apm_adicional,
                                        fecha_nacimiento_adicional = fic.fecha_nacimiento_adicional,
                                        rol_cliente = fic.rol_cliente,
                                        respuesta_accionista = fic.respuesta_accionista,
                                        porcentaje_accionista = fic.porcentaje_accionista,
                                        actividad_e = fic.actividad_e,
                                        negocio = fic.negocio,
                                        sector = fic.sector,
                                        antiguedad_domicilio = fic.antiguedad_domicilio,
                                        antiguedad_actividad = fic.antiguedad_actividad,
                                        dias_trabajo = fic.dias_trabajo,
                                        dias_descanso = fic.dias_descanso,
                                        horario = fic.horario,
                                        otros_ingresos = fic.otros_ingresos,
                                        numero_trabajadores = fic.numero_trabajadores,
                                        cuenta_sucursales = fic.cuenta_sucursales,
                                        avenida_acceso = fic.avenida_acceso,
                                        lineas_transporte = fic.lineas_transporte,
                                        calles_principales = fic.calles_principales,
                                        tiempo_aprox = fic.tiempo_aprox,
                                        lat_negocio = fic.lat_negocio,
                                        lon_negocio = fic.lon_negocio,
                                        lat_domicilio = fic.lat_negocio,
                                        lon_domicilio = fic.lon_domicilio,
                                        nombre_beneficiario = fic.nombre_beneficiario,
                                        app_beneficiario = fic.app_beneficiario,
                                        apm_beneficiario = fic.apm_beneficiario,
                                        fecha_nacimiento_beneficiario = fic.fecha_nacimiento_beneficiario,
                                        sexo_beneficiario = fic.sexo_beneficiario,
                                        parentesco_beneficiario = fic.parentesco_beneficiario,
                                        participacion_beneficiario = fic.participacion_beneficiario,
                                        respuesta_manifiesto2 = fic.respuesta_manifiesto2,
                                        respuesta_manifiesto3 = fic.respuesta_manifiesto3,
                                        nombre_tercero = fic.nombre_tercero,
                                        app_tercero = fic.app_tercero,
                                        apm_tercero = fic.apm_tercero,
                                        redes_sociales2 = fic.redes_sociales2,
                                        medio_enterado = fic.medio_enterado,
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
                    ViewBag.cocli = data.cocli;
                    ViewBag.fechaL = data.fecha_levantamiento;
                    ViewBag.nombreC = data.nombre_cliente;
                    ViewBag.nombreComercial = data.nombre_comercial;
                    ViewBag.rfc = data.rfc;
                    ViewBag.fechaConst = data.fecha_constitucion;
                    ViewBag.nacionalidad = data.nacionalidad;
                    ViewBag.numSerie = data.numero_serie_fiel;
                    ViewBag.direccion = data.calle+" "+data.numero;
                    ViewBag.referencia = data.nombre_comercial;
                    ViewBag.calle = data.calle;
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
            ViewBag.Title = "Persona Moral";
            return View();
        }
        [HttpPost]
        public ActionResult PdfMoral(int id)
        {
            return Json(new { redirectToUrl = Url.Action("PrintMoral", "Fichas", new { id = id }) });
        }
        public ActionResult PrintMoral(int id)
        {
            return new ActionAsPdf("FichaMoralPDF", new { idP = id })
            { FileName = "FichaPersonaMoral.pdf" };
        }
        //EDITAR
        public ActionResult showClientesMoral(int id)
        {
            return Json(new { redirectToUrl = Url.Action("editaClienteMoral", "Fichas", new { id = id }) });
        }
        public ActionResult editaClienteMoral(int id)
        {
            ViewBag.ID = id;
            /*using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var leftOuterJoin = from c in db.FICHAS
                                    join d in db.DIRECCIONES on c.id_ficha equals d.id_documento into dept
                                    from department in dept.DefaultIfEmpty()
                                    where c.id_ficha == id
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
            }*/
            return View();
        }
        /*-----------------------------------------*/
        /*-------FICHA DE IDENTIFICACION AVAL ------*/
        public ActionResult IdentificacionAval()
        {
            return View();
        }
        public ActionResult IdentificacionAvalNuevo()
        {
            return View();
        }
        [HttpGet]
        public ActionResult ListaFichasAval()
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var room_query = from c in db.FICHAS
                                 where c.tipo_ficha == "FPDC.AE-004.1"
                                 select new
                                 {
                                     id = c.id_ficha,
                                     codigo_cliente = c.id_cliente,
                                     nombre = c.nombre_cliente + " " + c.app_cliente + " " + c.apm_cliente,
                                     actividad = c.actividad,
                                     negocio = c.negocio,
                                     fecha = c.fecha_levantamiento.ToString()
                                 };
                return Json(room_query.ToList(), JsonRequestBehavior.AllowGet);
            }
        }
        /*-----------------------------------------*/
        /*-------FICHA DE IDENTIFICACIÓN CLIENTE------*/
        public ActionResult IdentificacionCliente()
        {
            return View();
        }
        public ActionResult IdentificacionClienteNuevo()
        {
            return View();
        }
        [HttpGet]
        public ActionResult ListaFichasCliente()
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var room_query = from c in db.FICHAS
                                 where c.tipo_ficha == "FPDC.AE-002.1"
                                 select new
                                 {
                                     id = c.id_ficha,
                                     codigo_cliente = c.id_cliente,
                                     nombre = c.nombre_cliente + " " + c.app_cliente + " " + c.apm_cliente,
                                     actividad = c.actividad,
                                     negocio = c.negocio,
                                     fecha = c.fecha_levantamiento.ToString()
                                 };
                return Json(room_query.ToList(), JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult InsertCliente(FICHAS fic)
        {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var fichas = new FICHAS()
                {
                    id_documento = fic.id_documento,
                    fecha_levantamiento = fic.fecha_levantamiento,
                    nombre_cliente = fic.nombre_cliente,
                    app_cliente = fic.app_cliente,
                    apm_cliente = fic.apm_cliente,
                    clave_elector = fic.clave_elector,
                    rfc = fic.rfc,
                    curp = fic.curp,
                    numero_serie_fiel = fic.numero_serie_fiel,
                    conocido_por = fic.conocido_por,
                    nacionalidad = fic.nacionalidad,
                    pais_nacimiento = fic.pais_nacimiento,
                    estado_nacimiento = fic.estado_nacimiento,
                    fecha_nacimiento = fic.fecha_nacimiento,
                    sexo = fic.sexo,
                    estado_civil = fic.estado_civil,
                    deps_economicos = fic.deps_economicos,
                    escolaridad = fic.escolaridad,
                    ann_estudio = fic.ann_estudio,
                    profesion = fic.profesion,
                    ocupacion = fic.ocupacion,
                    lenguaje = fic.lenguaje,
                    rol_cliente = fic.rol_cliente,
                    discapacidad = fic.discapacidad,
                    uso_internet = fic.uso_internet,
                    redes_sociales = fic.redes_sociales,
                    correo_electronico = fic.correo_electronico,
                    apoyo_social = fic.apoyo_social,
                    codigo_familia = fic.codigo_familia,
                    nombre_adicional = fic.nombre_adicional,
                    app_adicional = fic.app_adicional,
                    apm_adicional = fic.apm_adicional,
                    fecha_nacimiento_adicional = fic.fecha_nacimiento_adicional,
                    conocido_pareja = fic.conocido_pareja,
                    estado_nacimiento_adicional = fic.estado_nacimiento_adicional,
                    ocupacion_adicional = fic.ocupacion_adicional,
                    lugar_trabajo_adicional = fic.lugar_trabajo_adicional,
                    clave_elector_adicional = fic.clave_elector_adicional,
                    escolaridad_adicional = fic.escolaridad_adicional,
                    ann_estudio_adicional = fic.ann_estudio_adicional,
                    referencia_localizacion_adicional = fic.referencia_localizacion_adicional,
                    tipo_casa_adicional = fic.tipo_casa_adicional,
                    telefono_adicional = fic.telefono_adicional,
                    actividad_e = fic.actividad_e,
                    negocio = fic.negocio,
                    sector = fic.sector,
                    ano_oficio = fic.ano_oficio,
                    antiguedad_actividad = fic.antiguedad_actividad,
                    tipo_negocio = fic.tipo_negocio,
                    referencia_localizacion_actividad = fic.referencia_localizacion_actividad,
                    ubicacion_negocio = fic.ubicacion_negocio,
                    telefono_negocio = fic.telefono_negocio,
                    tipo_local = fic.tipo_local,
                    numero_trabajadores = fic.numero_trabajadores,
                    dias_trabajo = fic.dias_trabajo,
                    dias_descanso = fic.dias_descanso,
                    horario = fic.horario,
                    otros_ingresos = fic.otros_ingresos,
                    lat_negocio = fic.lat_negocio,
                    lon_negocio = fic.lon_negocio,
                    respuesta_croquis1 = fic.respuesta_croquis1,
                    respuesta_croquis2 = fic.respuesta_croquis2,
                    nombre_beneficiario = fic.nombre_beneficiario,
                    app_beneficiario = fic.app_beneficiario,
                    apm_beneficiario = fic.apm_beneficiario,
                    fecha_nacimiento_beneficiario = fic.fecha_nacimiento_beneficiario,
                    sexo_beneficiario = fic.sexo_beneficiario,
                    parentesco_beneficiario = fic.parentesco_beneficiario,
                    participacion_beneficiario = fic.participacion_beneficiario,
                    referencia_localizacion_bene = fic.referencia_localizacion_bene,
                    casa_beneficiario = fic.casa_beneficiario,
                    telefono_beneficiario = fic.telefono_beneficiario,
                    respuesta_manifiesto = fic.respuesta_manifiesto,
                    respuesta_accionista = fic.respuesta_accionista,
                    respuesta_manifiesto2 = fic.respuesta_manifiesto2,
                    respuesta_manifiesto3 = fic.respuesta_manifiesto3,
                    tipo_documento = fic.tipo_documento
                };

                db.FICHAS.Add(fichas);
                db.SaveChanges();
                int id = fichas.id_ficha;
                return Json(id);
                
            }
        }
        /*-----------------------------------------*/
        /*----DIRECCIONES-----*/
        [HttpPost]
        public ActionResult InsertDireccion(DIRECCIONES dir) {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var direccion = new DIRECCIONES()
                {
                    id_documento = dir.id_documento,
                    calle = dir.calle,
                    numero = dir.numero,
                    pais_id = dir.pais_id,
                    colonia_id = dir.colonia_id,
                    municipio_id = dir.municipio_id,
                    ciudad_id = dir.ciudad_id,
                    estado_id = dir.estado_id,
                    cp_id = dir.cp_id,
                    referencias = dir.referencias,
                    tipo = dir.tipo
                };

                db.DIRECCIONES.Add(direccion);
                db.SaveChanges();
                return Json("OK");
            }
        }

        [HttpPost]
        public ActionResult InsertReferencias(REFERENCIAS rf) {
            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var referencia = new REFERENCIAS()
                {
                    id_ficha = rf.id_ficha,
                    tipo_referencia = rf.tipo_referencia,
                    nombre = rf.nombre,
                    app = rf.app,
                    apm = rf.apm,
                    calle = rf.calle,
                    numero = rf.numero,
                    colonia = rf.colonia,
                    relacion = rf.relacion,
                    telefono = rf.telefono,
                    pais_ref = rf.pais_ref,
                    estado_ref = rf.estado_ref,
                    tiempo_conocer = rf.tiempo_conocer,
                    status = rf.status
                };
                db.REFERENCIAS.Add(referencia);
                db.SaveChanges();
                return Json("Ok");
            }
        }
    }
}
