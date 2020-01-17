/*CREDITO*/
/*****SELECT SUCURSAL*****/
function getSucursal() {
    $.ajax({
        url: "/Cartas/GetSucursales",
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var obj = JSON.parse(data);
            var itemobjeto = [];
            itemobjeto.push({
                id: 0,
                text: 'Todos'
            });
            for (var i = 0; i < obj.Table.length; i++) {
                var nombre = obj.Table[i].SUUCRSAL;
                itemobjeto.push({
                    id: obj.Table[i].CLAVE_S,
                    text: nombre
                });
            }

            $('#sucursal').select2({
                width: '100%',
                allowClear: true,
                data: itemobjeto
                //dropdownParent: $('#ModalSave')
            });

            $("#sucursal").val(0).change();

            $('#sucursal_id').select2({
                width: '100%',
                allowClear: true,
                data: itemobjeto
                //dropdownParent: $('#ModalSave')
            });

            $("#sucursal_id").val(0).change();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            var data = jqXHR.responseJSON;
            if (jqXHR.status == 401) {
                location.reload();
            }

        }
    });
}
/**FIN DE SUCURSAL*/
/**SELECT CLIENTE*/
function getCliente() {
    $.ajax({
        url: "/Cartas/GetCliente",
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var obj = JSON.parse(data);
            var itemobjeto = [];
            itemobjeto.push({
                id: 0,
                text: 'Todos'
            });
            for (var i = 0; i < obj.Table.length; i++) {
                var nombre = obj.Table[i].NOMBRE;
                itemobjeto.push({
                    id: obj.Table[i].CODIGO,
                    text: nombre
                });
            }

            $('#cliente').select2({
                width: '100%',
                allowClear: true,
                data: itemobjeto
                //dropdownParent: $('#ModalSave')
            });

            $("#cliente").val(0).change();

            $('#cliente_id').select2({
                width: '100%',
                allowClear: true,
                data: itemobjeto
                //dropdownParent: $('#ModalSave')
            });

            $("#cliente_id").val(0).change();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            var data = jqXHR.responseJSON;
            if (jqXHR.status == 401) {
                location.reload();
            }

        }
    });
}
/***/
/**SELECT ESTADOS**/
function getEstados() {
    $.ajax({
        url: "/Cartas/GetEstados",
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var obj = JSON.parse(data);
            var itemobjeto = [];
            itemobjeto.push({
                id: 0,
                text: 'Todos'
            });
            for (var i = 0; i < obj.Table.length; i++) {
                var nombre = obj.Table[i].ESTADO;
                itemobjeto.push({
                    id: obj.Table[i].CLAVE_E,
                    text: nombre
                });
            }

            $('#estado').select2({
                width: '100%',
                allowClear: true,
                data: itemobjeto
            });

            $('#estado_mdl').select2({
                width: '100%',
                allowClear: true,
                data: itemobjeto
            });

            $('#estado_benef').select2({
                width: '100%',
                allowClear: true,
                data: itemobjeto
            });

            $("#estado").val(0).change();
            $("#estado_mdl").val(0).change();
            $("#estado_benef").val(0).change();
            $("#cp").attr('disabled',true);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            var data = jqXHR.responseJSON;
            if (jqXHR.status == 401) {
                location.reload();
            }

        }
    });
}
/***/
/*FIN SELECT**/
/**
 SELECT MUNICIPIOS
 */
$("#estado").change(function () {
    var estado = $('#estado option:selected').val() == undefined ? '0' : $('#estado option:selected').val();
    $("#municipio").attr('disabled', false);
    $("#municipio_fiscal").attr('disabled', false);
        var data = {
            id: estado,
        }
        $("#municipio").html('').select2();
        $("#municipio_fiscal").html('').select2();
        $.ajax({
        url: "/Cartas/GetMunicipio",
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function (data) {
            var obj = JSON.parse(data);
            var itemobjeto = [];
            itemobjeto.push({
                id: 0,
                text: 'Todos'
            });
            for (var i = 0; i < obj.Table.length; i++) {
                var nombre = obj.Table[i].MUNICIPIO;
                itemobjeto.push({
                    id: obj.Table[i].CLAVE_M,
                    text: nombre
                });
            }

            $('#municipio').select2({
                width: '100%',
                allowClear: true,
                data: itemobjeto
            });
            $('#municipio_fiscal').select2({
                width: '100%',
                allowClear: true,
                data: itemobjeto
            });

            $("#municipio").val(0).change();
            $("#municipio_fiscal").val(0).change();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            var data = jqXHR.responseJSON;
            if (jqXHR.status == 401) {
                location.reload();
            }

        }
    });
});
/*ESTADO MODAL*/
$("#estado_mdl").change(function () {
    var estado = $('#estado_mdl option:selected').val() == undefined ? '0' : $('#estado_mdl option:selected').val();
    $("#municipio_mdl").attr('disabled', false);
    var data = {
        id: estado,
    }
    $("#municipio_mdl").html('').select2();
    $.ajax({
        url: "/Cartas/GetMunicipio",
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function (data) {
            var obj = JSON.parse(data);
            var itemobjeto = [];
            itemobjeto.push({
                id: 0,
                text: 'Todos'
            });
            for (var i = 0; i < obj.Table.length; i++) {
                var nombre = obj.Table[i].MUNICIPIO;
                itemobjeto.push({
                    id: obj.Table[i].CLAVE_M,
                    text: nombre
                });
            }

            $('#municipio_mdl').select2({
                width: '100%',
                allowClear: true,
                data: itemobjeto
            });

            $("#municipio_mdl").val(0).change();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            var data = jqXHR.responseJSON;
            if (jqXHR.status == 401) {
                location.reload();
            }

        }
    });
});
/*ESTADO BENEF*/
$("#estado_benef").change(function () {
    var estado = $('#estado_benef option:selected').val() == undefined ? '0' : $('#estado_benef option:selected').val();
    $("#municipio_benef").attr('disabled', false);
    var data = {
        id: estado,
    }
    $("#municipio_benef").html('').select2();
    $.ajax({
        url: "/Cartas/GetMunicipio",
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function (data) {
            var obj = JSON.parse(data);
            var itemobjeto = [];
            itemobjeto.push({
                id: 0,
                text: 'Todos'
            });
            for (var i = 0; i < obj.Table.length; i++) {
                var nombre = obj.Table[i].MUNICIPIO;
                itemobjeto.push({
                    id: obj.Table[i].CLAVE_M,
                    text: nombre
                });
            }

            $('#municipio_benef').select2({
                width: '100%',
                allowClear: true,
                data: itemobjeto
            });

            $("#municipio_benef").val(0).change();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            var data = jqXHR.responseJSON;
            if (jqXHR.status == 401) {
                location.reload();
            }

        }
    });
});
/**SELECT COD POS**/
$("#municipio").change(function () {
    var cp = $('#municipio option:selected').val() == undefined ? '0' : $('#municipio option:selected').val();
    var edo = $('#estado option:selected').val() == undefined ? '0' : $('#estado option:selected').val();
    
    var data = {
        id_estado: edo,
        id_muni:cp
    }
    if (cp == "0" && edo == "0") {
        $("#municipio").attr('disabled', true);
    } else {
        $("#municipio").attr('disabled', false);
    }
    if (cp != "0") {
        $("#colonia").attr('disabled', false);
    } else {
        $("#colonia").attr('disabled', true);
    }
    $("#colonia").html('').select2();
    $.ajax({
        url: "/Cartas/GetColonia",
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function (data) {
            var obj = JSON.parse(data);
            var itemobjeto = [];
            itemobjeto.push({
                id: 0,
                text: 'Todos'
            });
            for (var i = 0; i < obj.Table.length; i++) {
                var nombre = obj.Table[i].COLONIA;
                var cp = obj.Table[i].CP;
                itemobjeto.push({
                    id: obj.Table[i].CLAVE_C,
                    text: nombre+"-"+cp
                });
            }

            $('#colonia').select2({
                width: '100%',
                allowClear: true,
                data: itemobjeto
            });

            $("#colonia").val(0).change();

        },
        error: function (jqXHR, textStatus, errorThrown) {
            var data = jqXHR.responseJSON;
            if (jqXHR.status == 401) {
                location.reload();
            }

        }
    });
});
/* CP */
$("#colonia").change(function () {
    var cp = $('#colonia option:selected').text() == undefined ? '0' : $('#colonia option:selected').text();
    cp = cp.split("-");
    if (cp[1] != undefined || cp[1] != "undefined") {
        $("#cp").val(cp[1]);
    }
});
/*MUNIC MODAL*/
$("#municipio_mdl").change(function () {
    var cp = $('#municipio_mdl option:selected').val() == undefined ? '0' : $('#municipio_mdl option:selected').val();
    var edo = $('#estado_mdl option:selected').val() == undefined ? '0' : $('#estado_mdl option:selected').val();

    var data = {
        id_estado: edo,
        id_muni: cp
    }
    if (cp == "0" && edo == "0") {
        $("#municipio_mdl").attr('disabled', true);
    } else {
        $("#municipio_mdl").attr('disabled', false);
    }
    if (cp != "0") {
        $("#colonia_ref").attr('disabled', false);
    } else {
        $("#colonia_ref").attr('disabled', true);
    }
    $("#colonia_ref").html('').select2();
    $.ajax({
        url: "/Cartas/GetColonia",
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function (data) {
            var obj = JSON.parse(data);
            var itemobjeto = [];
            itemobjeto.push({
                id: 0,
                text: 'Todos'
            });
            for (var i = 0; i < obj.Table.length; i++) {
                var nombre = obj.Table[i].COLONIA;
                var cp = obj.Table[i].CP;
                itemobjeto.push({
                    id: obj.Table[i].CLAVE_C,
                    text: nombre + "-" + cp
                });
            }

            $('#colonia_ref').select2({
                width: '100%',
                allowClear: true,
                data: itemobjeto
            });

            $("#colonia_ref").val(0).change();

        },
        error: function (jqXHR, textStatus, errorThrown) {
            var data = jqXHR.responseJSON;
            if (jqXHR.status == 401) {
                location.reload();
            }

        }
    });
});
/* CP */
$("#colonia_ref").change(function () {
    var cp = $('#colonia_ref option:selected').text() == undefined ? '0' : $('#colonia_ref option:selected').text();
    cp = cp.split("-");
    if (cp[1] != undefined || cp[1] != "undefined") {
        $("#cp_mdl").val(cp[1]);
    }
});
/*MUNIC BENEF*/
$("#municipio_benef").change(function () {
    var cp = $('#municipio_benef option:selected').val() == undefined ? '0' : $('#municipio_benef option:selected').val();
    var edo = $('#estado_benef option:selected').val() == undefined ? '0' : $('#estado_benef option:selected').val();

    var data = {
        id_estado: edo,
        id_muni: cp
    }
    if (cp == "0" && edo == "0") {
        $("#municipio_benef").attr('disabled', true);
    } else {
        $("#municipio_benef").attr('disabled', false);
    }
    if (cp != "0") {
        $("#colonia_benef").attr('disabled', false);
    } else {
        $("#colonia_benef").attr('disabled', true);
    }
    $("#colonia_benef").html('').select2();
    $.ajax({
        url: "/Cartas/GetColonia",
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function (data) {
            var obj = JSON.parse(data);
            var itemobjeto = [];
            itemobjeto.push({
                id: 0,
                text: 'Todos'
            });
            for (var i = 0; i < obj.Table.length; i++) {
                var nombre = obj.Table[i].COLONIA;
                var cp = obj.Table[i].CP;
                itemobjeto.push({
                    id: obj.Table[i].CLAVE_C,
                    text: nombre + "-" + cp
                });
            }

            $('#colonia_benef').select2({
                width: '100%',
                allowClear: true,
                data: itemobjeto
            });

            $("#colonia_benef").val(0).change();

        },
        error: function (jqXHR, textStatus, errorThrown) {
            var data = jqXHR.responseJSON;
            if (jqXHR.status == 401) {
                location.reload();
            }

        }
    });
});

/* CP */
$("#colonia_benef").change(function () {
    var cp = $('#colonia_benef option:selected').text() == undefined ? '0' : $('#colonia_benef option:selected').text();
    cp = cp.split("-");
    console.log(cp);
    if (cp[1] != undefined || cp[1] != "undefined") {
        $("#codigo_postal_benef").val(cp[1]);
    }
});
/*GET PRODUCTO*/
function getProducto() {
    $.ajax({
        url: "/Cartas/GetProducto",
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var obj = JSON.parse(data);
            var itemobjeto = [];
            itemobjeto.push({
                id: 0,
                text: 'Todos'
            });
            for (var i = 0; i < obj.Table.length; i++) {
                var nombre = obj.Table[i].PRODUCTO;
                itemobjeto.push({
                    id: obj.Table[i].CLAVE_P,
                    text: nombre
                });
            }

            $('#tipo_producto').select2({
                width: '100%',
                allowClear: true,
                data: itemobjeto
                //dropdownParent: $('#ModalSave')
            });

            $("#tipo_producto").val(0).change();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            var data = jqXHR.responseJSON;
            if (jqXHR.status == 401) {
                location.reload();
            }

        }
    });
}



