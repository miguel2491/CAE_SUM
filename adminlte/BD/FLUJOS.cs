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
    
    public partial class FLUJOS
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public FLUJOS()
        {
            this.FIRMA_TESTIGOS = new HashSet<FIRMA_TESTIGOS>();
            this.FLUJOS_TIPOS = new HashSet<FLUJOS_TIPOS>();
        }
    
        public int id_flujo { get; set; }
        public int id_cliente { get; set; }
        public int id_documento { get; set; }
        public Nullable<System.DateTime> fecha { get; set; }
        public string localidad { get; set; }
    
        public virtual CONTENIDO_CHECK CONTENIDO_CHECK { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<FIRMA_TESTIGOS> FIRMA_TESTIGOS { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<FLUJOS_TIPOS> FLUJOS_TIPOS { get; set; }
    }
}