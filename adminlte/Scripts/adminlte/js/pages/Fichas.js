
function updateCliMoral(id) {
    var data = {
        id: id,
    }
    $.ajax({
        type: "POST",
        url: "/Fichas/showClientesMoral",
        dataType: "json",
        data: data,
        success: function (data) {
            window.location.href = data.redirectToUrl;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}

function pdfMoral(id) {
    var data = {
        id: id,
    }
    $.ajax({
        type: "POST",
        url: "/Fichas/PdfMoral",
        dataType: "json",
        data: data,
        success: function (data) {
            window.location.href = data.redirectToUrl;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}

function addFichaClienteReal() {
    var data = {
        tipo_check: $('#tipo_check option:selected').val() == undefined ? '0' : $('#tipo_check option:selected').val(),
        codcli: $("#codcli").val(),
        fecha_levantamiento: $("#fecha_lev").val(),
        nombre_cliente: $("#nombre_cli").val(),
        app_cliente: $("#app_cli").val(),
        apm_cliente: $("#apm_cli").val(),
        clave_elector: $("#clave_elector").val(),
        curp: $("#curp").val(),
        rfc: $("#rfc").val(),
        numero_serie_fiel: $("#numero_serie").val(),
        nacionalidad: $("#nacionalidad").val(),
        pais_nacimiento: $("#pais_nac").val(),
        estado_nacimiento: $("#estado_nac").val(),
        fecha_nacimiento: $("#fecha_nac").val(),
        sexo: $('#sexo option:selected').val() == undefined ? '0' : $('#sexo option:selected').val(),
        estado_civil: $('#edo_civil option:selected').val() == undefined ? '0' : $('#edo_civil option:selected').val(),
        deps_economicos: $("#deps_eco").val(),
        ann_estudio: $("#ann_estudio").val(),
        escolaridad: $('#escolaridad option:selected').val() == undefined ? '0' : $('#escolaridad option:selected').val(),
        referencia_loc: $("#referencia_loc").val(),
        telefono_fijo: $("#tel_fijo").val(),
        tipo_casa: $('#casa option:selected').val() == undefined ? '0' : $('#casa option:selected').val(),
        nombre_adicional: $("#nombre_pareja").val(),
        app_adicional: $("#app_pareja").val(),
        apm_adicional: $("#apm_pareja").val(),
        fecha_nacimiento_adicional: $("#fecha_nac_pareja").val(),
        conocido_por: $("#conocido_pareja").val(),
        estado_nacimiento_adicional: $("#edo_nac_pareja").val(),
        ocupacion_adicional: $("#actividad_pareja").val(),
        lugar_trabajo_adicional: $("#lugar_trabajo_pareja").val(),
        clave_elector_adicional: $("#clave_elec_pareja").val(),
        escolaridad_adicional: $('#escolaridad_pareja option:selected').val() == undefined ? '0' : $('#escolaridad_pareja option:selected').val(),
        ann_estudio_adicional: $("#ann_estudio_pareja").val(),
        actividad_e: $("#actividad").val(),
        negocio: $("#negocio").val(),
        sector: $('#sector option:selected').val() == undefined ? '0' : $('#sector option:selected').val(),
        ano_oficio: $("#ann_oficio").val(),
        ano_negocio: $("#ann_negocio").val(),
        tipo_negocio: $('#tipo_negocio option:selected').val() == undefined ? '0' : $('#tipo_negocio option:selected').val(),
        referencia_localizacion: $("#ref_loc_acti").val(),
        ubicacion_negocio: $("#ubic_negocio_acti").val(),
        telefono_negocio: $("#tel_acti").val(),
        tipo_local: $('#local_acti option:selected').val() == undefined ? '0' : $('#local_acti option:selected').val(),
        numero_trabajadores: $("#num_trabajadores").val(),
        dias_trabajo: $('#dias_trabaja').val(),
        dias_descanso: $('#dias_descansa').val(),
        horario: $("#hra_entrada").val() + "/" + $("#hra_salida").val(),
        otros_ingresos: $('input:checkbox[name=otro_ingreso]:checked').val() == 1 ? true : false,
        av_acceso: $("#av_acceso").val(),
        lineas_transporte: $("#lineas_transporte").val(),
        calles_principales: $("#calles_principales").val(),
        tiempo_aprox: $("#tiempo_aprox").val(),
        lat_negocio: $("#latNeg").val(),
        lon_negocio: $("#lonNeg").val(),
        lat_domicilio: $("#latDom").val(),
        lon_domicilio: $("#lonDom").val(),
        respuesta_accionista: $('input:checkbox[name=accionista]:checked').val() == 1 ? true : false,
        respuesta_manifiesto: $('input:checkbox[name=relacion_pare]:checked').val() == 1 ? true : false,
        tipo_documento:"FPDC.AE-044"
    };
    
    $.ajax({
        type: "POST",
        url: "/Fichas/InsertClienteReal",
        dataType: "json",
        data: data,
        success: function (response) {
            $.toast({
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, consequuntur doloremque eveniet eius eaque dicta repudiandae illo ullam. Minima itaque sint magnam dolorum asperiores repudiandae dignissimos expedita, voluptatum vitae velit.",
                hideAfter: false
            })
            for (var r = 0; r < 2;r++){
            /*AGREGAR DIRECCIONES*/
                if (r == 0) {
                    var dataD = {
                        id_documento: response,
                        municipio_id: $('#municipio option:selected').val() == undefined ? '0' : $('#municipio option:selected').val(),
                        cp_id: $('#cp option:selected').val() == undefined ? '0' : $('#cp option:selected').val(),
                        calle: $("#calle").val(),
                        numero: $("#numero_calle").val(),
                        referencias: $("#referencia_loc").val(),
                    };
                } else {
                    var dataD = {
                        id_documento: response,
                        municipio_id: $('#muni_acti option:selected').val() == undefined ? '0' : $('#muni_acti option:selected').val(),
                        cp_id: $('#cp_acti option:selected').val() == undefined ? '0' : $('#cp_acti option:selected').val(),
                        colonia_id: $('#colonia_acti option:selected').val() == undefined ? '0' : $('#colonia_acti option:selected').val(),
                        calle: $("#calle_acti").val(),
                        numero: $("#numero_acti").val(),
                    };
                }
                $.ajax({
                    type: "POST",
                    url: "/Fichas/InsertDirecciones",
                    dataType: "json",
                    data: dataD,
                    success: function (response) {
                        $.toast({
                            text: "ADD DIRECTION",
                            hideAfter: false
                        })
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert("Status: " + textStatus); alert("Error: " + errorThrown);
                    }
                });
                /**/
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    });
}

function addFichaClienteMoral() {
    var dias = $("#dias_trabaja").val();
    var desca = $("#dias_descansa").val();
    var dia = "";
    var des = "";
    for(var a = 0; a < dias.length; a++) {
        dia += "|*|"+dias[a];
    }
    for (var b = 0; b < desca.length; b++) {
        des += "|*|" + des[b];
    }
    var data = {
        id_documento: $('#tipo_check option:selected').val() == undefined ? '0' : $('#tipo_check option:selected').val(),
        id_cliente: $('#cliente option:selected').val() == undefined ? '0' : $('#cliente option:selected').val(),
        fecha_levantamiento: $("#fecha_lev").val(),
        nombre_cliente: $("#nombre_razon_cli").val(),
        nombre_comercial: $("#nombre_comercial").val(),
        rfc: $("#rfc").val(),
        fecha_constitucion: $("#fecha_const").val(),
        nacionalidad: $("#nacionalidad").val(),
        numero_serie_fiel: $("#numero_serie").val(),
        telefono_fijo: $("#tel_fijo").val(),
        tipo_casa: $('#inmueble option:selected').val() == undefined ? '0' : $('#casa option:selected').val(),
        nombre_adicional: $("#nombre_representante").val(),
        app_adicional: $("#app_representante").val(),
        apm_adicional: $("#apm_representante").val(),
        fecha_nacimiento_adicional: $("#fecha_nac_representante").val(),
        rol_cliente: $("#roles_cliente").val(),
        respuesta_accionista: $('input:checkbox[name=accionista_res]:checked').val() == 1 ? 1 : 0,
        porcentaje_accionista: $("#porcentaje_accionista").val(),
        actividad_e: $("#actividad_giro").val(),
        negocio: $("#negocio").val(),
        sector: $('#sector option:selected').val() == undefined ? '0' : $('#sector option:selected').val(),
        antiguedad_domicilio: $("#ann_domicilio_actual").val(),
        antiguedad_actividad: $("#antiguedad_actividad").val(),
        dias_trabajo: dia,
        dias_descanso: des,
        horario: $("#hra_entrada").val() + "/" + $("#hra_salida").val(),
        otros_ingresos: $('input:checkbox[name=otro_ingreso]:checked').val() == 1 ? 1 : 0,
        numero_trabajadores: $("#no_trabajadores").val(),
        cuenta_sucursales: $('#res_sucursales option:selected').val() == undefined ? '0' : $('#res_sucursales option:selected').val(),
        avenida_acceso: $("#av_acceso").val(),
        lineas_transporte: $("#lineas_transporte").val(),
        calles_principales: $("#calles_principales").val(),
        tiempo_aprox: $("#tiempo_aprox").val(),
        lat_negocio: $("#latNeg").val(),
        lon_negocio: $("#lonNeg").val(),
        lat_domicilio: $("#latDom").val(),
        lon_domicilio: $("#lonDom").val(),
        nombre_beneficiario: $("#nombre_bene").val(),
        app_beneficiario: $("#app_bene").val(),
        apm_beneficiario: $("#apm_bene").val(),
        fecha_nacimiento_beneficiario: $("#fecha_nac_bene").val(),
        sexo_beneficiario: $('input:checkbox[name=res_sexo_bene]:checked').val(),
        parentesco_beneficiario: $("#parentesco_bene").val(),
        participacion_beneficiario: $("#participacion_bene").val(),
        respuesta_manifiesto2: $('input:checkbox[name=accionista]:checked').val() == 1 ? 1 : 0,
        respuesta_manifiesto3: $('input:checkbox[name=relacion_pare]:checked').val() == 1 ? 1 : 0,
        nombre_tercero: $("#nombre_tercero").val(),
        app_tercero: $("#app_tercero").val(),
        apm_tercero: $("#apm_tercero").val(),
        redes_sociales2: $("#red_social").val(),
        medio_enterado: $("#modo_enterado").val(),
        tipo_documento: "FPDC.AE-029"
    };

    $.ajax({
        type: "POST",
        url: "/Fichas/InsertClienteMoral",
        dataType: "json",
        data: data,
        success: function (response) {
            $.toast({
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, consequuntur doloremque eveniet eius eaque dicta repudiandae illo ullam. Minima itaque sint magnam dolorum asperiores repudiandae dignissimos expedita, voluptatum vitae velit.",
                hideAfter: false
            })
            
            for (var r = 0; r < 2; r++) {
                /*AGREGAR DIRECCIONES*/
                if (r == 0) {
                    var dataD = {
                        id_documento: response.id,
                        municipio_id: $('#municipio_fiscal option:selected').val() == undefined ? '0' : $('#municipio_fiscal option:selected').val(),
                        cp_id: $('#cp_fiscal option:selected').val() == undefined ? '0' : $('#cp_fiscal option:selected').val(),
                        calle: $("#calle_fiscal").val(),
                        numero: $("#numero_calle_fiscal").val(),
                        referencias: $("#referencia_loc").val(),
                        tipo: "Fiscal",
                    };
                } else {
                    var dataD = {
                        id_documento: response.id,
                        municipio_id: $('#municipio_benef option:selected').val() == undefined ? '0' : $('#municipio_benef option:selected').val(),
                        cp_id: $('#codigo_postal_benef option:selected').val() == undefined ? '0' : $('#codigo_postal_benef option:selected').val(),
                        colonia_id: $('#colonia_benef option:selected').val() == undefined ? '0' : $('#colonia_benef option:selected').val(),
                        calle: $("#calle_beneficiario").val(),
                        numero: $("#numero_beneficiario").val(),
                        tipo: "Beneficiario ",
                    };
                }
                $.ajax({
                    type: "POST",
                    url: "/Fichas/InsertDirecciones",
                    dataType: "json",
                    data: dataD,
                    success: function (response) {
                        $.toast({
                            text: "ADD DIRECTION",
                            hideAfter: false
                        })
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert("Status: " + textStatus); alert("Error: " + errorThrown);
                    }
                });
                /**/
            }
            window.location.href = response.redirectToUrl;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    });
}

function addFichaCliente() {
    var dias = $("#dias_trabaja").val();
    var desca = $("#dias_descansa").val();
    var dia = "";
    var des = "";
    for (var a = 0; a < dias.length; a++) {
        dia += "|*|" + dias[a];
    }
    for (var b = 0; b < desca.length; b++) {
        des += "|*|" + des[b];
    }
    var data = {
        id_documento: $('#tipo_check option:selected').val() == undefined ? '0' : $('#tipo_check option:selected').val(),
        id_cliente: $("#codcli").val(),
        fecha_levantamiento: $("#fecha_lev").val(),
        nombre_cliente: $("#nombre_cli").val(),
        app_cliente: $("#app_cli").val(),
        apm_cliente: $("#apm_cli").val(),
        clave_elector: $("#clave_elector").val(),
        rfc: $("#rfc").val(),
        curp: $("#curp").val(),
        numero_serie_fiel: $("#numero_serie").val(),
        conocido_por: $("#conocido_cliente").val(),
        nacionalidad: $("#nacionalidad").val(),
        pais_nacimiento: $("#pais_nac").val(),
        estado_nacimiento: $("#estado_nac").val(),
        fecha_nacimiento: $("#fecha_nac").val(),
        sexo: $('#sexo option:selected').val() == undefined ? '0' : $('#sexo option:selected').val(),
        estado_civil: $('#edo_civil option:selected').val() == undefined ? '0' : $('#edo_civil option:selected').val(),
        deps_economicos: $("#deps_eco").val(),
        escolaridad: $('#escolaridad_cliente option:selected').val() == undefined ? '0' : $('#escolaridad_cliente option:selected').val(),
        ann_estudio: $("#ann_estudio_cliente").val(),
        profesion: $("#profesion_cliente").val(),
        ocupacion: $("#ocupacion_cliente").val(),
        lenguaje: $('input:checkbox[name=lengua]:checked').val() == 1 ? $("#otra_lengua").val() : 'NA',
        rol_cliente: $("#rol_hogar").val(),
        discapacidad: $('input:checkbox[name=discapacidad]:checked').val() == 1 ? true : false,
        uso_internet: $('input:checkbox[name=uso_internet]:checked').val() == 1 ? true : false,
        redes_sociales: $('input:checkbox[name=redes]:checked').val() == 1 ? $("#otras_redes").val() : 'NA',
        correo_electronico: $("#correo_elec").val(),
        apoyo_social: $('input:checkbox[name=apoyo_social]:checked').val() == 1 ? true : false,
        codigo_familia: $("#codigo_familia").val(),
        nombre_adicional: $("#nombre_pareja").val(),
        app_adicional: $("#app_pareja").val(),
        apm_adicional: $("#apm_pareja").val(),
        fecha_nacimiento_adicional: $("#fecha_nac_pareja").val(),
        conocido_pareja:$("#conocido_pareja").val(),
        estado_nacimiento_adicional: $('#edo_nac_pareja option:selected').val() == undefined ? '0' : $('#edo_nac_pareja option:selected').val(),
        ocupacion_adicional: $("#actividad_pareja").val(),
        lugar_trabajo_adicional: $("#lugar_trabajo_pareja").val(),
        clave_elector_adicional: $("#clave_elec_pareja").val(),
        escolaridad_adicional: $("#escolaridad_pareja").val(),
        ann_estudio_adicional: $("#ann_estudio_pareja").val(),
        //DATOS DEL DOMICILIO DEL CLIENTE Y PAREJA
        referencia_localizacion_adicional: $("#referencia_loc_adicional").val(),
        tipo_casa_adicional: $("#casa_adicional").val(),
        telefono_adicional: $("#tel_fijo_adicional").val(),
        actividad_e: $("#actividad_economica").val(),
        negocio: $("#negocio_economica").val(),
        sector: $('#sector_economica option:selected').val() == undefined ? '0' : $('#sector_economica option:selected').val(),
        ano_oficio: $("#ann_oficio").val(),
        antiguedad_actividad: $("#ann_negocio").val(),
        tipo_negocio: $('#tipo_negocio option:selected').val() == undefined ? '0' : $('#tipo_negocio option:selected').val(),
        referencia_localizacion_actividad: $("#ref_loc_acti").val(),
        //DATOS ACTIVIDAD ECONOMICA DIRECCION
        ubicacion_negocio: $("#ubic_negocio_acti").val(),
        telefono_negocio: $("#tel_acti").val(),
        tipo_local: $("#local_acti option:selected").val() == undefined ? '0' : $('#local_acti option:selected').val(),
        numero_trabajadores: $("#num_trabajadores").val(),
        dias_trabajo: dia,
        dias_descanso: des,
        horario: $("#hra_entrada").val() + " | " + $("#hra_salida").val(),
        otros_ingresos: $('input:checkbox[name=otro_ingreso]:checked').val() == 1 ? 'Si' : 'No',
        lat_negocio: $("#latNeg").val(),
        lon_negocio: $("#lonNeg").val(),
        respuesta_croquis1: $('input:checkbox[name=cargo_publico]:checked').val() == 1 ? true : false,
        respuesta_croquis2: $('input:checkbox[name=cargo_publico_extra]:checked').val() == 1 ? true : false,
        nombre_beneficiario: $("#nombre_bene").val(),
        app_beneficiario: $("#app_bene").val(),
        apm_beneficiario: $("#apm_bene").val(),
        fecha_nacimiento_beneficiario: $("#fca_nac_bene").val(),
        sexo_beneficiario: $('input:checkbox[name=sexo_bene]:checked').val(),//== 1 ? true:false,
        parentesco_beneficiario: $("#parentesco_bene").val(),
        participacion_beneficiario: $("#participacion_bene").val(),
        referencia_localizacion_bene: $("#referencia_loc_bene").val(),
        casa_beneficiario: $("#casa_bene option:selected").val() == undefined ? '0' : $('#casa_bene option:selected').val(),
        telefono_bene: $("#tel_fijo_bene").val(),
        respuesta_manifiesto: $('input:checkbox[name=accionista]:checked').val() == 1 ? true : false,
        respuesta_accionista: $('input:checkbox[name=relacion_pare]:checked').val() == 1 ? true : false,
        respuesta_manifiesto2: $('input:checkbox[name=manifiesto_actuo]:checked').val() == 1 ? true : false,
        respuesta_manifiesto3: $('input:checkbox[name=actuo_tercero]:checked').val() == 1 ? true : false,
        tipo_documento: "FPDC.AE-002.1"
    };
    console.log(data);
        $.ajax({
            type: "POST",
            url: "/Fichas/InsertCliente",
            dataType: "json",
            data: data,
            success: function (response) {
                for (var r = 0; r < 3; r++) {
                    /*AGREGAR DIRECCIONES*/
                    if (r == 0) {
                        var dataD = {
                            id_documento: response,
                            calle: $("#calle").val(),
                            numero: $("#numero_calle").val(),
                            pais_id: $("#pais").val(),
                            colonia_id: $("#colonia_cliente option:selected").val() == undefined ? '0' : $('#colonia_cliente option:selected').val(),
                            municipio_id: $('#municipio option:selected').val() == undefined ? '0' : $('#municipio option:selected').val(),
                            ciudad_id: $('#ciudad option:selected').val() == undefined ? '0' : $('#ciudad option:selected').val(),
                            estado_id: $('#estado option:selected').val() == undefined ? '0' : $('#estado option:selected').val(),
                            cp_id: $('#cp option:selected').val() == undefined ? '0' : $('#cp option:selected').val(),
                            referencias: $("#referencia_loc_adicional").val(),
                            localidad:$("#localidad").val(),
                            tipo: "Cliente Pareja",
                        };
                    } else {
                        var dataD = {
                            id_documento: response,
                            calle: $("#calle_bene").val(),
                            numero: $("#numero_calle_bene").val(),
                            pais_id: "",
                            colonia_id : $("#colonia_bene option:selected").val() == undefined ? '0' : $('#colonia option:selected').val(),
                            municipio_id: $('#municipio_bene option:selected').val() == undefined ? '0' : $('#municipio_bene option:selected').val(),
                            ciudad_id: "",
                            estado_id: "",
                            cp_id: $('#cp_bene option:selected').val() == undefined ? '0' : $('#cp_bene option:selected').val(),
                            referencias: $("#referencia_loc_bene").val(),
                            localidad: "",
                            tipo: "Datos Domicilio",
                        };
                    }
                    console.log(dataD);
                    $.ajax({
                        type: "POST",
                        url: "/Fichas/InsertDireccion",
                        dataType: "json",
                        data: dataD,
                        success: function (response) {
                            $.toast({
                                text: "ADD DIRECTION",
                                hideAfter: false
                            })
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                            alert("Status: " + textStatus); alert("Error: " + errorThrown);
                        }
                    });
                    /**/
                }

                for (var i = 0; i < referencias_cliente.length; i++) {
                    var data3 = {
                        id_ficha: response,
                        tipo_referencia:"",
                        nombre: referencias_cliente[i].nombre,
                        app: referencias_cliente[i].app,
                        apm: referencias_cliente[i].apm,
                        calle: referencias_cliente[i].calle_ref,
                        numero: referencias_cliente[i].numero_calle_ref,
                        colonia: referencias_cliente[i].colonia_ref,
                        relacion: referencias_cliente[i].relacion,
                        telefono: referencias_cliente[i].telefono,
                        pais_ref: referencias_cliente[i].pais_ref,
                        estado_ref: referencias_cliente[i].estado_ref,
                        tiempo_conocer: referencias_cliente[i].tiempo_conocer,
                        status:true
                    };
                    $.ajax({
                        type: "POST",
                        url: "/Fichas/InsertReferencias",
                        dataType: "json",
                        data: data,
                        success: function (response) {
                            console.log("->"+response);
                        }
                    });
                }
            }
        });
}