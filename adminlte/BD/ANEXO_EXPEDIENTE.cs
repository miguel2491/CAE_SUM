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
    
    public partial class ANEXO_EXPEDIENTE
    {
        public int id_anexo_expediente { get; set; }
        public int id_expediente { get; set; }
        public string tipo { get; set; }
        public string destino { get; set; }
        public Nullable<byte> cantidad { get; set; }
        public string unidad_medida { get; set; }
        public Nullable<decimal> costo_unitario { get; set; }
        public Nullable<decimal> costo_total { get; set; }
        public string tipo_garantia { get; set; }
        public string modelo { get; set; }
        public Nullable<short> ann { get; set; }
        public string cotizacion { get; set; }
        public string nombre_completo { get; set; }
        public string cargo { get; set; }
        public Nullable<byte> porcentaje_accionario { get; set; }
    
        public virtual EXPEDIENTE EXPEDIENTE { get; set; }
    }
}
