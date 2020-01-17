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
    
    public partial class SOLICITUDES
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public SOLICITUDES()
        {
            this.SOLICITUD_GRUPOS_CREDITO = new HashSet<SOLICITUD_GRUPOS_CREDITO>();
            this.SUPERVISION_CLIENTE = new HashSet<SUPERVISION_CLIENTE>();
        }
    
        public int id_solicitud { get; set; }
        public int id_documento { get; set; }
        public Nullable<int> id_sucursal { get; set; }
        public string sucursal { get; set; }
        public Nullable<int> id_asesor { get; set; }
        public Nullable<int> id_grupo { get; set; }
        public Nullable<int> id_credito { get; set; }
        public string tipo_solicitud { get; set; }
        public string codigo_operacion { get; set; }
        public Nullable<System.DateTime> fecha { get; set; }
        public string tipo_garantia { get; set; }
        public Nullable<byte> nivel_riesgo { get; set; }
        public Nullable<short> secuencia { get; set; }
        public string tipo_transaccion { get; set; }
        public Nullable<decimal> monto_solicitado { get; set; }
        public Nullable<byte> tasa { get; set; }
        public Nullable<short> cuotas { get; set; }
        public Nullable<decimal> fondo_comunal { get; set; }
        public Nullable<byte> frecuencia_pago { get; set; }
        public Nullable<System.DateTime> fecha_desembolso { get; set; }
        public Nullable<byte> tipo_desembolso { get; set; }
        public Nullable<byte> dia_pago { get; set; }
        public Nullable<System.DateTime> primer_fecha_pago { get; set; }
        public string canal_pago { get; set; }
        public string modo_pago { get; set; }
        public Nullable<System.DateTime> fecha_recibe { get; set; }
        public Nullable<byte> saldo_insoluto { get; set; }
        public Nullable<short> monto_operacion_mes { get; set; }
        public Nullable<short> numero_operacion_mes { get; set; }
        public string nombre_aval { get; set; }
        public string nombre_solicitante { get; set; }
        public string nombre_aval2 { get; set; }
        public string nombre_conyuge { get; set; }
        public string especificacion_garantia { get; set; }
        public Nullable<decimal> valor_garantia { get; set; }
        public string cobertura_garantia { get; set; }
        public Nullable<bool> respuesta_manifiesto { get; set; }
        public Nullable<bool> respuesta_accionista { get; set; }
        public Nullable<decimal> subtotal { get; set; }
        public Nullable<decimal> subtotal_autorizado { get; set; }
        public Nullable<decimal> total_autorizado { get; set; }
        public Nullable<decimal> total { get; set; }
        public string observaciones { get; set; }
        public string codigo_analista { get; set; }
        public string producto { get; set; }
        public Nullable<int> seguro_agropecuario { get; set; }
        public string periodicidad { get; set; }
        public string banco { get; set; }
        public string cliente_recomendado { get; set; }
        public string telefono_aval { get; set; }
        public string rfc_contribuyente { get; set; }
        public string fecha_folio1 { get; set; }
        public string fecha_folio2 { get; set; }
        public string fecha_folio3 { get; set; }
        public Nullable<byte> numero_integrantes { get; set; }
        public Nullable<decimal> importe_credito { get; set; }
        public string recomendado_por { get; set; }
        public Nullable<decimal> monto_grupal_sol { get; set; }
    
        public virtual CONTENIDO_CHECK CONTENIDO_CHECK { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SOLICITUD_GRUPOS_CREDITO> SOLICITUD_GRUPOS_CREDITO { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SUPERVISION_CLIENTE> SUPERVISION_CLIENTE { get; set; }
    }
}
