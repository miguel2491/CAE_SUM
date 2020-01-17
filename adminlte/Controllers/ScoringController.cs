using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using adminlte.BD;

namespace adminlte.Controllers
{
    public class ScoringController : Controller
    {
        // GET: Scoring
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult PreguntasRespuestas()
        {
            return View();
        }
        public JsonResult SCORING_PREGUNTAS_ListJson()
        {


            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var preguntas = db.SCORING_PREGUNTAS.ToList<SCORING_PREGUNTAS>();

                return Json(preguntas, JsonRequestBehavior.AllowGet);
            }
        }


        public JsonResult SCORING_RESPUESTAS_IDP(int id)
        {

            using (DB_CEAEntities db = new DB_CEAEntities())
            {
                var respuestas = //db.SCORING_RESPUESTAS.Where(u => u.id_pregunta.Equals(id)).ToList<SCORING_RESPUESTAS>();

                db.SCORING_RESPUESTAS.ToList<SCORING_RESPUESTAS>().Where(u => u.id_pregunta.Equals(id));

                return Json(respuestas, JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public JsonResult INSERT_SCORING_Respuesta(SCORING_RESPUESTAS res)
        {

            using (DB_CEAEntities db = new DB_CEAEntities())
            {

                var p = new SCORING_RESPUESTAS()
                {
                    id_pregunta = res.id_pregunta,
                    respuesta = res.respuesta,
                    valor = res.valor,
                    status = false
                };

                db.SCORING_RESPUESTAS.Add(p);
                db.SaveChanges();

                return Json(p, JsonRequestBehavior.AllowGet);

            }
        }


        [HttpPost]
        public JsonResult INSERT_SCORING_PREGUNTA(string pregunta, string id_documento)
        {

            using (DB_CEAEntities db = new DB_CEAEntities())
            {

                var p = new SCORING_PREGUNTAS()
                {
                    pregunta = pregunta,
                    status = false,
                    id_documento = Int32.Parse(id_documento)
                };

                db.SCORING_PREGUNTAS.Add(p);
                db.SaveChanges();

                return Json(p, JsonRequestBehavior.AllowGet);

            }
        }

        [HttpPost]
        public JsonResult INSERT_SCORING_RespuestasDocumento(SCORING res)
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


    }
}
