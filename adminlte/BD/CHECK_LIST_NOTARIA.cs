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
    
    public partial class CHECK_LIST_NOTARIA
    {
        public int id_check_notaria { get; set; }
        public int id_sucursal { get; set; }
        public int id_cliente { get; set; }
        public Nullable<decimal> monto_desembolso { get; set; }
        public Nullable<int> numero_credito { get; set; }
        public Nullable<System.DateTime> fecha { get; set; }
        public Nullable<bool> info_a { get; set; }
        public Nullable<bool> info_b { get; set; }
        public Nullable<bool> info_c { get; set; }
        public Nullable<bool> indo_d { get; set; }
        public Nullable<bool> info_e { get; set; }
        public Nullable<bool> info_f { get; set; }
        public Nullable<bool> mc1_cliente { get; set; }
        public Nullable<bool> mc1_obligado { get; set; }
        public Nullable<bool> mc1_garantia { get; set; }
        public Nullable<bool> mc2_cliente { get; set; }
        public Nullable<bool> mc2_obligado { get; set; }
        public Nullable<bool> mc2_garantia { get; set; }
        public Nullable<bool> mc3_cliente { get; set; }
        public Nullable<bool> mc3_obligado { get; set; }
        public Nullable<bool> mc3_garantia { get; set; }
        public Nullable<bool> mc4_cliente { get; set; }
        public Nullable<bool> mc4_obligado { get; set; }
        public Nullable<bool> mc4_garantia { get; set; }
        public Nullable<bool> mc5_cliente { get; set; }
        public Nullable<bool> mc5_obligado { get; set; }
        public Nullable<bool> mc5_garantia { get; set; }
        public Nullable<bool> mcb1 { get; set; }
        public Nullable<bool> mcb2 { get; set; }
        public Nullable<bool> mcc1 { get; set; }
        public Nullable<bool> mcc2 { get; set; }
        public Nullable<bool> mcc3 { get; set; }
        public Nullable<bool> mcc4 { get; set; }
        public Nullable<bool> mcc5 { get; set; }
        public Nullable<bool> mcc6 { get; set; }
        public Nullable<bool> mc_c2 { get; set; }
        public Nullable<bool> mce1 { get; set; }
        public Nullable<bool> mce2 { get; set; }
        public Nullable<bool> mce3 { get; set; }
        public Nullable<bool> mce4 { get; set; }
        public Nullable<bool> mce5 { get; set; }
        public Nullable<bool> mce6 { get; set; }
        public string mcf_comentario { get; set; }
        public string entrega_documento_nombre { get; set; }
        public string entrega_documento_fecha_hora { get; set; }
        public Nullable<System.DateTime> mc_valida_fecha_hora { get; set; }
        public string juridico_nombre { get; set; }
        public Nullable<System.DateTime> juridico_fecha_hora { get; set; }
        public string dictamen { get; set; }
        public Nullable<byte> numero_notaria { get; set; }
        public Nullable<System.DateTime> notaria_fecha_hora { get; set; }
        public Nullable<decimal> costo_exacto { get; set; }
        public string nombre_notario { get; set; }
        public string direccion_notario { get; set; }
        public string notario_nombre_firma { get; set; }
        public Nullable<System.DateTime> notario_fecha_hora { get; set; }
        public string notario_mc_firma { get; set; }
        public string ubicacion_inmueble { get; set; }
        public string medida_norta { get; set; }
        public string medida_sur { get; set; }
        public string medida_este { get; set; }
        public string medida_oeste { get; set; }
        public string propietario { get; set; }
        public Nullable<byte> numero_instrumento { get; set; }
        public string volumen { get; set; }
        public Nullable<System.DateTime> fecha_propietario { get; set; }
        public string ciudad_propietario { get; set; }
        public string nombre_licenciado { get; set; }
        public string nombre_cargo { get; set; }
        public string nombre_empresario { get; set; }
    }
}
