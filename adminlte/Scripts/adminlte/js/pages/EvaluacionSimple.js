function SendEvEcSimple() {
    let id_documento, id_sucursal, id_cliente, id_grupo,
        fecha, secuencia, venta_promedio_lunes, venta_promedio_martes
        , venta_promedio_miercoles, venta_promedio_jueves, venta_promedio_viernes, venta_promedio_sabado
        , venta_promedio_domingo, venta_promedio_semanal, venta_promedio_mensual, Venta_mensual,
        porcentaje_utilidad_brutas_ventas
        , utilidad_bruta_sobreventas, renta_derecho_piso_cooperacion, transporte, telefono
        , alimentacion, eduacacion_salud, trasporte_familiar, gastos_grales_familiares
        , gas, renta, luz_predial, telefonia_familiar, total_gastos_familiares
        , capacidad_pago
        , pago_mensual_otras_microfinancieras,
        cuota_cliente_pagar_mensual
        , monto_propuesto
        , cuota_cubierta
        , caja_activo, caja_pasivo, ahorro_bancos_activo
        , cuentas_pagar_negocio_activo, inventarios_activo
        , cuentas_pagar_fam_activo,
        deudas_otras_instituciones_activo
        , bienes_negocio
        , bienes_propios

        , otros_ingresos_valorTotal
        , numero_hijos_trabajan
        , Numero_hijos_edad_escolar
        , monto_solicitado_cliente
        , monto_maximo_trabajado
        , plazo_propuesto_cliente
        , comentarios_observaciones_adicionales_asesor
        , nombre_firma_asesor, tandas
        , firma_cliente;

    venta_promedio_lunes = $('#lun').val(),
        venta_promedio_martes = $('#mart').val(),
        venta_promedio_miercoles = $('#mier').val(),
        venta_promedio_jueves = $('#juev').val(),
        venta_promedio_viernes = $('#vier').val(),
        venta_promedio_sabado = $('#sab').val(),
        venta_promedio_domingo = $('#domin').val(),
        venta_promedio_semanal = $('#promSemanal_').val(),
        venta_promedio_mensual = $('#promMensual_').val(),
        utilidad_bruta_sobreventas = $('#UtBruta_').val(),
        renta_derecho_piso_cooperacion = $('#rentaPiso').val(),
        transporte = $('#transporte').val(),
        telefono = $('#telefono').val(),
        alimentacion = $('#alimentacion').val();
    eduacacion_salud = $('#eduysalud').val();
    trasporte_familiar = $('#tfamiliar').val();
    gastos_grales_familiares = $('#gastoGFAM').val();
    gas = $('#gas').val();
    renta = $('#rentaFam').val();
    luz_predial = $('#luzaguapredial').val();
    telefonia_familiar = $('#telefonofijo').val();
    total_gastos_familiares = $('#TGFam').val();
    pago_mensual_otras_microfinancieras = $('#OMFT_').val();
    cuota_cliente_pagar_mensual = $('#cuotaMensual_').val();
    monto_propuesto = $('#monto_propuesto').val();
    cuota_cubierta = $('#cuota_cubierta').val();
    caja_activo = $('#TActivos_').val();
    caja_pasivo = $('#TPasivos_').val();
    ahorro_bancos_activo = $('#ahorrobancos').val();
    cuentas_pagar_negocio_activo = $('#cuentas').val();

    inventarios_activo = $('#inventarios').val();
    cuentas_pagar_fam_activo = $('#cobrarypagar').val();
    deudas_otras_instituciones_activo = $('#otrasInst').val();
    tandas = $('#tandas').val();
    bienes_negocio = $('#BienesNegocio_').val();
    bienes_propios = $('#BienesNegocio_').val();

    otros_ingresos_valorTotal = $('#OTIng_').val();
    numero_hijos_trabajan = $('#hT_').val();
    Numero_hijos_edad_escolar = $('#hNT_').val();
    monto_solicitado_cliente = $('#monto_solicitado_cliente').val();
    monto_maximo_trabajado = $('#monto_maximo_trabajado').val();
    plazo_propuesto_cliente = $('#plazo_propuesto_cliente').val();
    comentarios_observaciones_adicionales_asesor = $('#comentariosop').val();
    porcentaje_utilidad_brutas_ventas = $('#porcentajeVT').val();

    capacidadPago = $('#capacidadPago').val();

    if (venta_promedio_lunes == null ||
        venta_promedio_martes == null ||
        venta_promedio_miercoles == null ||
        venta_promedio_jueves == null ||
        venta_promedio_viernes == null ||
        venta_promedio_sabado == null ||
        venta_promedio_domingo == null ||
        venta_promedio_semanal == null ||
        venta_promedio_mensual == null ||
        utilidad_bruta_sobreventas == null ||
        renta_derecho_piso_cooperacion == null ||
        transporte == null ||
        telefono == null ||
        alimentacion == null ||
        eduacacion_salud == null ||
        trasporte_familiar == null ||
        gastos_grales_familiares == null ||
        gas == null ||
        renta == null ||
        luz_predial == null ||
        telefonia_familiar == null ||
        total_gastos_familiares == null ||
        pago_mensual_otras_microfinancieras == null ||
        cuota_cliente_pagar_mensual == null ||
        monto_propuesto == null ||
        cuota_cubierta == null ||
        caja_activo == null ||
        caja_pasivo == null ||
        ahorro_bancos_activo == null ||
        cuentas_pagar_negocio_activo == null ||
        inventarios_activo == null ||
        cuentas_pagar_fam_activo == null ||
        deudas_otras_instituciones_activo == null ||
        tandas == null ||
        bienes_negocio == null ||
        bienes_propios == null ||
        otros_ingresos_valorTotal == null ||
        numero_hijos_trabajan == null ||
        Numero_hijos_edad_escolar == null ||
        monto_solicitado_cliente == null ||
        monto_maximo_trabajado == null ||
        plazo_propuesto_cliente == null ||
        capacidadPago == null ||
        capacidadPago == null ||
        porcentaje_utilidad_brutas_ventas == null ||
        porcentaje_utilidad_brutas_ventas == 0 ||
        venta_promedio_lunes.length == 0 ||
        venta_promedio_lunes.length == 0 ||
        venta_promedio_martes.length == 0 ||
        venta_promedio_miercoles.length == 0 ||
        venta_promedio_jueves.length == 0 ||
        venta_promedio_viernes.length == 0 ||
        venta_promedio_sabado.length == 0 ||
        venta_promedio_domingo.length == 0 ||
        venta_promedio_semanal.length == 0 ||
        venta_promedio_mensual.length == 0 ||
        utilidad_bruta_sobreventas.length == 0 ||
        renta_derecho_piso_cooperacion.length == 0 ||
        transporte.length == 0 ||
        telefono.length == 0 ||
        alimentacion.length == 0 ||
        eduacacion_salud.length == 0 ||
        trasporte_familiar.length == 0 ||
        gastos_grales_familiares.length == 0 ||
        gas.length == 0 ||
        renta.length == 0 ||
        luz_predial.length == 0 ||
        telefonia_familiar.length == 0 ||
        total_gastos_familiares.length == 0 ||
        pago_mensual_otras_microfinancieras.length == 0 ||
        cuota_cliente_pagar_mensual.length == 0 ||
        monto_propuesto.length == 0 ||
        cuota_cubierta.length == 0 ||
        caja_activo.length == 0 ||
        caja_pasivo.length == 0 ||
        ahorro_bancos_activo.length == 0 ||
        cuentas_pagar_negocio_activo.length == 0 ||
        inventarios_activo.length == 0 ||
        cuentas_pagar_fam_activo.length == 0 ||
        deudas_otras_instituciones_activo.length == 0 ||
        tandas.length == 0 ||
        bienes_negocio.length == 0 ||
        bienes_propios.length == 0 ||
        otros_ingresos_valorTotal.length == 0 ||
        numero_hijos_trabajan.length == 0 ||
        Numero_hijos_edad_escolar.length == 0 ||
        monto_solicitado_cliente.length == 0 ||
        monto_maximo_trabajado.length == 0 ||
        plazo_propuesto_cliente.length == 0
    ) {
        alert('falta info');

    } else {

        let data = {
            venta_promedio_lunes: venta_promedio_lunes,
            venta_promedio_martes: venta_promedio_martes,
            venta_promedio_miercoles: venta_promedio_miercoles,
            venta_promedio_jueves: venta_promedio_jueves,
            venta_promedio_viernes: venta_promedio_viernes,
            venta_promedio_sabado: venta_promedio_sabado,
            venta_promedio_domingo: venta_promedio_domingo,
            venta_promedio_semanal: venta_promedio_semanal,
            venta_promedio_mensual: venta_promedio_mensual,
            utilidad_bruta_sobreventas: utilidad_bruta_sobreventas,
            renta_derecho_piso_cooperacion: renta_derecho_piso_cooperacion,
            transporte: transporte,
            telefono: telefono,
            alimentacion: alimentacion,
            eduacacion_salud: eduacacion_salud,
            trasporte_familiar: trasporte_familiar,
            gastos_grales_familiares: gastos_grales_familiares,
            gas: gas,
            renta: renta,
            luz_predial: luz_predial,
            telefonia_familiar: telefonia_familiar,
            total_gastos_familiares: total_gastos_familiares,
            pago_mensual_otras_microfinancieras: pago_mensual_otras_microfinancieras,
            cuota_cliente_pagar_mensual: cuota_cliente_pagar_mensual,
            monto_propuesto: monto_propuesto,
            cuota_cubierta: cuota_cubierta,
            caja_activo: caja_activo,
            caja_pasivo: caja_pasivo,
            ahorro_bancos_activo: ahorro_bancos_activo,
            cuentas_pagar_negocio_activo: cuentas_pagar_negocio_activo,
            inventarios_activo: inventarios_activo,
            cuentas_pagar_fam_activo: cuentas_pagar_fam_activo,
            deudas_otras_instituciones_activo: deudas_otras_instituciones_activo,
            tandas: tandas,
            bienes_negocio: bienes_negocio,
            bienes_propios: bienes_propios,
            otros_ingresos_valorTotal: otros_ingresos_valorTotal,
            numero_hijos_trabajan: numero_hijos_trabajan,
            Numero_hijos_edad_escolar: Numero_hijos_edad_escolar,
            monto_solicitado_cliente: monto_solicitado_cliente,
            monto_maximo_trabajado: monto_maximo_trabajado,
            plazo_propuesto_cliente: plazo_propuesto_cliente,
            capacidad_pago: capacidadPago,
            comentarios_observaciones_adicionales_asesor: comentarios_observaciones_adicionales_asesor,
            porcentaje_utilidad_brutas_ventas: porcentaje_utilidad_brutas_ventas
        }


        $.ajax({
            url: `/Evaluaciones/InsertEvaluacionSimple/`,
            type: "Post",
            dataType: "json",
            data: data,
            success: function (response) {



                //
                $("#evalbtn").addClass("bg-success");
                //btnsendInsert
                $('#btnsendInsert').prop("disabled", true);

                $('#evaTxt').html('<span class="badge badge-success">Listo</span>');
            },

            error: function (jqXHR, textStatus, err) {
                //$('#myModalLabel').append(`error: - ${err}`);
                console.log(jqXHR);
                console.log(textStatus);
                console.log(err);

                alert(err + '  ' + textStatus);
            }
        });


    }


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
    //OMFT_
    var otrasMicroF = $("#OMFT_").val();

    if (otrosIngresos > utilidadOperativa) {
        $("#cpPagodiv").html('<span class="badge badge-success pull-right">OI supera utilidad</span> ');
        $("#capacidadPago").val('no tiene capacidad');
    } else {
        // utilidad op - gastosTFam + TotrosIng - pagoaotras instituciones
        $("#cpPagodiv").html(' ');
        let capP = parseInt(utilidadOperativa) - parseInt(TGFamval) + parseInt(otrosIngresos) - parseInt(otrasMicroF);
        $("#capacidadPago").val(capP);
        $('#btnsendInsert').prop("disabled", false);
    }
}

function asignarCCuota_() {
    var capacidadPago = $("#tHcred_CDPago").val();
    var cuota = $("#tHcred_CUOTA").val();
    let valx = parseInt(capacidadPago) / parseInt(cuota);
    valx = valx.toFixed(2);
    $("#tHcred_CCuota").val(valx);
}
//historial crediticio
$.ajax({
    url: `/Evaluaciones/HistorialCrediticio_ListJson/` + 1,
    type: "GET",
    dataType: "json",

    success: function (response) {

        /*

         implementar respuesta del metodo pendiente
         */


        var resplength = response.length;
        if (resplength == 0) {
            //hActualT
            $("#hActualT").html("Este documento no cuenta aun con un historial");
        } else {


            for (let i = 0; i <= resplength; i++) {
                document.getElementById('HActT').innerHTML += `



                                    <tr>
                                        <th scope="col">

                                            `+ response[i].secuencia + `
                                        </th>
                                        <th scope="col">

                                            `+ response[i].monto + `
                                        </th>

                                        <th scope="col">

                                            `+ response[i].plazo + `
                                        </th>
                                        <th scope="col">


                                            `+ response[i].CuotaMensual + `
                                        </th>
                                        <th scope="col">

                                            `+ response[i].incrementoMonto + `
                                        </th>
                                        <th scope="col">

                                            `+ response[i].incrementoCuota + `
                                        </th>
                                        <th scope="col">


                                            `+ response[i].disponobleMaximoreportadoporcliente + `
                                        </th>
                                        <th scope="col">

                                            `+ response[i].utilidadOperativa + `
                                        </th>
                                        <th scope="col">


                                            `+ response[i].capDePagoMensual + `
                                        </th>
                                        <th scope="col">

                                            `+ response[i].coberturadeCuota + `
                                        </th>


                                    </tr>
                                                        `;
            }

        }

    },

    error: function (jqXHR, textStatus, err) {
        //$('#myModalLabel').append(`error: - ${err}`);
        console.log(jqXHR);
        console.log(textStatus);
        console.log(err);

        alert(err + '  ' + textStatus);
    }
});
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
            url: `/Evaluaciones/InsertHistorialCrediticio`,
            type: "POST",
            data: data,
            dataType: "json",

            success: function (response) {

                /*

                 implementar respuesta del metodo pendiente
                 */



                $.ajax({
                    url: `/Evaluaciones/HistorialCrediticio_ListJson/` + 1,
                    type: "GET",
                    dataType: "json",

                    success: function (response) {

                        var resplength = response.length;
                        if (resplength == 0) {
                            //hActualT
                            $("#hActualT").html("Este documento no cuenta aun con un historial");
                        } else {


                            for (let i = 0; i <= resplength; i++) {
                                document.getElementById('HActT').innerHTML = `



                                                                    <tr>
                                                                        <th scope="col">

                                                                            `+ response[i].secuencia + `
                                                                        </th>
                                                                        <th scope="col">

                                                                            `+ response[i].monto + `
                                                                        </th>

                                                                        <th scope="col">

                                                                            `+ response[i].plazo + `
                                                                        </th>
                                                                        <th scope="col">


                                                                            `+ response[i].CuotaMensual + `
                                                                        </th>
                                                                        <th scope="col">

                                                                            `+ response[i].incrementoMonto + `
                                                                        </th>
                                                                        <th scope="col">

                                                                            `+ response[i].incrementoCuota + `
                                                                        </th>
                                                                        <th scope="col">


                                                                            `+ response[i].disponobleMaximoreportadoporcliente + `
                                                                        </th>
                                                                        <th scope="col">

                                                                            `+ response[i].utilidadOperativa + `
                                                                        </th>
                                                                        <th scope="col">


                                                                            `+ response[i].capDePagoMensual + `
                                                                        </th>
                                                                        <th scope="col">

                                                                            `+ response[i].coberturadeCuota + `
                                                                        </th>


                                                                    </tr>
                                                                                        `;
                            }

                        }

                    },

                    error: function (jqXHR, textStatus, err) {
                        //$('#myModalLabel').append(`error: - ${err}`);
                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(err);

                        alert(err + '  ' + textStatus);
                    }
                });
                $("#THCREDText").html("<span class='pull-right badge badge-danger'>Registro agreado al historial</span>");
                $("#histobtn").addClass("bg-success active");
                $('#histTxt').html('<span class="badge badge-success">Listo</span>');



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

//historial crediticio end


//scoring crediticio end
/*$.ajax({
    url: `/SCORING/SCORING_PREGUNTAS_ListJson/1`,
    type: "GET",
    dataType: "json",
    //contentType: "application/json; charset=utf-8",

    success: function (response) {
        //.log(response);

        var rl = response.length;
        $("#nPreguntas").val(rl);
        let cont1 = 1;
        for (var i = 0; i < rl; i++) {

            document.getElementById('scoring_holder').innerHTML +=
                `
                           <div> <b>${response[i].pregunta}</b>
                                <br>
                                    <h5>Respuestas:</h5>
                                <hr>
                            <div id="scoring_holder_ans${response[i].id}"> </div>

                            <hr>
                        </div>
                        `;
            let id_sh = `scoring_holder_ans${response[i].id}`;
            let id_scoring = response[i].id


            callScoringAns(id_sh, id_scoring, cont1);
            cont1 = cont1 + 1;
        }
    },

    error: function (jqXHR, textStatus, err) {
        //$('#myModalLabel').append(`error: - ${err}`);
        console.log(jqXHR);
        console.log(textStatus);
        console.log(err);

        alert(err);

    }

});*/
function callScoringAns(id_sh, id_scoring, cont) {

    $.ajax({
        url: `/scoring/SCORING_RESPUESTAS_IDP/` + id_scoring,
        type: "GET",
        dataType: "json",
        //contentType: "application/json; charset=utf-8",

        success: function (response) {
            //.log(response);
            let idsh = "scoring_holder_ans" + id_scoring;
            var rl = response.length;

            for (var i = 0; i < rl; i++) {
                document.getElementById(idsh).innerHTML +=
                    `
                                                <div>
                                                    <label class="checkbox-inline">
                                                    <input type="radio"
                                                            name="checkbox_${cont}"
                                                            value="${response[i].valor}"> ${response[i].respuesta}</label>

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

//scoring end

//evaluacion
$.ajax({
    url: `/scoring/SCORING_PREGUNTAS_ListJson/2`,
    type: "GET",
    dataType: "json",
    //contentType: "application/json; charset=utf-8",

    success: function (response) {
        //.log(response);

        var rl = response.length;
        $("#nPreguntasPreg").val(rl);

        var cont = 1;
        for (var i = 0; i < rl; i++) {
            let imasuno = i + 1;
            document.getElementById('scoring_holder_preguntas').innerHTML +=
                `
                    <div> <b>${response[i].pregunta}</b>
                            <br>
                                <h5>Respuestas:</h5>
                            <hr>
                        <div id="2scoring_holder_ans_preguntas${response[i].id}"> </div>

                        <hr>
                    </div>
                    ` ;
            let id_sh = `2scoring_holder_ans_preguntas${response[i].id}`;
            let id_scoring = response[i].id;

            callEvCual(id_sh, id_scoring, cont);

            cont = cont + 1;
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

function callEvCual(id_sh, id_n, cont) {

    $.ajax({
        url: `/scoring/SCORING_RESPUESTAS_IDP/` + id_n,
        type: "GET",
        dataType: "json",
        //contentType: "application/json; charset=utf-8",

        success: function (response) {
            //.log(response);
            let idsh = id_sh;
            var rl = response.length;



            for (var i = 0; i < rl; i++) {

                document.getElementById(idsh).innerHTML +=
                    `
                                                                                                                                <div>
                            <label class="checkbox-inline">
                            <input type="radio"
                                    name="2checkbox_${cont}"
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
function calificacionCalc() {
    const np = $('#nPreguntasPreg').val();



    var nt_2 = 0;
    for (var i = 0; i < np; i++) {
        let ni = i + 1;
        let getclass = "2checkbox_" + ni;
        let val_ = 0;
        let st = `input[name='${getclass}']:checked`;
        try {
            val_ = $(st).val();

        } catch (e) {
            console.log(e);
        }


        debugger
        val_ = parseFloat(val_);
        nt_2 = nt_2 + val_;
        nt_2 = parseFloat(nt_2);
    }

    debugger

    if (isNaN(nt_2)) {

        $("#erroresCal_preg").removeClass("hidden");

        $("#erroresCal_preg").html('faltan algunas preguntas por contestar');

    } else {


        nt_2 = nt_2 / np;
        //alert(nt);
        nt_2 = parseFloat(nt_2).toFixed(2);
        $("#calficiacion_preg").html('<input id="calficiacion_preg_2" type="text" value="' + nt_2 + '" disabled />');
        let inputcalificacion2 = $("#calficiacion_preg_2").val();

        let data = {
            id_check_list: 1,
            id_sucursal: 1,
            id_cliente: 1,
            id_catalogo: 2,
            calificacion: inputcalificacion2,
            secuencia: 1,
            numero_evaluacion: 1
        }


        $.ajax({
            url: `/scoring/INSERT_SCORING_RespuestasDocumento/`,
            type: "POST",
            dataType: "json",
            data: data,
            success: function (response) {



            },

            error: function (jqXHR, textStatus, err) {
                //$('#myModalLabel').append(`error: - ${err}`);
                console.log(jqXHR);
                console.log(textStatus);
                console.log(err);

                alert(err + '  ' + textStatus);
            }
        });


        $('#calgrupbtn').addClass('bg-success');
        window.scrollTo(0, 0);

        $('#caligruTxt').html('<span class="badge badge-success">Listo</span>');

    }



}
function calificacionCalcScor() {

    const np = $('#nPreguntas').val();
    let nt = 0;
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
        $("#calficiacion_Sco").html('<input type="text" id="calficiacion_Sco_input" value="' + nt + '" disabled />');

        let inputcalificacion = $("#calficiacion_Sco_input").val();
        let data = {
            id_check_list: 1,
            id_sucursal: 1,
            id_cliente: 1,
            id_catalogo: 1,
            calificacion: inputcalificacion,
            secuencia: 1,
            numero_evaluacion: 1
        }


        $.ajax({
            url: `/scoring/INSERT_SCORING_RespuestasDocumento/`,
            type: "POST",
            dataType: "json",
            data: data,
            success: function (response) {


                $("#socringbtn").addClass("bg-success");
            },

            error: function (jqXHR, textStatus, err) {
                //$('#myModalLabel').append(`error: - ${err}`);
                console.log(jqXHR);
                console.log(textStatus);
                console.log(err);

                alert(err + '  ' + textStatus);
            }
        });

        window.scrollTo(0, 0);
        $('#scorTxt').html('<span class="badge badge-success">Listo</span>');

    }



}

function AddRowOMFT() {

    document.getElementById("OMicroT").innerHTML += `
                                                                                                                                                                                        <tr>
                                                                                                                                                                                                <td><input type="text" class="form-control" placeholder="Descripcion" name="OMicro_desc" value="" /></td>
                                                                                                                                                                                        <td><input type="text" class="form-control" name="OMicro_val" value="0" /></td>
                                                                                                                                                                                        </tr>`;

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
function CalcOBienes() {
    let OIng = 0;
    var inputsTOI = $("[name='TOIng_val']");
    var hT = $('#hT').val();
    var hNT = $('#hNT').val();


    inputsTOI.each(function () {
        OIng = OIng + parseFloat($(this).val());

    });

    $('#hT_').val(hT);
    $('#hNT_').val(hNT);
    $('#OTIng_').val(OIng);
    $('#OTING').val(OIng);
    $('#OtrosBienesStatusBg_').html('<span class="badge badge-success pull-right">Listo</span> ');
}
function AddRowOBT() {

    document.getElementById("TOIng").innerHTML += `
            <tr>

                <td><input type="text" class="form-control"  placeholder="Descripcion" name="tBienes_desc" value="" /></td>
                <td><input type="text" class="form-control" name="TOIng_val" value="0" /></td>
            </tr>`;

}
