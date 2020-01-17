

function ListaRespuestasEcualitativa() {
    console.log("Ecualitativas");
    $.ajax({
        type: "GET",
        url: "/Evaluaciones/GetListRespuestasCualitativa",
        dataType: "json",
        success: function (data) {
            var s = '';
            for (var i = 0; i < data.length; i++) {
                var bttnDelete = '<button class="btn btn-danger btn-xs" id="bttn_modal_delete" data-id="' + data[i].id + '" data-target="#modal_delete"  data-toggle="modal" title="Eliminar"><i class="glyphicon glyphicon-trash"></i></button>';
                var bttnUpdate = '<button class="btn btn-warning btn-xs" id="bttn_modal_update"  data-id="' + data[i].id + '"  data-target="#ModalSave" data-toggle="modal" title="Editar"><i class="glyphicon glyphicon-edit"></i></button> ';
                var si = data[i].status_SI == true ? '<i class="fa fa-check text-navy"></i>' : '<i class="fa fa-times text-navy"></i>';
                s += '<tr><td>' + data[i].id + '</td><td>' + data[i].id_pregunta + '</td><td>' + data[i].valor + '</td><td>' + data[i].respuesta+ '</td><td>' + si + '</td><td>' + bttnUpdate + ' ' + bttnDelete + '</td></tr>';
            }
            $("#table_body").append(s);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}

function AddRowBienesT() {

    document.getElementById("TBienes").innerHTML += `
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <td><input type="text" class="form-control" placeholder="Descripcion" name="tBienes_desc" value="" /></td>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <td><input type="text" class="form-control" name="tBienes_val" value="0" /></td>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </tr>`;

}

function AddRowBienesPT() {

    document.getElementById("TPBienes").innerHTML += `
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <td><input type="text" class="form-control" placeholder="Descripcion" name="tPBienes_desc" value="" /></td>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <td><input type="text" class="form-control" name="tBienesP_val" value="0" /></td>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </tr>`;

}
function CalcBienesPropios() {

    let BPropios = 0, BNEgocios = 0;
    var inputsProp = $("[name='tBienesP_val']");
    var inputsNego = $("[name='tBienes_val']");


    inputsProp.each(function () {
        BPropios = BPropios + parseFloat($(this).val());
        console.log($(this).val());

    });


    inputsNego.each(function () {
        BNEgocios = BNEgocios + parseFloat($(this).val());
        console.log($(this).val());

    });

    $('#BienesPropios').val(BPropios)
    $('#BienesNegocio').val(BNEgocios);

    $('#BienesPropios_').val(BPropios)
    $('#BienesNegocio_').val(BNEgocios);
    $('#BIENESStatusBg_').html('<span class="badge badge-success pull-right">Listo</span> ');
    //BIENESStatusBg_
}

function actualizarRespuesta() {
    var otrosIngresos = $("#OTIng_").val();
    var utilidadOperativa = $("#UtOp_").val();
    var TGFamval = $("#TGFam_").val();

    if (otrosIngresos > utilidadOperativa) {
        $("#cpPagodiv").html('<span class="badge badge-success pull-right">OI supera utilidad</span> ');
        $("#capacidadPago").val('no tiene capacidad');
    } else {
        // utilidad op - gastosTFam + TotrosIng - pagoaotras instituciones
        $("#cpPagodiv").html(' ');
        let capP = parseInt(utilidadOperativa) - parseInt(TGFamval) + parseInt(otrosIngresos) - parseInt(otrosIngresos);
        $("#capacidadPago").val(capP);
    }
}

function asignarCCuota_() {
    var capacidadPago = $("#tHcred_CDPago").val();
    var cuota = $("#tHcred_CUOTA").val();
    let valx = parseInt(capacidadPago) / parseInt(cuota);
    valx = valx.toFixed(2);
    debugger
    $("#tHcred_CCuota").val(valx);
}

                        //  $("#tHcred_CDPago").change(asignarCCuota_());
                        //  debugger
                        //  $("#tHcred_CUOTA").change(asignarCCuota_());


function AddRowTHCred() {
    var id_documento, id_cliente, tHcred_SECUENCIA,
        tHcred_Monto, tHcred_PLAZO, tHcred_CUOTA, tHcred_incrementoMonto,
        tHcred_incrementoCuota, tHcred_disponible, tHcred_utilidadOperativa,
        tHcred_CDPago, tHcred_CCuota;

    id_documento = $('#id_documento_hc').val();
    id_cliente = $('#id_cliente_hc').val();
    tHcred_SECUENCIA = $('#tHcred_SECUENCIA').val();
    tHcred_Monto = $('#tHcred_Monto').val();
    tHcred_PLAZO = $('#tHcred_PLAZO').val();
    tHcred_CUOTA = $('#tHcred_CUOTA').val();
    tHcred_incrementoMonto = $('#tHcred_incrementoMonto').val();
    tHcred_incrementoCuota = $('#tHcred_incrementoCuota').val();
    tHcred_disponible = $('#tHcred_disponible').val();
    tHcred_utilidadOperativa = $('#tHcred_utilidadOperativa').val();
    tHcred_CDPago = $('#tHcred_CDPago').val();
    tHcred_CCuota = $('#tHcred_CCuota').val();

    //if (id_documento.length == 0) {
    //    $('#errorHC').html('<span class="badge badge-success pull-right">faltan datos / documento </span> ');

    //}
    //else if (id_cliente.length == 0) {
    //    $('#errorHC').html('<span class="badge badge-success pull-right">faltan datos / cliente</span> ');

    //}
    //else
    if (tHcred_SECUENCIA.length == 0) {
        $('#errorHC').html('<span class="badge badge-success pull-right">faltan datos / secuencia </span> ');
        $('#tHcred_SECUENCIA').focus();
    }
    else if (tHcred_Monto.length == 0) {
        $('#errorHC').html('<span class="badge badge-success pull-right">faltan datos / monto</span> ');
        $('#tHcred_Monto').focus();
    }
    else if (tHcred_PLAZO.length == 0) {
        $('#errorHC').html('<span class="badge badge-success pull-right">faltan datos / plazo </span> ');
        $('#tHcred_PLAZO').focus();
    }
    else if (tHcred_CUOTA.length == 0) {
        $('#errorHC').html('<span class="badge badge-success pull-right">faltan datos / cuota </span> ');
        $('#tHcred_CUOTA').focus();
    }
    else if (tHcred_incrementoMonto.length == 0) {
        $('#errorHC').html('<span class="badge badge-success pull-right">faltan datos / % monto </span> ');
        $('#tHcred_incrementoMonto').focus();
    }
    else if (tHcred_incrementoCuota.length == 0) {
        $('#errorHC').html('<span class="badge badge-success pull-right">faltan datos / % incremento </span> ');
        $('#tHcred_incrementoCuota').focus();

    }
    else if (tHcred_disponible.length == 0) {
        $('#errorHC').html('<span class="badge badge-success pull-right">faltan datos / disponible maximo </span> ');
        $('#tHcred_disponible').focus();
    }
    else if (tHcred_utilidadOperativa.length == 0) {
        $('#errorHC').html('<span class="badge badge-success pull-right">faltan datos / opertiva </span> ');
        $('#tHcred_utilidadOperativa').focus();
    }
    else if (tHcred_CDPago.length == 0) {
        $('#errorHC').html('<span class="badge badge-success pull-right">faltan datos / capacidad de pago </span> ');
        $('#tHcred_CDPago').focus();
    }
    else if (tHcred_CCuota.length == 0) {
        $('#errorHC').html('<span class="badge badge-success pull-right">faltan datos / cobertura de cuota </span> ');
        $('#tHcred_CCuota').focus();
    }
    else {
        alert('Todo biuen ' + id_documento + ' ' + id_cliente);
        var data = {
            id_cliente: id_cliente,
            id_credito: id_documento,
            secuencia: tHcred_SECUENCIA,
            monto: tHcred_Monto,
            plazo: tHcred_PLAZO,
            CuotaMensual: tHcred_CUOTA,
            incrementoMonto: tHcred_incrementoMonto,
            incrementoCuota: tHcred_incrementoCuota,
            disponobleMaximoreportadoporcliente: tHcred_disponible,
            utilidadOperativa: tHcred_utilidadOperativa,
            capDePagoMensual: tHcred_CDPago,
            coberturadeCuota: tHcred_CCuota,
            CHECK_LIST: 1
        };


        $.ajax({
            url: `/EvaluacionEco/InsertHistorialCrediticio`,
            type: "POST",
            data: data,
            dataType: "json",

            success: function (response) {

                /*

                 implementar respuesta del metodo pendiente
                 */






            },

            error: function (jqXHR, textStatus, err) {
                //$('#myModalLabel').append(`error: - ${err}`);
                console.log(jqXHR);
                console.log(textStatus);
                console.log(err);

                alert(err + 'err');
            }
        });

    }
}
function scoringPreguntas() {
    $.ajax({
        url: '/Scoring/SCORING_PREGUNTAS_ListJson',
        type: "GET",
        dataType: "json",
        //contentType: "application/json; charset=utf-8",
        success: function (response) {
            var rl = response.length;
            $("#nPreguntas").val(rl);
            for (var i = 0; i < rl; i++) {
                document.getElementById('scoring_holder').innerHTML +=
                    `<div> <b>${response[i].pregunta}</b>
                    <br>
                        <h5>Respuestas:</h5>
                    <hr>
                <div id="scoring_holder_ans${response[i].id}"> </div>
                <hr>
              </div>` ;
                let id_sh = `scoring_holder_ans${response[i].id}`;
                let id_scoring = response[i].id;

                callScoringAns(id_sh, id_scoring);
            }
        },

        error: function (jqXHR, textStatus, err) {
            //$('#myModalLabel').append(`error: - ${err}`);
            console.log(jqXHR);
            console.log(textStatus);
            console.log(err);

            alert(err);

        }

    });
}


function callScoringAns(id_sh, id_scoring) {

    $.ajax({
        url: '/Scoring/SCORING_RESPUESTAS_IDP/' + id_scoring,
        type: "GET",
        dataType: "json",
        //contentType: "application/json; charset=utf-8",

        success: function (response) {
            //.log(response);
            let idsh = "scoring_holder_ans" + id_scoring;
            var rl = response.length;

            for (var i = 0; i < rl; i++) {
                document.getElementById(idsh).innerHTML +=
                    `<div>
                        <label class="checkbox-inline">
                        <input type="radio" name="checkbox_${id_scoring}" value="${response[i].valor}"> ${response[i].respuesta}</label>
                      </div>
                    `;
            }


        },

        error: function (jqXHR, textStatus, err) {
            //$('#myModalLabel').append(`error: - ${err}`);
            console.log(jqXHR);
            console.log(textStatus);
            console.log(err);

            alert(err);
        }
    });
}

function preguntaLista() {
    $.ajax({
        url: '/Evaluaciones/EvaCualitN_PREGUNTAS_ListJson',
        type: "GET",
        dataType: "json",
        //contentType: "application/json; charset=utf-8",

        success: function (response) {
            //.log(response);

            var rl = response.length;
            $("#nPreguntasPreg").val(rl);
            for (var i = 0; i < rl; i++) {
                document.getElementById('scoring_holder_preguntas').innerHTML +=
                    `<div> <b>${response[i].pregunta}</b>
                        <br>
                            <h5>Respuestas:</h5>
                        <hr>
                    <div id="scoring_holder_ans_preguntas${response[i].id}"> </div>

                    <hr>
                </div>
            `;
                let id_sh = `scoring_holder_ans_preguntas${response[i].id}`;
                let id_scoring = response[i].id;

                callEvCual(id_sh, id_scoring);
            }
        },

        error: function (jqXHR, textStatus, err) {
            //$('#myModalLabel').append(`error: - ${err}`);
            console.log(jqXHR);
            console.log(textStatus);
            console.log(err);

            alert(err);

        }

    });
}

function callEvCual(id_sh, id_n) {

    $.ajax({
        url: '/Evaluaciones/EvaCualitN_RESPUESTAS_IDP/' + id_n,
        type: "GET",
        dataType: "json",
        //contentType: "application/json; charset=utf-8",

        success: function (response) {
            //.log(response);
            let idsh = "scoring_holder_ans_preguntas" + id_n;
            var rl = response.length;



            for (var i = 0; i < rl; i++) {
                document.getElementById(idsh).innerHTML +=
                    `
                                                                                                                                                <div>
                                                                                                                                                    <label class="checkbox-inline">
                                                                                                                                                    <input type="radio"
                                                                                                                                                            name="checkbox_${id_n}"
                                                                                                                                                            value="${response[i].valor}"> ${response[i].respuesta}</label>

                                                                                                                                                </div>                        `;
            }


        },

        error: function (jqXHR, textStatus, err) {
            //$('#myModalLabel').append(`error: - ${err}`);
            console.log(jqXHR);
            console.log(textStatus);
            console.log(err);

            alert(err);
        }
    });

}

function calificacionCalcScor() {
    const np = $('#nPreguntas').val();
    var nt = 0;
    for (var i = 0; i < np; i++) {
        let ni = i + 1;
        let getclass = "checkbox_" + ni;
        let val_ = 0;
        let st = `input[name='${getclass}']:checked`;
        try {
            val_ = $(st).val();

        } catch (e) {
            console.log(e);
        }

        val_ = parseFloat(val_);
        nt = nt + val_;
        nt = parseFloat(nt);
    }
    
    if (isNaN(nt)) {

        $("#erroresCal").removeClass("hidden");

        $("#erroresCal").html('faltan algunas preguntas por contestar');

    } else {


        nt = nt / np;
        //alert(nt);
        nt = parseFloat(nt).toFixed(2);
        $("#calficiacion_Sco").html('<input type="text" value="' + nt + '" disabled />');
        $("#socringbtn").addClass("bg-success")
        window.scrollTo(0, 0);
    }
}


function calificacionCalc() {
    const np = $('#nPreguntasPreg').val();



    var nt = 0;
    for (var i = 0; i < np; i++) {
        let ni = i + 2;
        let getclass = "checkbox_" + ni;
        let val_ = 0;
        let st = `input[name='${getclass}']:checked`;
        try {
            val_ = $(st).val();

        } catch (e) {
            console.log(e);
        }



        val_ = parseFloat(val_);
        nt = nt + val_;
        nt = parseFloat(nt);
    }



    if (isNaN(nt)) {

        $("#erroresCal_preg").removeClass("hidden");

        $("#erroresCal_preg").html('faltan algunas preguntas por contestar');

    } else {


        nt = nt / np;
        //alert(nt);
        nt = parseFloat(nt).toFixed(2);
        $("#calficiacion_preg").html('<input type="text" value="' + nt + '" disabled />');
        $('#calgrupbtn').addClass('bg-success');
        window.scrollTo(0, 0);
    }
}

function AddRowOMFT() {
    document.getElementById("OMicroT").innerHTML += ''
}

function CalcOMFT() {
    let OMFT = 0;
    var inputsOMFT = $("[name='OMicro_val']");

    inputsOMFT.each(function () {
        OMFT = OMFT + parseFloat($(this).val());
    });

    $('#OMFT_').val(OMFT);
    $('#OMFT').val(OMFT);
    let cuota = $('#cuotaMensual').val();
    $('#cuotaMensual_').val(cuota);

    $('#OtrosMicrostatus_').html('<span class="badge badge-success pull-right">Listo</span> ');
}

function calcularVentas() {
    var lun, mart, mier, juev, vier, sab, domin;
    lun = $('#lun').val();
    mart = $('#mart').val();
    mier = $('#mier').val();
    juev = $('#juev').val();
    vier = $('#vier').val();
    sab = $('#sab').val();
    domin = $('#domin').val();


    if (lun.length == 0 || mart.length == 0 || mier.length == 0 || juev.length == 0 ||
        vier.length == 0 || sab.length == 0 || domin.length == 0) {

        $('#ventasError').html('<span class="badge badge-danger">falta alguno de los datos</span> ');
        $('#ventasError').removeClass('hidden');

    } else {
        $('#ventasError').addClass('hidden');


        //(parseInt(total) + parseInt(valor))
        let sumVSem = parseFloat(lun) + parseFloat(mart) + parseFloat(mier) + parseFloat(juev) + parseFloat(vier) + parseFloat(sab) + parseFloat(domin);


        sumVSem = parseFloat(sumVSem).toFixed(2);
        $('#promSemanal').val(sumVSem);

        let promMen = sumVSem * 4.2;

        $('#promMensual').val(parseFloat(promMen).toFixed(2));

        $('#promSemanal_').val(sumVSem)
        $('#promMensual_').val(parseFloat(promMen).toFixed(2));

        $('#ventaStatusBg_').html('<span class="badge badge-success">Listo</span> ');
    }
}

function calcularBG() {
    let activos = 0, pasivos = 0;

    let caja = $('#caja').val();
    let ahorrobancos = $('#ahorrobancos').val();
    let cuentas = $('#cuentas').val();
    let inventarios = $('#inventarios').val();
    let cobrarypagar = $('#cobrarypagar').val();
    let otrasInst = $('#otrasInst').val();
    let tandas = $('#tandas').val();


    //caja
    let check = $(`input[name='caja']:checked`).val();

    if (check == 'ACTIVO') {
        activos = activos + parseFloat(caja);
    } else {
        pasivos = pasivos + parseFloat(caja);
    }

    //ahorrobancos
    check = $(`input[name='ahorrobancos']:checked`).val();

    if (check == 'ACTIVO') {
        activos = activos + parseFloat(ahorrobancos);
    } else {
        pasivos = pasivos + parseFloat(ahorrobancos);
    }

    //cuentas
    check = $(`input[name='cuentas']:checked`).val();

    if (check == 'ACTIVO') {
        activos = activos + parseFloat(cuentas);
    } else {
        pasivos = pasivos + parseFloat(cuentas);
    }

    //inventarios
    check = $(`input[name='inventarios']:checked`).val();

    if (check == 'ACTIVO') {
        activos = activos + parseFloat(inventarios);
    } else {
        pasivos = pasivos + parseFloat(inventarios);
    }

    //cobrarypagar
    check = $(`input[name='cobrarypagar']:checked`).val();

    if (check == 'ACTIVO') {
        activos = activos + parseFloat(cobrarypagar);
    } else {
        pasivos = pasivos + parseFloat(cobrarypagar);
    }

    //otrasInst
    check = $(`input[name='otrasInst']:checked`).val();

    if (check == 'ACTIVO') {
        activos = activos + parseFloat(otrasInst);
    } else {
        pasivos = pasivos + parseFloat(otrasInst);
    }


    //otrasInst
    check = $(`input[name='tandas']:checked`).val();

    if (check == 'ACTIVO') {
        activos = activos + parseFloat(tandas);
    } else {
        pasivos = pasivos + parseFloat(tandas);
    }



    $('#TActivos').val(activos);
    $('#TPasivos').val(pasivos);


    $('#TActivos_').val(activos);
    $('#TPasivos_').val(pasivos);

    if (activos < 100 || pasivos < 100) {
        $('#BGStatusBg_').html('<span class="badge badge-success">Error activos y pasivos bajos</span> ');
    } else {

        $('#BGStatusBg_').html('<span class="badge badge-success">Listo</span> ');
    }
}

function calcularFAM() {
    let UtBruta = 0, UtOp = 0, TGFAM = 0, ventaMen, porcentajeVT,
        rentaPiso, transporte, telefono, gastosG,
        alimentacion, eduysalud, tfamiliar, gas, gastoGFAM, rentaFam, luzaguapredial, telefonofijo;

    ventaMen = $('#ventaMen').val();
    porcentajeVT = $('#porcentajeVT').val();


    rentaPiso = $('#rentaPiso').val();
    transporte = $('#transporte').val();
    telefono = $('#telefono').val();
    gastosG = $('#gastosG').val();


    alimentacion = $('#alimentacion').val();
    eduysalud = $('#eduysalud').val();
    tfamiliar = $('#tfamiliar').val();
    gas = $('#gas').val();
    gastoGFAM = $('#gastoGFAM').val();
    rentaFam = $('#rentaFam').val();
    luzaguapredial = $('#luzaguapredial').val();
    telefonofijo = $('#telefonofijo').val();
    if (
        ventaMen.length == 0 || ventaMen == ' ' ||
        porcentajeVT.length == 0 || porcentajeVT == ' ' ||
        //
        rentaPiso.length == 0 || rentaPiso == ' ' ||
        transporte.length == 0 || transporte == ' ' ||
        telefono.length == 0 || telefono == ' ' ||
        gastosG.length == 0 || gastosG == ' ' ||
        //
        alimentacion.length == 0 || alimentacion == ' ' ||
        eduysalud.length == 0 || eduysalud == ' ' ||
        tfamiliar.length == 0 || tfamiliar == ' ' ||
        gas.length == 0 || gas == ' ' ||
        gastoGFAM.length == 0 || gastoGFAM == ' ' ||
        rentaFam.length == 0 || rentaFam == ' ' ||
        luzaguapredial.length == 0 || luzaguapredial == ' ' ||
        telefonofijo.length == 0 || telefonofijo == ' '
    ) {
        //FAMError
        $('#FAMError').html('<span class="badge badge-danger">falta alguno de los datos</span> ');
        $('#FAMError').removeClass('hidden');
    } else {
        $('#FAMError').addClass('hidden');
        var porcent = (porcentajeVT * 0.01);
        UtBruta = ventaMen * porcent;
        // b4 - (b15 +b16 b.. b18)

        UtBruta = parseFloat(UtBruta);

        UtOp = UtBruta - (parseFloat(rentaPiso) +
            parseFloat(transporte) +
            parseFloat(telefono) + parseFloat(gastosG));

        UtOp = parseFloat(UtOp);
        parseFloat(eduysalud)
        TGFAM = parseFloat(alimentacion) +
            parseFloat(eduysalud) +
            parseFloat(tfamiliar) +
            parseFloat(gas) +
            parseFloat(gastoGFAM) +
            parseFloat(rentaFam) +
            parseFloat(luzaguapredial) +
            parseFloat(telefonofijo);

        UtOp = parseFloat(UtOp).toFixed();
        TGFAM = parseFloat(TGFAM).toFixed();
        UtBruta = parseFloat(UtBruta).toFixed();

        $('#UtBruta').val(UtBruta);
        $('#UtOp').val(UtOp);

        $('#TGFam').val(TGFAM);


        $('#UtBruta_').val(UtBruta);
        $('#UtOp_').val(UtOp);

        $('#TGFam_').val(TGFAM);
        $('#estadoResStatusBg_').html('<span class="badge badge-success pull-right">Listo</span> ');


    }
}
