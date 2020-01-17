//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace adminlte.BD
{
    using System;
    using System.Collections.Generic;
    
    public partial class EVALUACION_TECNICA
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public EVALUACION_TECNICA()
        {
            this.FIRMA_TESTIGOS = new HashSet<FIRMA_TESTIGOS>();
        }
    
        public int id_eva_tecnica { get; set; }
        public int id_check { get; set; }
        public int id_cliente { get; set; }
        public int id_asesor { get; set; }
        public string secuencia { get; set; }
        public string numero_evaluacion { get; set; }
        public Nullable<System.DateTime> fecha_evaluacion { get; set; }
        public string actividad_negocio { get; set; }
        public string parcela { get; set; }
        public string tipo_riego { get; set; }
        public string topografia { get; set; }
        public string cultivo_ganado { get; set; }
        public string etapa_desarrollo { get; set; }
        public string labores_agricolas { get; set; }
        public string condicion_clima_zona { get; set; }
        public string cultivo_predominante { get; set; }
        public string hectares_posee { get; set; }
        public string hectareas_agricolas { get; set; }
        public string hectareas_precuarias { get; set; }
        public string accesibilidad { get; set; }
        public string medios_transporte { get; set; }
        public string otra_informacion { get; set; }
        public Nullable<System.TimeSpan> tiempo_realiza { get; set; }
        public string aportacion_familiar { get; set; }
        public string participantes_actividad { get; set; }
        public string estabilidad_canales_comercio { get; set; }
        public string estabilidad_tenencia_tierra { get; set; }
        public string referencia_productores { get; set; }
        public string manejo_actividades { get; set; }
        public string calidad_activo { get; set; }
        public string riesgos_tecnicos { get; set; }
        public string riesgos_gestion { get; set; }
        public string riesgos_comercializacion { get; set; }
        public string riesgos_solvencia_moral { get; set; }
        public string riesgos_entorno_familiar { get; set; }
    
        public virtual CONTENIDO_CHECK CONTENIDO_CHECK { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<FIRMA_TESTIGOS> FIRMA_TESTIGOS { get; set; }
    }
}
