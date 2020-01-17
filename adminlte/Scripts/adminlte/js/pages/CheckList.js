$(document).ready(function () {
    /*EVENT CHANGE TYPE CHECK_LIST*/
    $("#tipo_check").change(function () {
        var tipo_check = $('#tipo_check option:selected').val() == undefined ? '0' : $('#tipo_check option:selected').val();
        if (tipo_check == 1) {
            $("#div_grupo").css('display', 'block');
            $("#div_cliente").css('display', 'none');
            $("#div_integrantes").css('display', 'block');
            $("#div_codigo").css('display', 'none');
            $("#div_monto").css('display', 'none');
            $("#div_tipoG").css('display', 'none');
        } else if (tipo_check == 2) {
            $("#div_grupo").css('display', 'none');
            $("#div_cliente").css('display', 'block');
            $("#div_integrantes").css('display', 'none');
            $("#div_codigo").css('display', 'block');
            $("#div_monto").css('display', 'block');
            $("#div_tipoG").css('display', 'block');
        } else {
            $("#div_grupo").css('display', 'none');
            $("#div_cliente").css('display', 'block');
            $("#div_integrantes").css('display', 'none');
            $("#div_codigo").css('display', 'block');
            $("#div_monto").css('display', 'block');
            $("#div_tipoG").css('display', 'block');
        }
    });
/*AGREGAR CHECK LIST*/
    
});
function addCheckList() {
    let tipo_check = $('#tipo_check option:selected').val() == undefined ? '0' : $('#tipo_check option:selected').val();
    let cliente = 0;
    let integrantes = "";
    let codigo_opera = "";
    let monto_solicitado = "0";
    let garantia = "0";
    if (tipo_check == 1) {
        cliente = $("#grupo").val();
        integrantes = $("#integrantes").val();
    } else {
        cliente = $("#cliente").val();
        codigo_opera = $("#codigo_opera").val();
        monto_solicitado = $("#monto_solicitado").val();
        garantia = $('#tipo_garantia option:selected').val() == undefined ? '0' : $('#tipo_garantia option:selected').val();
    }
    let asesor = $("#asesor").val();
    let secuencia = $("#secuencia").val();
    let fecha = $('#fecha').val();
    let status = $('input:checkbox[name=status_check]:checked').val() == undefined ? false : true;
    var data = {
        id_cliente: cliente,
        id_asesor: asesor,
        codigo_operacion: codigo_opera,
        secuencia: secuencia,
        monto_solicitado: monto_solicitado,
        tipo_garantia: garantia,
        fecha_validacion_checklist: fecha,
        numero_integrantes: integrantes,
        tipo_check_list: tipo_check,
        status: status
    };
    $.ajax({
        type: "POST",
        url: "/CheckList/InsertDatos",
        dataType: "json",
        data: data,
        success: function (response) {
            console.log(response);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    });
}

consultaTiposCheck();

function consultaTiposCheck() {
    $.ajax({
        type: "GET",
        url: "/CheckList/GetChecks",
        dataType: "json",

        success: function (data) {
            var s = '';
            for (var i = 0; i < data.length; i++) {
                var check = "";
                var list = data[i].checkList;
                if (list == "1") {
                    check = "Check list de contenido carpeta operativa grupal";
                } else if (list == "2") {
                    check = "Check list carpeta operativa credito individual, PE, ME, STC";
                } else {
                    check = "Check list carpeta operativa Agrosumate y Rural";
                }
                s += '<option value="' + data[i].id_check_list + '">' + check + '</option>';
            }
            $("#tipo_check_cont").append(s);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}
function consultaContenidoCheck() {
    $.ajax({
        type: "GET",
        url: "/CheckList/GetContenidoChecks",
        dataType: "json",

        success: function (data) {
            var s = '';
            for (var i = 0; i < data.length; i++) {

                s += '<option value="' + data[i].id + '">' + data[i].descripcion + '</option>';
            }
            $("#tipo_check").append(s);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}
function guardarContenidoCheck() {
    let check = $('#tipo_check_cont option:selected').val() == undefined ? '0' : $('#tipo_check_cont option:selected').val();
    let descripcion = $('#descripcion').val();
    let status_si = $('input:checkbox[name=status_si]:checked').val() == undefined ? false : true;
    let status_na = $('input:checkbox[name=status_na]:checked').val() == undefined ? false : true;
    let status_carpeta = $('input:checkbox[name=status_carpeta]:checked').val() == undefined ? false : true;
    let seccion = $('#seccion option:selected').val() == undefined ? '0' : $('#seccion option:selected').val();
    var data = {
        id_check_list: check,
        descripcion: descripcion,
        status_SI: status_si,
        status_na: status_na,
        status_carpeta_electronica: status_carpeta,
        seccion_pertenece: seccion,
        status: true
    }
    
    $.ajax({
        type: "POST",
        url: "/CheckList/InsertDatosContenido",
        dataType: "json",
        data: data,
        success: function (response) {
            console.log(response);
        }, error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    });
}

function ListaChecks() {
    $.ajax({
        type: "GET",
        url: "/CheckList/GetListCheck",
        dataType: "json",
        success: function (data) {
            var s = '';
            for (var i = 0; i < data.length; i++) {
                var check = "";
                var list = data[i].tipo_check;
                if (list == 1) {
                    check = "Check list de contenido carpeta operativa grupal";
                } else if (list == 2) {
                    check = "Check list carpeta operativa credito individual, PE, ME, STC";
                } else {
                    check = "Check list carpeta operativa Agrosumate y Rural";
                }
                var bttnDocs = '<button class="btn btn-primary btn-xs" id="bttn_modal_docs" data-id="' + data[i].checkList + '" data-target="#modal_docs"  data-toggle="modal" title="Documentos"><i class="glyphicon glyphicon-list-alt"></i></button>';
                var bttnDelete = '<button class="btn btn-danger btn-xs" id="bttn_modal_delete" data-id="' + data[i].checkList + '" data-target="#modal_delete"  data-toggle="modal" title="Eliminar"><i class="glyphicon glyphicon-trash"></i></button>';
                var bttnUpdate = '<button class="btn btn-warning btn-xs" id="bttn_modal_update"  data-id="' + data[i].checkList + '"  data-target="#ModalSave" data-toggle="modal" title="Editar"><i class="glyphicon glyphicon-edit"></i></button> ';
                s += '<tr><td>' + data[i].checkList + '</td><td>' + data[i].id_cliente + '</td><td>' + data[i].id_asesor + '</td><td>' + check + '</td><td>' + data[i].fecha_valida + '</td><td>' + bttnDocs+' ' + bttnUpdate + ' ' + bttnDelete + '</td></tr>';
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

//Contenido
function ListaContenidoChecks() {
    $.ajax({
        type: "GET",
        url: "/CheckList/GetListContenidoCheck",
        dataType: "json",
        success: function (data) {
            var s = '';
            for (var i = 0; i < data.length; i++) {
                var check = "";
                var list = data[i].id_check;
                if (list == 1) {
                    check = "Check list de contenido carpeta operativa grupal";
                } else if (list == 2) {
                    check = "Check list carpeta operativa credito individual, PE, ME, STC";
                } else {
                    check = "Check list carpeta operativa Agrosumate y Rural";
                }
                var seccion = "";
                switch (data[i].seccion) {
                    case 0:
                        seccion = "General";
                        break;
                    case 1:
                        seccion = "Datos del cliente y de su garantía (personas físicas)";
                        break;
                    case 2:
                        seccion = "En caso de garantía hipotecaria (Cada copia de los documentos deberá ser cotejada contra original, sellada y firmada por el asesor que cotejó)";
                        break;
                    case 3:
                        seccion = "Documentos de identidad del cliente debidamente cotejados contra originales, sellados y firmados por el asesor que cotejó";
                        break;
                    case 4:
                        seccion = "Datos del Aval y en su caso, del obligado solidario, y/o garante prendario o hipotecario";
                        break;
                    case 5:
                        seccion = "Documentos de identidad del aval, obligado solidario, y/o garantes prendarios o hipotecarios  y Propietario Real (en caso de aplicar)";
                    case 6:
                        seccion = "Documentos de créditos liquidados";
                        break;
                    case 7:
                        seccion = "Documentos operativos de cada integrante";
                        break;
                    case 8:
                        seccion = "Documentos de identidad del cliente debidamente cotejadas contra originales, sellados y firmados por el asesor que cotejó.";
                        break;
                    case 9:
                        seccion = "Documentos de créditos liquidados: (Se anexan posterior a los documentos del último integrante vigente del grupo)";
                        break;
                }
                var bttnDelete = '<button class="btn btn-danger btn-xs" id="bttn_modal_delete" data-id="' + data[i].contenidoID + '" data-target="#modal_delete"  data-toggle="modal" title="Eliminar"><i class="glyphicon glyphicon-trash"></i></button>';
                var bttnUpdate = '<button class="btn btn-warning btn-xs" id="bttn_modal_update"  data-id="' + data[i].contenidoID + '"  data-target="#ModalSave" data-toggle="modal" title="Editar"><i class="glyphicon glyphicon-edit"></i></button> ';
                var Activo = data[i].status == true ? '<i class="fa fa-check text-navy"></i>' : '<i class="fa fa-times text-navy"></i>';
                var ce = data[i].status_carpeta_electronica == true ? '<i class="fa fa-check text-navy"></i>' : '<i class="fa fa-times text-navy"></i>';
                var na = data[i].status_na == true ? '<i class="fa fa-check text-navy"></i>' : '<i class="fa fa-times text-navy"></i>';
                var si = data[i].status_SI == true ? '<i class="fa fa-check text-navy"></i>' : '<i class="fa fa-times text-navy"></i>';
                s += '<tr><td>' + data[i].contenidoID + '</td><td>' + check + '</td><td>' + seccion + '</td><td>' + data[i].descripcion + '</td><td>' + si + '</td><td>' + na + '</td><td>' + ce + '</td><td>' + Activo + '</td><td>' + bttnUpdate + ' ' + bttnDelete + '</td></tr>';
            }
            $("#table_body").append(s);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}



