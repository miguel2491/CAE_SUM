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
    
    public partial class SITUACION_AGRICOLA
    {
        public int id_situacion_agricola { get; set; }
        public int id_eva_productiva { get; set; }
        public Nullable<byte> cultivo { get; set; }
        public Nullable<byte> hectarea_produccion { get; set; }
        public Nullable<byte> unidad_medida { get; set; }
        public Nullable<byte> rendimiento { get; set; }
        public Nullable<byte> produccion_esperada { get; set; }
        public Nullable<byte> precio_venta_esperado { get; set; }
        public Nullable<byte> porcentaje_comercializar { get; set; }
        public Nullable<byte> porcentaje_perdida { get; set; }
        public Nullable<byte> porcentaje_autoconsumo { get; set; }
        public Nullable<byte> porcentaje_produccion { get; set; }
        public Nullable<byte> ingresos_venta { get; set; }
    }
}
