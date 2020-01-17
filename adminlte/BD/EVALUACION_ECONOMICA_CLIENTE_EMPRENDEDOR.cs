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
    
    public partial class EVALUACION_ECONOMICA_CLIENTE_EMPRENDEDOR
    {
        public int id_eva_eco_cli_emp { get; set; }
        public int id_documento { get; set; }
        public int id_sucursal { get; set; }
        public int id_cliente { get; set; }
        public int id_asesor { get; set; }
        public int id_grupo { get; set; }
        public string secuencia { get; set; }
        public string evaluacion { get; set; }
        public Nullable<System.DateTime> fecha { get; set; }
        public Nullable<decimal> ingreso_semanal { get; set; }
        public Nullable<decimal> ingreso_mensual { get; set; }
        public Nullable<decimal> ingresos_propios { get; set; }
        public Nullable<decimal> aportaciones_familiares { get; set; }
        public Nullable<decimal> otros_ingresos { get; set; }
        public Nullable<decimal> total_ingresos { get; set; }
        public Nullable<decimal> alimentacion_gastos_familiares { get; set; }
        public Nullable<decimal> educacion_salud { get; set; }
        public Nullable<decimal> transporte_familiar { get; set; }
        public Nullable<decimal> gastos_generales_familia { get; set; }
        public Nullable<decimal> gas { get; set; }
        public Nullable<decimal> renta { get; set; }
        public Nullable<decimal> luz_agua_predial { get; set; }
        public string telefono_fijo_celular { get; set; }
        public Nullable<decimal> total_gastos_familiar { get; set; }
        public Nullable<decimal> tandas { get; set; }
        public Nullable<decimal> activos { get; set; }
        public Nullable<decimal> pasivos { get; set; }
        public Nullable<decimal> otro { get; set; }
        public Nullable<decimal> total_activo { get; set; }
        public Nullable<decimal> total_pasivo { get; set; }
        public string capacidad_pago { get; set; }
        public Nullable<decimal> pago_mensual_microfinanciera { get; set; }
        public Nullable<decimal> cuota_mensual_pagar { get; set; }
        public string capacidad_pago_considerada { get; set; }
        public Nullable<byte> bienes_propios { get; set; }
        public Nullable<byte> numero_hijos_trabajan { get; set; }
        public Nullable<byte> numero_hijos_edad_escolar { get; set; }
        public Nullable<decimal> insumos { get; set; }
        public Nullable<decimal> permisos { get; set; }
        public Nullable<decimal> equipo { get; set; }
        public Nullable<decimal> otros { get; set; }
        public Nullable<decimal> total_destino_inversion { get; set; }
        public Nullable<decimal> monto_solicitado { get; set; }
        public Nullable<decimal> monto_maximo_trabajado { get; set; }
        public string plazo_propuesto_cliente { get; set; }
        public string descripcion_negocio { get; set; }
        public string firma_cliente { get; set; }
        public string firma_asesor { get; set; }
        public Nullable<decimal> efectivo_inicio_activo { get; set; }
        public Nullable<decimal> efectivo_inicio_pasivo { get; set; }
        public Nullable<decimal> ahorro_activo { get; set; }
        public Nullable<decimal> ahorro_pasivo { get; set; }
        public Nullable<decimal> cuentas_paga_activo { get; set; }
        public Nullable<decimal> cuentas_pagar_pasivo { get; set; }
    }
}