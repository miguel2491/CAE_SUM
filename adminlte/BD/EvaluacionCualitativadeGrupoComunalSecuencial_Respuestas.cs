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
    
    public partial class EvaluacionCualitativadeGrupoComunalSecuencial_Respuestas
    {
        public int id { get; set; }
        public int id_EvaluacionCualitativa_pregunta { get; set; }
        public Nullable<int> valor { get; set; }
        public string respuesta { get; set; }
        public Nullable<bool> status { get; set; }
    }
}
