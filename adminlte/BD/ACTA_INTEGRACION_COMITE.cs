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
    
    public partial class ACTA_INTEGRACION_COMITE
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ACTA_INTEGRACION_COMITE()
        {
            this.FIRMA_TESTIGOS = new HashSet<FIRMA_TESTIGOS>();
        }
    
        public int id_acta_integracion { get; set; }
        public int id_check_list { get; set; }
        public Nullable<int> id_presidenta { get; set; }
        public Nullable<int> id_tesorera { get; set; }
        public Nullable<int> id_secretaria { get; set; }
        public int id_grupo { get; set; }
        public Nullable<System.TimeSpan> hrs { get; set; }
        public string dia { get; set; }
        public string mes { get; set; }
        public string anio { get; set; }
        public string observaciones { get; set; }
        public Nullable<decimal> cantidad_representada { get; set; }
        public Nullable<byte> porcentaje { get; set; }
        public Nullable<decimal> aportacion_semanal { get; set; }
        public Nullable<byte> dia_reunion { get; set; }
        public Nullable<System.TimeSpan> hora_reunion { get; set; }
        public string lugar { get; set; }
        public string cargo_duenio_lugar { get; set; }
        public Nullable<byte> minutos_castigo { get; set; }
        public Nullable<decimal> multa_retardo { get; set; }
        public Nullable<decimal> multa_inasistencia { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<FIRMA_TESTIGOS> FIRMA_TESTIGOS { get; set; }
    }
}