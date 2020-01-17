
function ListaAnexos() {
    $.ajax({
        type: "GET",
        url: "/Solicitudes/GetListAnexo",
        dataType: "json",
        success: function (data) {
            var s = '';
            for (var i = 0; i < data.length; i++) {
                var bttnDocs = '<button class="btn btn-primary btn-xs" id="bttn_modal_docs" data-id="' + data[i].id + '" data-target="#modal_docs"  data-toggle="modal" title="Generar Reporte"><i class="glyphicon glyphicon-book"></i></button>';
                var bttnDelete = '<button class="btn btn-danger btn-xs" id="bttn_modal_delete" data-id="' + data[i].id + '" data-target="#modal_delete"  data-toggle="modal" title="Eliminar"><i class="glyphicon glyphicon-trash"></i></button>';
                var bttnUpdate = '<button class="btn btn-warning btn-xs" id="bttn_modal_update"  data-id="' + data[i].id + '"  data-target="#ModalSave" data-toggle="modal" title="Editar"><i class="glyphicon glyphicon-edit"></i></button> ';
                s += '<tr><td>' + data[i].id + '</td><td>' + data[i].sucursal + '</td><td>' + data[i].cliente + '</td><td>GRUPO</td><td>' + data[i].fecha + '</td><td>' + bttnDocs + ' ' + bttnUpdate + ' ' + bttnDelete + '</td></tr>';
            }
            $("#table_body").append(s);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
    $('#example2').DataTable({
        'paging': true,
        'lengthChange': false,
        'searching': false,
        'ordering': true,
        'info': true,
        'autoWidth': false
    })
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}

function addProductoAgrosumate() {
    var codigo_operacion = $("#codigo_operacion").val();
    var id_sucursal = $('#sucursal option:selected').val() == undefined ? '0' : $('#sucursal option:selected').val();
    var sucursal = $('#sucursal option:selected').text() == undefined ? '0' : $('#sucursal option:selected').text();
    var fecha = $("#fecha").val();
    var secuencia = $("#secuencia").val();
    var codigo_analista_agropecuario = $("#codigo_analista_agropecuario").val();
    var nombre_analista_agropecuario = $("#nombre_analista_agropecuario").val();
    var tipo_producto = $("#tipo_producto").val();
    var nombre_solicitante = $("#nombre_solicitante").val();
    var nombre_aval = $("#nombre_aval").val();
    var credito_solicitado = $("#credito_solicitado").val();
    var seguro_agropecuario = $("#seguro_agropecuario").val();
    var saldo_insoluto = $("#saldo_insoluto").val();
    var numero_cuotas = $("#numero_cuotas").val();
    var periodicidad = $("#periodicidad").val();
    var recibo_dia = $("#recibo_dia").val();
    var tipo_transaccional = $('#tipo_transaccional option:selected').val() == undefined ? '0' : $('#tipo_transaccional option:selected').val();
    var nivel_riesgo = $('#nivel_riesgo option:selected').val() == undefined ? '0' : $('#nivel_riesgo option:selected').val();
    var modo_pago = $('#modo_pago option:selected').val() == undefined ? '0' : $('#modo_pago option:selected').val();
    var operaciones_realizadas_mes = $("#operaciones_realizadas_mes").val();
    var monto_operaciones_mes = $("#monto_operaciones_mes").val();
    var canal_pago = $('#canal_pago option:selected').val() == undefined ? '0' : $('#canal_pago option:selected').val();
    var banco = $("#banco").val();
    var tipo_garantia = $('#tipo_garantia option:selected').val() == undefined ? '0' : $('#tipo_garantia option:selected').val();
    var especifica_garantia = $("#especifica_garantia").val();
    var valor_estimado = $("#valor_estimado").val();
    var cobertura_garantia = $("#cobertura_garantia").val();
    var accionista = $('input:checkbox[name=accionista]:checked').val() == undefined ? false : true;
    var cliente_recomendado = $("#cliente_recomendado").val();
    var tipo_solicitud = $("#tipo_solicitud").val();
    var data = {
        id_documento: 4,
        id_sucursal: parseInt(id_sucursal),
        sucursal: sucursal,
        tipo_solicitud: tipo_solicitud,
        codigo_operacion: codigo_operacion,
        fecha: fecha,
        tipo_garantia: tipo_garantia,
        nivel_riesgo: nivel_riesgo,
        secuencia: secuencia,
        tipo_transaccion: tipo_transaccional,
        monto_solicitado: credito_solicitado,
        tasa: saldo_insoluto,
        cuotas: parseInt(numero_cuotas),
        dia_pago: parseInt(recibo_dia),
        codigo_analista: codigo_analista_agropecuario,
        nombre_solicitante: nombre_solicitante,
        nombre_aval: nombre_aval,
        producto: tipo_producto,
        seguro_agropecuario: seguro_agropecuario,
        periodicidad: periodicidad,
        modo_pago: modo_pago,
        monto_operaciones_mes: monto_operaciones_mes,
        numero_operaciones_mes: parseInt(operaciones_realizadas_mes),
        canal_pago: canal_pago,
        banco: banco,
        especificacion_garantia: especifica_garantia,
        valor_garantia: valor_estimado,
        cobertura_garantia: cobertura_garantia,
        respuesta_manifiesto:accionista,
        cliente_recomendado: cliente_recomendado
    }
    $.ajax({
        type: "POST",
        url: "/Solicitudes/InsertPAgrosumate",
        dataType: "json",
        data: data,
        success: function (response) {
            console.log(response);
            window.location.href = response.redirectToUrl;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    });
}

function editPA(i) {
    var data = {
        id: i,
    }
    $.ajax({
        type: "POST",
        url: "/Solicitudes/v_editPA",
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

function addAnexo() {
    var sucursal = $('#sucursal option:selected').val() == undefined ? '0' : $('#sucursal option:selected').val();
    var cliente = $('#cliente option:selected').val() == undefined ? '0' : $('#cliente option:selected').val();
    var grupo = $('#grupo option:selected').val() == undefined ? '0' : $('#grupo option:selected').val();
    var fecha = $('#fecha').val();
    var res1 = $('#res1').val();
    var res2 = $('#res2').val();
    var res3 = $('#res3').val();
    var res4 = $('#res4').val();
    var res5 = $('#res5').val();
    var res6 = $('#res6').val();
    var res7 = $('#res7').val();
    var res8 = $('#res8').val();
    var res9 = $('#res9').val();
    var res10 = $('#res10').val();
    var res11 = $('#res11').val();
    var res12 = $('#res12').val();
    var res13 = $('#res13').val();
    var tipo_carta = $('#tipo_solicitud').val();
    var data = {
        id_sucursal: sucursal,
        id_cliente: cliente,
        id_asesor: grupo,
        fecha: fecha,
        respuesta1: res1,
        respuesta2:res2,
        respuesta3:res3,
        respuesta4:res4,
        respuesta5: res5,
        respuesta6:res6,
        respuesta7:res7,
        respuesta8:res8,
        respuesta9:res9,
        respuesta10:res10,
        respuesta11:res11,
        respuesta12: res12,
        respuesta13: res13,
        tipo_carta: tipo_carta
    }
    $.ajax({
        type: "POST",
        url: "/Solicitudes/InsertAnexoAF",
        dataType: "json",
        data: data,
        success: function (response) {
            console.log(response);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    });
}

function ListaPyme() {
    $.ajax({
        type: "GET",
        url: "/Solicitudes/ListaPyme",
        dataType: "json",
        success: function (data) {
            var s = '';
            for (var i = 0; i < data.length; i++) {
                var riesgo = "";
                var nr = data[i].nivel_riesgo;
                switch (nr) {
                    case "1":
                        riesgo = "Alto";
                        break;
                    case "2":
                        riesgo = "Medio";
                        break;
                    case "3":
                        riesgo = "Alto";
                        break;
                }
                var bttnDocs = '<button class="btn btn-primary btn-xs" id="bttn_modal_docs" data-id="' + data[i].id + '" data-target="#modal_docs"  data-toggle="modal" title="Generar Reporte"><i class="glyphicon glyphicon-book"></i></button>';
                var bttnDelete = '<button class="btn btn-danger btn-xs" id="bttn_modal_delete" data-id="' + data[i].id + '" data-target="#modal_delete"  data-toggle="modal" title="Eliminar"><i class="glyphicon glyphicon-trash"></i></button>';
                var bttnUpdate = '<button class="btn btn-warning btn-xs" id="bttn_modal_update"  data-id="' + data[i].id + '"  data-target="#ModalSave" data-toggle="modal" title="Editar"><i class="glyphicon glyphicon-edit"></i></button> ';
                s += '<tr><td>' + data[i].id + '</td><td>' + data[i].codigo_operacion + '</td><td>' + data[i].sucursal + '</td><td>' + riesgo + '</td><td>' + data[i].fecha + '</td><td>' + bttnDocs + ' ' + bttnUpdate + ' ' + bttnDelete + '</td></tr>';
            }
            $("#table_body").append(s);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
    $('#example2').DataTable({
        'paging': true,
        'lengthChange': false,
        'searching': false,
        'ordering': true,
        'info': true,
        'autoWidth': false
    })
}

function addActaIntegracion() {
    var fecha = $("#fecha").val();
    fecha = fecha.split("-");
    var dia = fecha[2];
    var mes = fecha[1];
    var ann = fecha[0];
    var data = {
        id_check_list: $('#tipo_check option:selected').val() == undefined ? '0' : $('#tipo_check option:selected').val(),
        id_grupo: $('#grupoC').val(),
        hrs: $('#hora').val(),
        dia: dia,
        mes: mes,
        anio: ann,
        id_presidenta: $('#presidenta option:selected').val() == undefined ? '0' : $('#presidenta option:selected').val(),
        id_tesorera: $('#tesorera option:selected').val() == undefined ? '0' : $('#tesorera option:selected').val(),
        id_secretaria: $('#secretaria option:selected').val() == undefined ? '0' : $('#secretaria option:selected').val(),
        observaciones: $('#observaciones').val(),
        cantidad_representada: $('#monto').val(),
        porcentaje: $('#porcentaje').val(),
        aportacion_semanal: $('#aportacion_semanal').val(),
        dia_reunion: $('#dias_reunion').val(),
        hora_reunion: $('#hrs_reunion').val(),
        lugar: $('#casa_reunion').val(),
        cargo_duenio_lugar: $('#cargo_reunion').val(),
        minutos_castigo: $('#minutos_tolerancia').val(),
        multa_retardo: $('#multa').val(),
        multa_inasistencia: $('#multa_inasistencia').val()
    }
    $.ajax({
        type: "POST",
        url: "/Solicitudes/InsertActaIntegracion",
        dataType: "json",
        data: data,
        success: function (response) {
            $.toast({
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, consequuntur doloremque eveniet eius eaque dicta repudiandae illo ullam. Minima itaque sint magnam dolorum asperiores repudiandae dignissimos expedita, voluptatum vitae velit.",
                hideAfter: false
            })
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    });
}

function addSupervision() {
    var cgcod = $('input:radio[name=r3]:checked').val();
    var codgp = $('#tipo_grupo option:selected').val() == undefined ? '0' : $('#tipo_grupo option:selected').val();
    var codcl = $('#tipo_cliente option:selected').val() == undefined ? '0' : $('#tipo_cliente option:selected').val();
    var cp = 0;
    var cc = cgcod == 1 ? codcl : codgp;
    var data = {
        id_documento: $('#tipo_check option:selected').val() == undefined ? '0' : $('#tipo_check option:selected').val(),
        tipo_solicitud: $("#tipo_documento").val(),
        id_asesor: $('#tipo_check option:selected').val() == undefined ? '0' : $('#tipo_check option:selected').val(),
        id_grupo: cc,
        fecha: $("#fecha").val(),
        codgc: $("#codigocg").val(),
        secuencia: $("#secuencia").val(),
        num_inte: $("#num_inte").val(),
        importe_credito: parseFloat($("#importe_credito").val()),
        sucursal: $("#sucursal").val()
    }
    $.ajax({
        type: "POST",
        url: "/Solicitudes/InsertSupervisionC",
        dataType: "json",
        data: data,
        success: function (response) {
            var id = response;
            console.log(id);
            var lonsup = supervisiones.length;
            for (var j = 0; j < lonsup; j++) {
                var data2 = {
                    "id_solicitud": id,
                    "id_cliente": supervisiones[j].nombre,
                    "respuesta1": supervisiones[j].res1,
                    "respuesta2": supervisiones[j].res2,
                    "respuesta3": supervisiones[j].res3,
                    "respuesta4": supervisiones[j].res4,
                    "respuesta5": supervisiones[j].res5,
                    "respuesta6": supervisiones[j].res6,
                    "respuesta7": supervisiones[j].res7
                };
                console.log(data2);
                $.ajax({
                    type: "POST",
                    url: "/Solicitudes/InsertSupervisiones",
                    dataType: "json",
                    data: data2,
                    success: function (response) {
                        console.log(response);
                        cp = cp + 1;
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert("Status: " + textStatus); alert("Error: " + errorThrown);
                    }
                });
            }  
            $.toast({
                text: "Se inserto correctamente " + cp,
                hideAfter: true
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    });
    
}

function addCreditoSol()
{
    var banco = $('#canal_pagoS option:selected').val() == "5" ? $('#bancoS').val() : '';
    var data = {
        "id_documento": $('#tipo_check option:selected').val() == undefined ? '0' : $('#tipo_check option:selected').val(),
        "id_sucursal": $('#sucursal option:selected').val() == undefined ? '0' : $('#sucursal option:selected').val(),
        "id_asesor": $('#asesor option:selected').val() == undefined ? '0' : $('#asesor option:selected').val(),
        "id_grupo": $('#grupoS option:selected').val() == undefined ? '0' : $('#grupoS option:selected').val(),
        "fecha": $("#fecha").val(),
        "codigo_operacion": $("#codigo_opera").val(),
        "tipo_garantia": $('#tipo_garantia option:selected').text() == undefined ? '0' : $('#tipo_garantia option:selected').text(),
        "secuencia": $("#secuencia_cb").val(),
        "recomendado_por": $("#grupo_recomendado").val(),
        "monto_solicitado": parseFloat($("#monto_solicitado").val()),
        "saldo_insoluto": $("#saldo_insoluto").val(),
        "cuotas": $("#cuotas").val(),
        "fecha_recibe": $("#fecha_recibo").val(),
        "primer_fecha_pago": $("#fecha_pago").val(),
        "dia_pago": $('#dia_pago option:selected').val() == undefined ? '0' : $('#dia_pago option:selected').val(),
        "canal_pago": $('#canal_pagoS option:selected').val() == undefined ? '0' : $('#canal_pagoS option:selected').val(),
        "banco": banco,
        "modo_pago": $('#modo_pago option:selected').val() == undefined ? '0' : $('#modo_pago option:selected').val(),
        "respuesta_manifiesto": $('input:checkbox[name=manifiesto]:checked').val() == 1 ? true : false,
        "respuesta_accionista": $('input:checkbox[name=accionista]:checked').val() == 1 ? true : false,
        "monto_grupal_sol": parseFloat($("#monto_grupal").val()).toFixed(2),
        "tipo_solicitud": $("#tipo_documento").val()
    };
    $.ajax({
        type: "POST",
        url: "/Solicitudes/InsertCreditoSol",
        dataType: "json",
        data: data,
        success: function (response) {
            $.toast({
                text: "Se agrego Correctamente " + response,
                hideAfter: true
            })
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    });
}

function addCreditoCom() {
    var banco = $('#canal_pagoCom option:selected').val() == "5" ? $('#bancoCom').val() : '';
    var data = {
        "id_documento": $('#tipo_check option:selected').val() == undefined ? '0' : $('#tipo_check option:selected').val(),
        "id_sucursal": $('#sucursal option:selected').val() == undefined ? '0' : $('#sucursal option:selected').val(),
        "id_asesor": $('#asesor option:selected').val() == undefined ? '0' : $('#asesor option:selected').val(),
        "id_grupo": $('#grupoCom option:selected').val() == undefined ? '0' : $('#grupoCom option:selected').val(),
        "fecha": $("#fecha_solicitud").val(),
        "fecha_desembolso": $("#fecha_desembolso").val(),
        "tipo_garantia": $('#tipo_garantia option:selected').text() == undefined ? '0' : $('#tipo_garantia option:selected').text(),
        "secuencia": $("#secuencia").val(),
        "id_credito": $('#tipo_credito option:selected').text() == undefined ? '0' : $('#tipo_credito option:selected').text(),
        "monto_solicitado": parseFloat($("#monto").val()),
        "tasa": $("#tasa").val(),
        "cuotas": $("#cuotas").val(),
        "fondo_comunal": $("#fondo_c").val(),
        "frecuencia_pago": $('#frecuencia_pago option:selected').val() == undefined ? '0' : $('#frecuencia_pago option:selected').val(),
        "tipo_desembolso": $('#tipo_desembolso option:selected').val() == undefined ? '0' : $('#tipo_desembolso option:selected').val(),
        "primer_fecha_pago": $("#fecha_pago").val(),
        "dia_pago": $('#dia_pago option:selected').val() == undefined ? '0' : $('#dia_pago option:selected').val(),
        "canal_pago": $('#canal_pagoCom option:selected').val() == undefined ? '0' : $('#canal_pagoCom option:selected').val(),
        "banco": banco,
        "respuesta_manifiesto": $('input:checkbox[name=manifiesto]:checked').val() == 1 ? true : false,
        "respuesta_accionista": $('input:checkbox[name=accionista]:checked').val() == 1 ? true : false,
        "subtotal": $("#subtotal_solicitado").val(),
        "subtotal_autorizado": $("#subtotal_autorizado").val(),
        "total": $("#total_solicitado").val(),
        "total_autorizado": $("#total_autorizado").val(),
        "tipo_solicitud": $("#tipo_documento").val()
    };
    console.log(data);
    $.ajax({
        type: "POST",
        url: "/Solicitudes/InsertCreditoCom",
        dataType: "json",
        data: data,
        success: function (response) {
            console.log(response);
            $.toast({
                text: "Se agrego Correctamente " + response,
                hideAfter: true
            })
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    });
}

function sol_pdf(id) {
    console.log(id);
    var data = {
        id: id,
    }
    $.ajax({
        type: "POST",
        url: "/Solicitudes/PdfSol",
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

/*EVENT CHANGE TYPE CHECK_LIST*/
$("#canal_pago").change(function () {
    var canal_pago = $('#canal_pago option:selected').val() == undefined ? '0' : $('#canal_pago option:selected').val();
    if (canal_pago == 5) {
        $("#div_canal").css('display', 'block');
    } else {
        $("#div_canal").css('display', 'none');
    }
});
$("#sucursal").change(function () {
    var sucursal = $('#sucursal option:selected').val() == undefined ? '0' : $('#sucursal option:selected').val();
    if (sucursal == "0") {
        $("#asesor").attr("disabled", true);
    } else {
        $("#asesor").attr("disabled", false);
    }
});



