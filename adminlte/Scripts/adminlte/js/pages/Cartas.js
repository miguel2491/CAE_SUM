

function uppCartaJurada() {
    let monto_ = $("#monto").val();
    monto_ = parseFloat(monto_).toFixed(2);
    var data = {
        id_carta: $("#idCarta").val(),
        id_documento: $('#tipo_check option:selected').val() == undefined ? '0' : $('#tipo_check option:selected').val(),
        id_cliente: $('#cliente_id option:selected').val() == undefined ? '0' : $('#cliente_id option:selected').val(),
        cliente: $('#cliente_id option:selected').text() == undefined ? '0' : $('#cliente_id option:selected').text(),
        id_sucursal: $('#sucursal_id option:selected').val() == undefined ? '0' : $('#sucursal_id option:selected').val(),
        sucursal: $('#sucursal_id option:selected').text() == undefined ? '0' : $('#sucursal_id option:selected').text(),
        monto:monto_,
        actividad_negocio: $("#negocio").val(),
        ubicacion: $("#ubicacion").val(),
        fecha: $("#fecha").val()
    }
    $.ajax({
        type: "POST",
        url: "/Cartas/UpdateJurada",
        dataType: "json",
        data: data,
        success: function (data) {
            var lonsup = detalles.length;
            for (var j = 0; j < lonsup; j++) {
                var data2 = {
                    id_documento: detalles[j].id
                }
                $.ajax({
                    type: "POST",
                    url: "/Cartas/DeleteDestinoI",
                    dataType: "json",
                    data: data2,
                    success: function (response) {
                        url = response;
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert("Status: " + textStatus); alert("Error: " + errorThrown);
                    }
                });
            }
            window.location.href = data.redirectToUrl;
        }
    });
}

function editJurada(id) {
    var data = {
        id: id,
    }
    $.ajax({
        type: "POST",
        url: "/Cartas/editJurada",
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

function updateVisitas(idd) {
    var data = {
        id: idd,
    }
    $.ajax({
        type: "POST",
        url: "/Cartas/editVisitas",
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

function uppVisita() {
    var id = $("#iddDoc").val();
    var data = {
        id_carta: id,
        id_documento: $('#tipo_check option:selected').val() == undefined ? '0' : $('#tipo_check option:selected').val(),
        fecha: $("#fecha_visita").val(),
        id_cliente: $('#cliente option:selected').val() == undefined ? '0' : $('#cliente option:selected').val(),
        cliente: $('#cliente option:selected').text() == undefined ? '0' : $('#cliente option:selected').text(),
        secuencia: $("#secuencia").val(),
        id_sucursal: $('#sucursal option:selected').val() == undefined ? '0' : $('#sucursal option:selected').val(),
        sucursal: $('#sucursal option:selected').text() == undefined ? '0' : $('#sucursal option:selected').text(),
        id_asesor: $('#asesor option:selected').val() == undefined ? '0' : $('#asesor option:selected').val(),
        estado_id: $('#estado option:selected').val() == undefined ? '0' : $('#estado option:selected').val(),
        municipio_id: $('#municipio option:selected').val() == undefined ? '0' : $('#municipio option:selected').val(),
        cp_id: $('#cp').val(),
        colonia_id: $('#colonia option:selected').val() == undefined ? '0' : $('#colonia option:selected').val(),
        calle: $("#calle").val(),
        numero: $("#numero").val(),
        latitud: $("#lat").val(),
        longitud: $("#lng").val(),
        respuesta1: $("input[name='res1']:checked").val(),
        observaciones: $("#observaciones_res1").val(),
        respuesta2: $("#res2").val(),
        respuesta3: $("#res3").val(),
        respuesta4: $("#res4").val(),
        respuesta5: $("#res5").val(),
        respuesta6: $("#res6").val(),
        respuesta7: $("#res7").val(),
        respuesta8: $("input[name='res9']:checked").val(),
        respuesta9: $("#res10").val(),
        latD: $("#latD").val(),
        lngD: $("#lngD").val()
    };
    console.log(data);
    $.ajax({
        type: "POST",
        url: "/Cartas/UpdateVisita",
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

function pdfArchi(id) {
    var data = {
        id: id,
    }
    $.ajax({
        type: "POST",
        url: "/Cartas/PdfA",
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

function pdfJurada(id) {
    var data = {
        id: id,
    }
    $.ajax({
        type: "POST",
        url: "/Cartas/PdfJurada",
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

function addCartaJurada()
{
    var data = {
        id_documento: $('#tipo_check option:selected').val() == undefined ? '0' : $('#tipo_check option:selected').val(),
        id_cliente: $('#cliente_id option:selected').val() == undefined ? '0' : $('#cliente_id option:selected').val(),
        cliente: $('#cliente_id option:selected').text() == undefined ? '0' : $('#cliente_id option:selected').text(),
        id_sucursal: $('#sucursal_id option:selected').val() == undefined ? '0' : $('#sucursal_id option:selected').val(),
        sucursal: $('#sucursal_id option:selected').text() == undefined ? '0' : $('#sucursal_id option:selected').text(),
        monto: $("#monto").val(),
        actividad_negocio: $("#negocio").val(),
        ubicacion: $("#ubicacion").val(),
        fecha: $("#fecha").val(),
        tipo_carta: $("#tipo_solicitud").val()
    }
    $.ajax({
        type: "POST",
        url: "/Cartas/InsertJurada",
        dataType: "json",
        data: data,
        success: function (response) {
            var urlA;
            var lonsup = detalles.length;
            for (var j = 0; j < lonsup; j++) {
                var data2 = {
                    id_documento: response.id,
                    descripcion: detalles[j].descripcion,
                    costo_unitario: detalles[j].valor,
                }
                console.log(data2);
                $.ajax({
                    type: "POST",
                    url: "/Cartas/InsertDestinoI",
                    dataType: "json",
                    data: data2,
                    success: function (response) {
                        urlA = response;
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert("Status: " + textStatus); alert("Error: " + errorThrown);
                    }
                });
                console.log(urlA);
            }
            console.log(urlA);
            $.toast({
                text: "Generado Correctamente ",
                hideAfter: true
            });
            window.location.href = response.redirectToUrl;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}

function addVisita() {
    var tipo_solicitud = $("#tipo_solicitud").val();
    var fecha_visita = $("#fecha_visita").val();
    var id_cliente = $('#cliente option:selected').val() == undefined ? '0' : $('#cliente option:selected').val();
    var cliente = $('#cliente option:selected').text() == undefined ? '0' : $('#cliente option:selected').text();
    var id_sucursal = $('#sucursal option:selected').val() == undefined ? '0' : $('#sucursal option:selected').val();
    var sucursal = $('#sucursal option:selected').text() == undefined ? '0' : $('#sucursal option:selected').text();
    var secuencia = $("#secuencia").val();
    var grupo = $('#grupo option:selected').val() == undefined ? '0' : $('#grupo option:selected').val();
    var asesor = $('#asesor option:selected').val() == undefined ? '0' : $('#asesor option:selected').val();
    var estado = $('#estado option:selected').val() == undefined ? '0' : $('#estado option:selected').val();
    var municipio = $('#municipio option:selected').val() == undefined ? '0' : $('#municipio option:selected').val();
    var cp = $('#cp').val();
    var colonia = $('#colonia option:selected').val() == undefined ? '0' : $('#colonia option:selected').val();
    var calle = $("#calle").val(); 
    var numero = $("#numero").val();
    var latitud = $("#lat").val();
    var longitud = $("#lng").val();
    var latD = $("#latD").val();
    var lngD = $("#lngD").val();
    var data = {
        id_documento: $('#tipo_check option:selected').val() == undefined ? '0' : $('#tipo_check option:selected').val(),
        id_sucursal: id_sucursal,
        sucursal: sucursal,
        id_cliente: id_cliente,
        cliente:cliente,
        id_asesor: asesor,
        tipo_carta: tipo_solicitud,
        fecha: fecha_visita,
        secuencia: secuencia,
        respuesta1: $("input[name='res1']:checked").val(),
        observaciones: $("#observaciones_res1").val(),
        respuesta2: $("#res2").val(),
        respuesta3: $("#res3").val(),
        respuesta4: $("#res4").val(),
        respuesta5: $("#res5").val(),
        respuesta6: $("#res6").val(),
        respuesta7: $("#res7").val(),
        respuesta8: $("input[name='res9']:checked").val(),
        respuesta9: $("#res10").val(),
        latitud: latitud,
        longitud: longitud,
        latD: latD,
        lngD: lngD
    }
    $.ajax({
        type: "POST",
        url: "/Cartas/InsertVisita",
        dataType: "json",
        data: data,
        success: function (data) {
            var data2 = {
                id_documento: data,
                estado_id: estado,
                municipio_id: municipio,
                cp_id: cp,
                colonia_id: colonia,
                calle: calle,
                numero: numero,
                tipo:"principal"
            }
            $.ajax({
                type: "POST",
                url: "/Cartas/InsertDirecciones",
                dataType: "json",
                data: data2,
                success: function (data) {
                    window.location.href = data.redirectToUrl;
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log(XMLHttpRequest.status);
                    alert("Status: " + textStatus);
                    alert("Error: " + errorThrown);
                }
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}

function addGarantia() {
    var data = {
        tipo_carta : "FPDC.AE-020",
        tipo_documento : $('#tipo_check option:selected').val() == undefined ? '0' : $('#tipo_check option:selected').val(),
        id_cliente : $("#cliente").val(),
        folio : $("#folio").val(),
        fecha : $("#datepicker").val(),
        nombre_acreeditado : $("#testigo1").val(),
        nombre_testigo : $("#testigo2").val(),
        antiguedad_conocer : $("#antiguedad").val(),
        
    }
    $.ajax({
        type: "POST",
        url: "/Cartas/InsertDeclaracion",
        dataType: "json",
        data: data,
        success: function (response) {
            var tlon = garantias.length;
            for (var j = 0; j < tlon; j++) {
                var data2 = {
                    "id_carta": response,
                    "descripcion": garantias[j].descripcion,
                    "marca": garantias[j].marca,
                    "modelo": garantias[j].modelo,
                    "numero_serie": garantias[j].serie,
                    "ann_prenda": garantias[j].ann_prenda,
                    "color_prenda": garantias[j].color_prenda,
                    "lugar_responsable": garantias[j].ubicacion,
                    "uso_prenda": garantias[j].uso_actual,
                    "estado_prenda": garantias[j].estado_prenda,
                    "valor_compra_actual": garantias[j].valor_compra_actual,
                    "valor_actual_compra": garantias[j].valor_actual_compra
                };
                $.ajax({
                    type: "POST",
                    url: "/Cartas/InsertDeclaracionBienes",
                    dataType: "json",
                    data: data2,
                    success: function (response) {
                        console.log(response);
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert("Status: " + textStatus); alert("Error: " + errorThrown);
                    }
                });
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    });
}

function addSeparacion() {
    var data = {
        tipo_carta: $("#tipo_solicitud").val(),
        id_documento: $('#tipo_check option:selected').val() == undefined ? '0' : $('#tipo_check option:selected').val(),
        id_cliente: $("#cliente").val(),
        institucion: $("#institucion").val(),
        lugar: $("#lugar").val(),
        fecha: $("#fecha").val(),
    }
    $.ajax({
        type: "POST",
        url: "/Cartas/InsertSeparacion",
        dataType: "json",
        data: data,
        success: function (response) {
            $.toast({
                text: "Se inserto correctamente " + response,
                hideAfter: true
            })
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}