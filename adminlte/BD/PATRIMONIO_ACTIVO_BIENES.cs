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
    
    public partial class PATRIMONIO_ACTIVO_BIENES
    {
        public int id_bienes_activos { get; set; }
        public Nullable<int> id_patrimonio { get; set; }
        public string descripcion { get; set; }
        public string tipo_pertenece { get; set; }
        public Nullable<decimal> activo { get; set; }
        public Nullable<decimal> pasivo { get; set; }
        public Nullable<decimal> valor { get; set; }
        public Nullable<decimal> deuda_total { get; set; }
        public Nullable<decimal> pago_mensual { get; set; }
    
        public virtual INFORMACION_PATRIMONIAL INFORMACION_PATRIMONIAL { get; set; }
    }
}
