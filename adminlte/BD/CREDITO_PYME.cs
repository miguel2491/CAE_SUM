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
    
    public partial class CREDITO_PYME
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CREDITO_PYME()
        {
            this.CREDITO_PYME_EXTRA = new HashSet<CREDITO_PYME_EXTRA>();
        }
    
        public int id_credito_pyme { get; set; }
        public Nullable<int> id_solicitud { get; set; }
        public string nombre_completo_razon_social { get; set; }
        public string fax { get; set; }
        public string rfc_homoclave { get; set; }
        public string trayectoria_empresa { get; set; }
        public Nullable<int> numero_actividad_principal { get; set; }
        public string descripcion_actividad { get; set; }
        public string comentarios_productos { get; set; }
        public string ventas_constantes { get; set; }
        public string temporada_alta { get; set; }
        public string expectativas { get; set; }
        public string decripcion_proceso_instalacion { get; set; }
        public Nullable<int> total_empleados { get; set; }
        public Nullable<int> de_confianza { get; set; }
        public Nullable<int> sindicalizados { get; set; }
        public string nombre_sindicato { get; set; }
        public string afiliacion { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CREDITO_PYME_EXTRA> CREDITO_PYME_EXTRA { get; set; }
    }
}
