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
    
    public partial class AdminBitacora
    {
        public int id { get; set; }
        public string id_userCreated { get; set; }
        public Nullable<System.DateTime> created_at { get; set; }
        public string action { get; set; }
        public string comments { get; set; }
    }
}
