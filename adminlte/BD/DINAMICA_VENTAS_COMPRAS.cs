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
    
    public partial class DINAMICA_VENTAS_COMPRAS
    {
        public int id { get; set; }
        public int id_documento { get; set; }
        public string producto { get; set; }
        public string unidad_medida { get; set; }
        public Nullable<bool> frecuencia_venta { get; set; }
        public Nullable<decimal> cantidad { get; set; }
        public Nullable<decimal> precio_unitario { get; set; }
        public Nullable<decimal> costo_unitario { get; set; }
        public Nullable<decimal> venta_mensual { get; set; }
        public Nullable<decimal> compra_mensual { get; set; }
        public Nullable<decimal> utilidad_bruta { get; set; }
        public Nullable<decimal> utilidad_prom { get; set; }
    
        public virtual INFORMACION_OPERATIVA_NEGOCIO INFORMACION_OPERATIVA_NEGOCIO { get; set; }
    }
}
