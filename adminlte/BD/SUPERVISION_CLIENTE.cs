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
    
    public partial class SUPERVISION_CLIENTE
    {
        public int id_supervision { get; set; }
        public Nullable<int> id_solicitud { get; set; }
        public Nullable<int> id_cliente { get; set; }
        public Nullable<bool> respuesta1 { get; set; }
        public Nullable<bool> respuesta2 { get; set; }
        public Nullable<bool> respuesta3 { get; set; }
        public Nullable<bool> respuesta4 { get; set; }
        public Nullable<bool> respuesta5 { get; set; }
        public Nullable<bool> respuesta6 { get; set; }
        public Nullable<bool> respuesta7 { get; set; }
    
        public virtual SOLICITUDES SOLICITUDES { get; set; }
    }
}