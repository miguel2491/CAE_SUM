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
    
    public partial class EVALUACION_ECONOMICA_SIMPLE
    {
        public int id { get; set; }
        public int id_documento { get; set; }
        public int id_sucursal { get; set; }
        public int id_cliente { get; set; }
        public int id_grupo { get; set; }
        public Nullable<System.DateTime> fecha { get; set; }
        public Nullable<byte> secuencia { get; set; }
        public Nullable<decimal> venta_promedio_lunes { get; set; }
        public Nullable<decimal> venta_promedio_martes { get; set; }
        public Nullable<decimal> venta_promedio_miercoles { get; set; }
        public Nullable<decimal> venta_promedio_jueves { get; set; }
        public Nullable<decimal> venta_promedio_viernes { get; set; }
        public Nullable<decimal> venta_promedio_sabado { get; set; }
        public Nullable<decimal> venta_promedio_domingo { get; set; }
        public Nullable<decimal> venta_promedio_semanal { get; set; }
        public Nullable<decimal> venta_promedio_mensual { get; set; }
        public Nullable<decimal> Venta_mensual { get; set; }
        public Nullable<decimal> porcentaje_utilidad_brutas_ventas { get; set; }
        public Nullable<decimal> utilidad_bruta_sobreventas { get; set; }
        public Nullable<decimal> renta_derecho_piso_cooperacion { get; set; }
        public Nullable<decimal> transporte { get; set; }
        public string telefono { get; set; }
        public Nullable<decimal> alimentacion { get; set; }
        public Nullable<decimal> eduacacion_salud { get; set; }
        public Nullable<decimal> trasporte_familiar { get; set; }
        public Nullable<decimal> gastos_grales_familiares { get; set; }
        public Nullable<decimal> gas { get; set; }
        public Nullable<decimal> renta { get; set; }
        public Nullable<decimal> luz_predial { get; set; }
        public Nullable<decimal> telefonia_familiar { get; set; }
        public Nullable<decimal> total_gastos_familiares { get; set; }
        public Nullable<decimal> capacidad_pago { get; set; }
        public Nullable<decimal> pago_mensual_otras_microfinancieras { get; set; }
        public Nullable<decimal> cuota_cliente_pagar_mensual { get; set; }
        public Nullable<decimal> monto_propuesto { get; set; }
        public Nullable<decimal> cuota_cubierta { get; set; }
        public Nullable<decimal> caja_activo { get; set; }
        public Nullable<decimal> caja_pasivo { get; set; }
        public Nullable<decimal> ahorro_bancos_activo { get; set; }
        public Nullable<decimal> ahorro_bancos_pasivo { get; set; }
        public Nullable<decimal> cuentas_pagar_negocio_pasivo { get; set; }
        public Nullable<decimal> cuentas_pagar_negocio_activo { get; set; }
        public Nullable<decimal> inventarios_pasivo { get; set; }
        public Nullable<decimal> inventarios_activo { get; set; }
        public Nullable<decimal> cuentas_pagar_fam_pasivo { get; set; }
        public Nullable<decimal> cuentas_pagar_fam_activo { get; set; }
        public Nullable<decimal> deudas_otras_instituciones_pasivo { get; set; }
        public Nullable<decimal> deudas_otras_instituciones_activo { get; set; }
        public Nullable<decimal> bienes_negocio { get; set; }
        public Nullable<decimal> bienes_propios { get; set; }
        public string otros_ingresos_fuente1 { get; set; }
        public string otros_ingresos_fuente2 { get; set; }
        public string otros_ingresos_fuente3 { get; set; }
        public Nullable<decimal> otros_ingresos_valor1 { get; set; }
        public Nullable<decimal> otros_ingresos_valor2 { get; set; }
        public Nullable<decimal> otros_ingresos_valor3 { get; set; }
        public Nullable<decimal> otros_ingresos_valorTotal { get; set; }
        public Nullable<byte> numero_hijos_trabajan { get; set; }
        public Nullable<byte> Numero_hijos_edad_escolar { get; set; }
        public Nullable<decimal> monto_solicitado_cliente { get; set; }
        public Nullable<decimal> monto_maximo_trabajado { get; set; }
        public Nullable<decimal> plazo_propuesto_cliente { get; set; }
        public string comentarios_observaciones_adicionales_asesor { get; set; }
        public string nombre_firma_asesor { get; set; }
        public string firma_cliente { get; set; }
        public Nullable<decimal> tandas { get; set; }
    }
}