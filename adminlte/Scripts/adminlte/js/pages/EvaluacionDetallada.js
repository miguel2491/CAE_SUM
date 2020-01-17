function InsertInfoOperativa() {

    let FAMIEMPRESA_IngresosT, FAMIEMPRESA_EgresosT,
        TotalUtilidadOpNeg, TotalUtilidadOpNegPorcentual,
        TOTALDEGASTOSDENEGOCIO, TOTALDEGASTOSDEFAMILIA, aportacions_comp,
        TPromUtilidad, TUtilidadB, TCMensual, SumaCuotasFamiEmpresa, //pagoMensualtandaFamiEmpresa,
        cuotasDeudasFamiEmpresa, pagoMensualtandaFamiEmpresa, capacidadPago,
        disponible_mensual_maximo_reportado_cliente, ndeevaluacion, actividad,
        monto_solicitar, numero_evaluacion, sectoreconomico,
        ultimomontooperado,
        TVMensual, mensualBaja, mensualAlta, secuenciabase, ventaDiariaBaja, otros_ing;

    capacidadPago = $('#capacidadDePago').val();

    FAMIEMPRESA_IngresosT = $('#FAMIEMPRESA_IngresosT').val();
    FAMIEMPRESA_EgresosT = $('#FAMIEMPRESA_EgresosT').val();
    TotalUtilidadOpNeg = $('#TotalUtilidadOpNeg').val(); TotalUtilidadOpNegPorcentual = $('#TotalUtilidadOpNegPorcentual').val();
    TOTALDEGASTOSDENEGOCIO = $('#TOTALDEGASTOSDENEGOCIO').val(); TOTALDEGASTOSDEFAMILIA = $('#TOTALDEGASTOSDEFAMILIA').val();
    TPromUtilidad = $('#TPromUtilidad').val(); TUtilidadB = $('#TUtilidadB').val(); TCMensual = $('#TCMensual').val();
    TVMensual = $('#TVMensual').val(); mensualBaja = $('#mensualBaja').val(); mensualAlta = $('#mensualAlta').val();
    ventaDiariaBaja = $('#ventaDiariaBaja').val();
    otros_ing = $('#otros_ing').val(); aportacions_comp = $('#aportacions_comp').val();
    SumaCuotasFamiEmpresa = $('#SumaCuotasFamiEmpresa').val(); cuotasDeudasFamiEmpresa = $('#cuotasDeudasFamiEmpresa').val();
    pagoMensualtandaFamiEmpresa = $('#pagoMensualtandaFamiEmpresa').val();
    ndeevaluacion = $('#ndeevaluacion').val();
    actividad = $('#actividad').val();
    monto_solicitar = $('#montoasolicitar').val();
    secuenciabase = $('#secuenciabase').val();
    sectoreconomico = $('#sectoreconomico').val();
    ultimomontooperado = $('#ultimomontooperado').val();
    disponible_mensual_maximo_reportado_cliente = $('#disponible_mensual_maximo_reportado_cliente').val();
    let lun, mart, mier, juev, vier, sab, domin;

    lun = $('#lun').val();
    mart = $('#mart').val();
    mier = $('#mier').val();
    juev = $('#juev').val();
    vier = $('#vier').val();
    sab = $('#sab').val();
    domin = $('#domin').val();

    let enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, novimebre, dicimebre;
    enero = $('#enero').val();
    febrero = $('#febrero').val();
    marzo = $('#marzo').val();
    abril = $('#abril').val();
    mayo = $('#mayo').val();
    junio = $('#junio').val();
    julio = $('#julio').val();
    agosto = $('#agosto').val();
    septiembre = $('#septiembre').val();
    octubre = $('#octubre').val();
    novimebre = $('#noviembre').val();
    dicimebre = $('#diciembre').val();

    let semanal = parseInt(lun) +
        parseInt(mart) +
        parseInt(mier) +
        parseInt(juev) +
        parseInt(vier) +
        parseInt(sab) +
        parseInt(domin)
        ;

    semanal = parseFloat(semanal).toFixed(2);

    let data = {
        //datos de semana
        venta_semanal_lunes: lun,
        venta_Semanal_martes: mart,
        venta_semanal_miercoles: mier,
        venta_Semanal__jueves: juev,
        venta_semanal_viernes: vier,
        venta_semanal_sabado: sab,
        venta_semanal_domingo: domin,
        semanal: semanal,
        venta_mensual_enero: enero,
        venta_mensual_febrero: febrero,
        venta_mensual_marzo: marzo,
        venta_mensual_abril: abril,
        venta_mensual_mayo: mayo,
        venta_mensual_junio: junio,
        venta_mensual_julio: julio,
        venta_mensual_agosto: agosto,
        venta_mensual_septimebre: septiembre,
        venta_mensual_octubre: octubre,
        venta_mensual_noviembre: novimebre,
        venta_mensual_diciembre: dicimebre,
        utilidad_bruta_negocio_capital: TUtilidadB,
        utilidad_bruta_negocio_porcentual: TPromUtilidad,
        utilidad_operativa_negocio_capital: TotalUtilidadOpNeg,
        utilidad_operativa_negocio_porcentual: TotalUtilidadOpNegPorcentual,
        ingresos_negocio: TOTALDEGASTOSDENEGOCIO,
        otros_ingresos_cliente: otros_ing,
        aportaciones_familiar_comprobables: aportacions_comp,
        ingresos_totales: FAMIEMPRESA_IngresosT,
        gastos_familia: TOTALDEGASTOSDEFAMILIA,
        suma_cuotas_deudas_otras_microfinancieras: SumaCuotasFamiEmpresa,
        cuotas_deudas_acreedores_diversos: cuotasDeudasFamiEmpresa,
        pago_mensual_portandas: pagoMensualtandaFamiEmpresa,
        egresos_totales: FAMIEMPRESA_EgresosT,
        disponible_mensual_maximo_reportado_cliente: disponible_mensual_maximo_reportado_cliente,
        capacidad_pago: capacidadPago,
        gastos_operativos_negocio_total: TOTALDEGASTOSDENEGOCIO,
        gastos_familia_total: TOTALDEGASTOSDEFAMILIA,
        numero_evaluacion: ndeevaluacion,
        actividad_especifica: actividad,
        secuencia_base: secuenciabase,
        monto_solicitar: monto_solicitar,
        sector_economico: sectoreconomico,
        ultimo_monto_operado: ultimomontooperado
    }
    
    $.ajax({
        url: '/Evaluaciones/InsertInformacionOperativaDetallada/',
        type: "POST",
        dataType: "json",
        data: data,
        //contentType: "application/json; charset=utf-8",

        success: function (response) {
            //.log(response);
            $("#infopatbtn").addClass("bg-success");
            $('#evaTxt').html('<span class="badge badge-success">Listo</span>');
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

function montoSolicitado() {



    let FAMIEMPRESA_IngresosT, FAMIEMPRESA_EgresosT,
        TotalUtilidadOpNeg, TotalUtilidadOpNegPorcentual,
        TOTALDEGASTOSDENEGOCIO, TOTALDEGASTOSDEFAMILIA, aportacions_comp
    TPromUtilidad, TUtilidadB, TCMensual, SumaCuotasFamiEmpresa, pagoMensualtandaFamiEmpresa
    cuotasDeudasFamiEmpresa, pagoMensualtandaFamiEmpresa,
        TVMensual, mensualBaja, mensualAlta, ventaDiariaBaja, otros_ing;


    FAMIEMPRESA_IngresosT = $('#FAMIEMPRESA_IngresosT').val();
    FAMIEMPRESA_EgresosT = $('#FAMIEMPRESA_EgresosT').val();
    TotalUtilidadOpNeg = $('#TotalUtilidadOpNeg').val(); TotalUtilidadOpNegPorcentual = $('#TotalUtilidadOpNegPorcentual').val();
    TOTALDEGASTOSDENEGOCIO = $('#TOTALDEGASTOSDENEGOCIO').val(); TOTALDEGASTOSDEFAMILIA = $('#TOTALDEGASTOSDEFAMILIA').val();
    TPromUtilidad = $('#TPromUtilidad').val(); TUtilidadB = $('#TUtilidadB').val(); TCMensual = $('#TCMensual').val();
    TVMensual = $('#TVMensual').val(); mensualBaja = $('#mensualBaja').val(); mensualAlta = $('#mensualAlta').val();
    ventaDiariaBaja = $('#ventaDiariaBaja').val();
    otros_ing = $('#otros_ing').val(); aportacions_comp = $('#aportacions_comp').val();
    SumaCuotasFamiEmpresa = $('#SumaCuotasFamiEmpresa').val(); cuotasDeudasFamiEmpresa = $('#cuotasDeudasFamiEmpresa').val();
    pagoMensualtandaFamiEmpresa = $('#pagoMensualtandaFamiEmpresa').val();
    if (
        FAMIEMPRESA_IngresosT.length == 0 || FAMIEMPRESA_IngresosT == ' ' ||
        FAMIEMPRESA_EgresosT.length == 0 || FAMIEMPRESA_EgresosT == ' ' ||
        TotalUtilidadOpNeg.length == 0 || TotalUtilidadOpNeg == ' ' ||
        TotalUtilidadOpNegPorcentual.length == 0 || TotalUtilidadOpNegPorcentual == ' ' ||
        TOTALDEGASTOSDENEGOCIO.length == 0 || TOTALDEGASTOSDENEGOCIO == ' ' ||
        TUtilidadB.length == 0 || TUtilidadB == ' ' ||
        TCMensual.length == 0 || TCMensual == ' ' ||
        TVMensual.length == 0 || TVMensual == ' ' ||
        mensualBaja.length == 0 || mensualBaja == ' ' ||
        mensualAlta.length == 0 || mensualAlta == ' ' ||
        TOTALDEGASTOSDEFAMILIA.length == 0 || TOTALDEGASTOSDEFAMILIA == ' ' ||
        TPromUtilidad.length == 0 || TPromUtilidad == ' ' ||
        ventaDiariaBaja.length == 0 || ventaDiariaBaja == ' '
    ) {
        $('#errorAddAll').html('<span class="badge badge-danger">Error faltan datos</span>');
        $('#montoasolicitar').val(' ');
        $('#montoasolicitar').focus();
        //errorAddAll
    } else {
        //cuotasDeudasFamiEmpresa

        //TotalUtilidadOpNeg - TOTALDEGASTOSDEFAMILIA + otros_ing + aportacions_comp - SumaCuotasFamiEmpresa - cuotasDeudasFamiEmpresa -pagoMensualtandaFamiEmpresa

        let capacidadPago = parseInt(TotalUtilidadOpNeg) - parseInt(TOTALDEGASTOSDEFAMILIA) + parseInt(otros_ing)
            + parseInt(aportacions_comp) - parseInt(SumaCuotasFamiEmpresa) - parseInt(cuotasDeudasFamiEmpresa) - parseInt(pagoMensualtandaFamiEmpresa);
        capacidadPago = parseFloat(capacidadPago).toFixed(2);
        debugger


        $('#capacidadDePago').val(capacidadPago);
        $('#addBtn').removeAttr('disabled');

    }

}
function IngeMenFa() {
    let ing_neg, aportacions_comp, otros_ing;
    otros_ing = $('#otros_ing').val();
    ing_neg = $('#ing_neg').val();
    aportacions_comp = $('#aportacions_comp').val();


    let Total = parseInt(otros_ing) + parseInt(ing_neg) + parseInt(aportacions_comp);
    Total = parseFloat(Total).toFixed(2);

    $('#FAMIEMPRESA_IngresosT').val(Total);
}

function AddGmensualDeudas() {
    let GastosFamFamiEmpresa, SumaCuotasFamiEmpresa, cuotasDeudasFamiEmpresa, pagoMensualtandaFamiEmpresa;

    pagoMensualtandaFamiEmpresa = $('#pagoMensualtandaFamiEmpresa').val();
    GastosFamFamiEmpresa = $('#GastosFamFamiEmpresa').val();
    cuotasDeudasFamiEmpresa = $('#cuotasDeudasFamiEmpresa').val();
    SumaCuotasFamiEmpresa = $('#SumaCuotasFamiEmpresa').val();

    let tTotal = 0;
    tTotal = parseInt(pagoMensualtandaFamiEmpresa) + parseInt(SumaCuotasFamiEmpresa) +
        parseInt(cuotasDeudasFamiEmpresa) + parseInt(GastosFamFamiEmpresa);

    tTotal = parseFloat(tTotal).toFixed(2);
    debugger
    $('#FAMIEMPRESA_EgresosT').val(tTotal);
}
function calcCM(id) {

    //compraMen_1
    var idg = id.substr(4, id.length);
    let cvende, punidad, ccompra;

    cvende = $('#can_' + idg).val();
    punidad = $('#pdv_' + idg).val();
    ccompra = $('#pdc_' + idg).val();

    let frecuencia = $('#unidadsemanal_' + idg).val();

    let valxx = parseFloat(cvende) * parseFloat(ccompra) * parseFloat(frecuencia);


    //debugger
    $('#compraMen_' + idg).val(valxx);
    let ventM = $('#ventMen_' + idg).val();
    let compM = $('#compraMen_' + idg).val();
    //utilidadB_1 ventMen_1 compraMen_1 utilidadB_1

    let utilidadB = parseFloat(ventM) - parseFloat(compM);
    $('#utilidadB_' + idg).val(utilidadB);
    //porcentajedeUtB_1

    let porcentajedeUtb = (utilidadB * 100) / ventM;
    porcentajedeUtb = porcentajedeUtb.toFixed(2);
    $('#porcentajedeUtB_' + idg).val(porcentajedeUtb);

}




function calDinamicaDeVenta() {
    let ventamensual, compramenusal, utilidadB, utilidadProm, producto_dinam;

    producto_dinam = $('input[name=producto_dinam]');
    ventamensual = $("input[name='ventMen']");
    compramenusal = $("input[name='compraMen']");
    utilidadB = $("input[name='utilidadB']");
    utilidadProm = $("input[name='porcentajedeUtB']");

    let vM = 0;
    for (var i = 0; i < ventamensual.length; i++) {
        vM = vM + parseInt(ventamensual[i].value);
    }

    $("#TVMensual").val(vM);
    //TCMensual
    let cM = 0;
    for (var i = 0; i < compramenusal.length; i++) {
        cM = cM + parseInt(compramenusal[i].value);
    }
    $("#TCMensual").val(cM);
    //TUtilidadB
    let utB = 0;
    for (var i = 0; i < utilidadB.length; i++) {
        utB = utB + parseInt(utilidadB[i].value);
    }
    $("#TUtilidadB").val(utB);
    $("#ing_neg").val(utB);
    //TPromUtilidad

    utilidadProm = ((vM - cM) / vM) * 100;
    $("#TPromUtilidad").val(utilidadProm.toFixed(2));


    var xT = document.getElementById("tdinamicaventas").rows.length;

    for (var i = 0; i < xT; i++) {




        let data = {
            productoInsumo: document.getElementById("tdinamicaventas").rows[i].cells[0].children[0].value,
            unidad_medida: document.getElementById("tdinamicaventas").rows[i].cells[1].children[0].value,
            frecuencia_venta: document.getElementById("tdinamicaventas").rows[i].cells[2].children[0].value,
            cantidad: document.getElementById("tdinamicaventas").rows[i].cells[3].children[0].value,

            id_documento: 1,

            costo_unitario: document.getElementById("tdinamicaventas").rows[i].cells[5].children[0].value,

            compra_mensual: document.getElementById("tdinamicaventas").rows[i].cells[7].children[0].value,
            venta_mensual: document.getElementById("tdinamicaventas").rows[i].cells[6].children[0].value,
            utilidad_bruta: document.getElementById("tdinamicaventas").rows[i].cells[8].children[0].value,
            utilidad_bruta_prom: document.getElementById("tdinamicaventas").rows[i].cells[9].children[0].value,
            descripcion: "Dinamica de ventas",
        };


        debugger
        $.ajax({
            url: '/Evaluaciones/InsertDinamicasDeVentas/',
            type: "POST",
            dataType: "json",
            data: data,
            //contentType: "application/json; charset=utf-8",

            success: function (response) {
                //.log(response);

                $("#ErrorDinamicaDeVenta").html('<span class="badge badge-success  ">Datos agregados con exito </span ><br/> ');

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


}
function calcVM(id) {

    var idg = id.substr(4, id.length);
    let cvende, punidad, ccompra;

    cvende = $('#can_' + idg).val();
    punidad = $('#pdv_' + idg).val();
    ccompra = $('#pdc_' + idg).val();

    let frecuencia = $('#unidadsemanal_' + idg).val();

    let ventaMensual = parseFloat(cvende) * parseFloat(punidad) * parseFloat(frecuencia);
    ventaMensual = parseFloat(ventaMensual).toFixed(2);
    $('#ventMen_' + idg).val(ventaMensual);
}
//
function calcGOPNeg() {


    let x = $('[name ="opneg"]');
    let sumx = 0;

    for (var i = 0; i < x.length; i++) {
        sumx = parseInt(x[i].value) + parseInt(sumx);
    }

    $('#TNegOp').val(sumx);
    $('#ing_neg').val(sumx);
    $('#TOTALDEGASTOSDENEGOCIO').val(sumx);

    let vM = $('#TVMensual').val();
    let cM = $('#TCMensual').val();
    debugger

    let TUOPN = parseInt(vM) - parseInt(cM) - parseInt(sumx);
    TUOPN = parseFloat(TUOPN).toFixed(2);
    $('#TotalUtilidadOpNeg').val(TUOPN);

    let utilidadProm = ((TUOPN * 100) / vM) / 100;
    $("#TotalUtilidadOpNegPorcentual").val(utilidadProm.toFixed(2));

    //TotalUtilidadOpNeg TotalUtilidadOpNegPorcentual TOTALDEGASTOSDENEGOCIO

}
function calcGFAM() {
    //calcGFAM
    let x = $('[name ="gfam"]');
    let sumx = 0;

    for (var i = 0; i < x.length; i++) {
        sumx = parseInt(x[i].value) + parseInt(sumx);
    }

    $('#TGFAM').val(sumx);
    $('#TOTALDEGASTOSDEFAMILIA').val(sumx);
    $('#GastosFamFamiEmpresa').val(sumx);
    //

}
function calcInsumos() {
    let xi = $('#InsumosT').find('tr').length;
    let sumT = 0;
    for (var i = 0; i < xi; i++) {
        let ix = i + 1;
        let xval = $('#CostoTotal_' + ix).val();

        if (xval == undefined) {
            xval = 0;
        }
        sumT = parseInt(xval) + parseInt(sumT);
    }
    let staticinput = $('#CostoTotal_').val();
    sumT = parseInt(staticinput) + sumT;



    //InsumosT_
    $('#InsumosT_').html(`  <tr><td> Total </td> <td>  ${sumT}</td> </tr> `);


    var xT = document.getElementById("InsumosT").rows.length;

    for (var i = 0; i <= xT; i++) {

        let data = {
            productoInsumo: document.getElementById("InsumosT").rows[i].cells[0].children[0].value,
            unidad_medida: document.getElementById("InsumosT").rows[i].cells[1].children[0].value,
            frecuencia_venta: null,
            cantidad: document.getElementById("InsumosT").rows[i].cells[2].children[0].value,

            id_documento: 11,

            costo_unitario: null,

            compra_mensual: null,
            venta_mensual: document.getElementById("InsumosT").rows[i].cells[4].children[0].value,
            utilidad_bruta: null,
            utilidad_bruta_prom: null,
            descripcion: "Insumos",
        };
        $.ajax({
            url: '/EvaluacionEco/InsertDinamicasDeVentas/',
            type: "POST",
            dataType: "json",
            data: data,
            //contentType: "application/json; charset=utf-8",

            success: function (response) {
                //.log(response);
                $("#ErrorDinamicaDeVenta").html('<span class="badge badge-success  ">Datos agregados con exito </span ><br/> ');
                $('#infopbtn').addClass('bg-success');
                $('#insumTxt').html('<span class="badge badge-success">Listo</span>');
                $('#calcInsumos_btn').prop('disabled', true);
                $('#addRowT_btn').prop('disabled', true);

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







}
function addRowTDinamicaventas() {

    let xi = $('#tdinamicaventas').find('tr').length + 1;

    $('#tdinamicaventas')
        .append(`  <tr>
                    <td><input class="form-control" type="type" name="producto_dinam" value="" /></td>
                    <td>
                        <select class="form-control"  id="unidaddemedida_`+ xi + `">
                                                <option value="kg">kilo</option>
                                                <option value="gr">gramo</option>
                                                <option value="mg">miligramo</option>
                                                <option value="ton">tonelada</option>
                                                <option value="lt">litro</option>
                                                <option value="mlt">mililitro</option>
                                                <option value="gal">galon</option>
                                                <option value="m">metro</option>
                        </select>
                    </td>
                    <td>
                       <select class="form-control" id="unidadsemanal_`+ xi + `">

                            <option value="30">Diario</option>
                            <option value="4.2">Semanal</option>
                            <option value="2.1">Quincenal</option>
                            <option value="1">Mensual</option>
                        </select>
                    </td>


                        <td><input class="form-control" type="number" id="can_`+ xi + `"  value="" /></td>
                        <td><input class="form-control" type="number" id="pdv_`+ xi + `" onblur="calcVM(this.id)" value="" /></td>
                        <td><input class="form-control" type="number" name="" id="pdc_`+ xi + `"  onblur="calcCM(this.id)"  value="" /></td>
                        <td><input class="form-control" type="number" name="ventMen" id="ventMen_`+ xi + `" value="" /></td>
                        <td><input class="form-control" type="number" name="compraMen" id="compraMen_`+ xi + `" value="" /></td>
                        <td><input class="form-control" type="number" name="utilidadB" id="utilidadB_`+ xi + `" value="" /></td>
                        <td><input class="form-control" type="number" name="porcentajedeUtB" id="porcentajedeUtB_`+ xi + `" value="" /></td>
                </tr>



`);
}
//
function sumCT() {

    let Cantidad_ = $("#Cantidad_").val();
    let CostoUnitario_ = $("#CostoUnitario_").val();
    let valux = Cantidad_ * CostoUnitario_;
    debugger
    $("#CostoTotal_").val(valux);
    //


}
function sumCTId(id) {

    var id_p = id.substr(id.length - 1, id.length);

    let Cantidad_ = $("#Cantidad_" + id_p).val();
    let CostoUnitario_ = $("#CostoUnitario_" + id_p).val();
    let valux = Cantidad_ * CostoUnitario_;

    $("#CostoTotal_" + id_p).val(valux);


}
function addInvT() {

    let xi = $('#InvT').find('tr').length + 1;

    $('#InvT')
        .append(`<tr>
                    <td>
                        <input class="form-control" type="text" id="producto_`+ xi + `" value="" />
                    </td>

                    <td>

                             <select class="form-control" id="umedida_`+ xi + `" >
                                                                        <option value="kg">kilo</option>
                                                                        <option value="m">metro</option>
                                                                        <option value="m2">kilo</option>
                                                                        <option value="m3">kilo</option>

                                                                        <option value="l">litro</option>
                                                                        <option value="gal">galon</option>
                                                                        <option value="ton">tonelada</option>

                                                                    </select>
                                                </td>
                            <td>
                        <input class="form-control" type="text" id="cantidad_`+ xi + `" value="" />

                    </td>

                    <td>
                        <input class="form-control" onblur="TotalInventario(this.id)"  type="text"  id="costoun_`+ xi + `" value="" />
                    </td>
                    <td>
                        <input class="form-control"  name="csotoT" type="text" id="csotoT_`+ xi + `" value="" />
                    </td>
                </tr>
        `);
}
function addRowT() {

    let xi = $('#InsumosT').find('tr').length

    $('#InsumosT')
        .append(`<tr>
                    <td><input type="text" class="form-control" id="ProductoInsumo_`+ xi + `" value="" /></td>
                    <td><input type="text" class="form-control" id="Cantidad_`+ xi + `" value="" /></td>
                    <td><input type="text" class="form-control" id="Udemedida_`+ xi + `" value="" /></td>
                    <td><input type="text" id="CostoUnitario_`+ xi + `" onblur="sumCTId(this.id)" class="form-control" value="" /></td>
                    <td><input type="text" id="CostoTotal_`+ xi + `" class="form-control" value="" /></td>
                </tr>`);
}
//scoring
$.ajax({
    url: '/Scoring/SCORING_PREGUNTAS_ListJson/1',
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

});
function callScoringAns(id_sh, id_scoring, cont) {

    $.ajax({
        url: `/Scoring/SCORING_RESPUESTAS_IDP/` + id_scoring,
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
function asignarCCuota_() {
    var capacidadPago = $("#tHcred_CDPago").val();
    var cuota = $("#tHcred_CUOTA").val();
    let valx = parseInt(capacidadPago) / parseInt(cuota);
    valx = valx.toFixed(2);
    $("#tHcred_CCuota").val(valx);
}
//historial crediticio
$.ajax({
    url: '/Evaluaciones/HistorialCrediticio_ListJson/' + 1,
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
            id_documento: 111,
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

    }
    else {


        nt = nt / np;
        //alert(nt);
        nt = parseFloat(nt).toFixed(2);
        $("#calficiacion_Sco").html('<input type="text" id="calficiacion_Sco_input" value="' + nt + '" disabled />');

        let inputcalificacion = $("#calficiacion_Sco_input").val();
        let data = {
            id_check_list: 1,
            id_sucursal: 1,
            id_cliente: 1,
            id_catalogo: 3,
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
function semanalpromedio() {
    let lun, mart, mier, juev, vier, sab, domin;

    lun = $('#lun').val();
    mart = $('#mart').val();
    mier = $('#mier').val();
    juev = $('#juev').val();
    vier = $('#vier').val();
    sab = $('#sab').val();
    domin = $('#domin').val();


    if (lun.length == 0 || lun == ' ' ||
        mart.length == 0 || mart == ' ' ||
        mier.length == 0 || mier == ' ' ||
        juev.length == 0 || juev == ' ' ||
        vier.length == 0 || vier == ' ' ||
        sab.length == 0 || sab == ' ' ||
        domin.length == 0 || domin == ' ') {


        $('#semenalError').html('<span class="badge badge-danger">falta alguno de los datos</span> ');
        // $('#semenalError').removeClass('hidden');
    } else {
        let tvs = 0;

        tvs = parseInt(lun) +
            parseInt(mart) +
            parseInt(mier) +
            parseInt(juev) +
            parseInt(vier) +
            parseInt(sab) +
            parseInt(domin);

        tvs = parseFloat(tvs).toFixed(2);

        let altasemanal = 0, bajasemanal = 0;


        let aa_lun = $("[name='caja_lun']:checked").val();
        if (aa_lun == 'ALTA') {
            altasemanal = parseInt(altasemanal) + parseInt(lun);
        } else {
            bajasemanal = parseInt(bajasemanal) + parseInt(lun);
        }


        let aa_mart = $("[name='caja_mart']:checked").val();
        if (aa_mart == 'ALTA') {
            altasemanal = parseInt(altasemanal) + parseInt(mart);
        } else {
            bajasemanal = parseInt(bajasemanal) + parseInt(mart);
        }


        let aa_mier = $("[name='caja_mier']:checked").val();
        if (aa_mier == 'ALTA') {
            altasemanal = parseInt(altasemanal) + parseInt(mier);
        } else {
            bajasemanal = parseInt(bajasemanal) + parseInt(mier);
        }


        let aa_juev = $("[name='caja_juev']:checked").val();
        if (aa_juev == 'ALTA') {
            altasemanal = parseInt(altasemanal) + parseInt(juev);
        } else {
            bajasemanal = parseInt(bajasemanal) + parseInt(juev);
        }


        let aa_vier = $("[name='caja_vier']:checked").val();
        if (aa_vier == 'ALTA') {
            altasemanal = parseInt(altasemanal) + parseInt(vier);
        } else {
            bajasemanal = parseInt(bajasemanal) + parseInt(vier);
        }

        let aa_sab = $("[name='caja_sab']:checked").val();
        if (aa_sab == 'ALTA') {
            altasemanal = parseInt(altasemanal) + parseInt(sab);
        } else {
            bajasemanal = parseInt(bajasemanal) + parseInt(sab);
        }

        let aa_domin = $("[name='caja_domin']:checked").val();
        if (aa_domin == 'ALTA') {
            altasemanal = parseInt(altasemanal) + parseInt(domin);
        } else {
            bajasemanal = parseInt(bajasemanal) + parseInt(domin);
        }

        debugger

        //ventaDiariaAlta
        $('#ventaDiariaAlta').val(altasemanal);
        $('#ventaDiariaBaja').val(bajasemanal);

    }
}
function mensualpromedio() {
    let ene, feb, mar, abri, may, jun, jul, oct, ago, sept, nov, dic;


    ene = $('#enero').val();
    feb = $('#febrero').val();
    mar = $('#marzo').val();
    abri = $('#abril').val();
    may = $('#mayo').val();
    jun = $('#junio').val();
    jul = $('#julio').val();
    ago = $('#agosto').val();
    sept = $('#septiembre').val();
    oct = $('#octubre').val();
    nov = $('#noviembre').val();
    dic = $('#diciembre').val();



    if (ene.length == 0 || ene == ' ' ||
        feb.length == 0 || feb == ' ' ||
        mar.length == 0 || mar == ' ' ||
        abri.length == 0 || mar == ' ' ||
        may.length == 0 || may == ' ' ||
        jun.length == 0 || jun == ' ' ||
        ago.length == 0 || ago == ' ' ||
        sept.length == 0 || sept == ' ' ||
        oct.length == 0 || oct == ' ' ||
        nov.length == 0 || nov == ' ' ||
        dic.length == 0 || dic == ' ' ||
        jul.length == 0 || jul == ' ') {


        $('#semenalError').html('<span class="badge badge-danger">falta alguno de los datos</span> ');
        // $('#semenalError').removeClass('hidden');
    } else {




        let altaMenusal = 0, bajaMensual = 0;


        let aa_enero = $("[name='enero_chk']:checked").val();
        if (aa_enero == 'ALTA') {
            altaMenusal = parseInt(altaMenusal) + parseInt(ene);
        } else {
            bajaMensual = parseInt(bajaMensual) + parseInt(ene);
        }


        let aa_feb = $("[name='febrero_chk']:checked").val();
        if (aa_feb == 'ALTA') {
            altaMenusal = parseInt(altaMenusal) + parseInt(feb);
        } else {
            bajaMensual = parseInt(bajaMensual) + parseInt(feb);
        }


        let aa_mar = $("[name='marzo_chk']:checked").val();
        if (aa_mar == 'ALTA') {
            altaMenusal = parseInt(altaMenusal) + parseInt(mar);
        } else {
            bajaMensual = parseInt(bajaMensual) + parseInt(mar);
        }


        let aa_abr = $("[name='abril_chk']:checked").val();
        if (aa_abr == 'ALTA') {
            altaMenusal = parseInt(altaMenusal) + parseInt(abri);
        } else {
            bajaMensual = parseInt(bajaMensual) + parseInt(abri);
        }


        let aa_may = $("[name='mayo_chk']:checked").val();
        if (aa_may == 'ALTA') {
            altaMenusal = parseInt(altaMenusal) + parseInt(may);
        } else {
            bajaMensual = parseInt(bajaMensual) + parseInt(may);
        }

        let aa_jun = $("[name='junio_chk']:checked").val();
        if (aa_jun == 'ALTA') {
            altaMenusal = parseInt(altaMenusal) + parseInt(jun);
        } else {
            bajaMensual = parseInt(bajaMensual) + parseInt(jun);
        }

        let aa_jul = $("[name='julio_chk']:checked").val();
        if (aa_jul == 'ALTA') {
            altaMenusal = parseInt(altaMenusal) + parseInt(jul);
        } else {
            bajaMensual = parseInt(bajaMensual) + parseInt(jul);
        }

        let aa_ago = $("[name='agosto_chk']:checked").val();
        if (aa_ago == 'ALTA') {
            altaMenusal = parseInt(altaMenusal) + parseInt(ago);
        } else {
            bajaMensual = parseInt(bajaMensual) + parseInt(ago);
        }

        let aa_sept = $("[name='septiembre_chk']:checked").val();
        if (aa_sept == 'ALTA') {
            altaMenusal = parseInt(altaMenusal) + parseInt(sept);
        } else {
            bajaMensual = parseInt(bajaMensual) + parseInt(sept);
        }

        let aa_oct = $("[name='octubre_chk']:checked").val();
        if (aa_oct == 'ALTA') {
            altaMenusal = parseInt(altaMenusal) + parseInt(oct);
        } else {
            bajaMensual = parseInt(bajaMensual) + parseInt(oct);
        }

        let aa_dic = $("[name='diciembre_chk']:checked").val();
        if (aa_dic == 'ALTA') {
            altaMenusal = parseInt(altaMenusal) + parseInt(dic);
        } else {
            bajaMensual = parseInt(bajaMensual) + parseInt(dic);
        }

        let aa_nov = $("[name='noviembre_chk']:checked").val();
        if (aa_nov == 'ALTA') {
            altaMenusal = parseInt(altaMenusal) + parseInt(nov);
        } else {
            bajaMensual = parseInt(bajaMensual) + parseInt(nov);
        }


        $('#mensualAlta').val(altaMenusal);
        $('#mensualBaja').val(bajaMensual);

    }
}
//
function addDetalleDeCeuntasPorPagar() {
    //errorCuentasPorPagar
    let cuotaMonto = $("[name='cuotaMonto']");
    //td_patyBg
    let tdpatyBg = $("[name='td_patyBg']");

    let TCM = 0;
    for (var i = 0; i < cuotaMonto.length; i++) {

        TCM = parseInt(cuotaMonto[i].value) + TCM;


    }
    let TBG = 0;

    for (var i = 0; i < tdpatyBg.length; i++) {

        TBG = parseInt(tdpatyBg[i].value) + TBG;


    }
    $('#Cuotamontomensual').val(TCM);
    $('#Totaldeudacuentasporpagar').val(TBG);

    //Cuotamontomensual
    //Totaldeudacuentasporpagar
}
function addDetalleDeCeuntasPorCobrar() {
    //cuotaMonta_porcobrar
    //td_porcobrar
    let cuotaMonto = $("[name='cuotaMonta_porcobrar']");
    let td = $("[name='td_porcobrar']");

    let TCM = 0;
    for (var i = 0; i < cuotaMonto.length; i++) {
        TCM = parseInt(cuotaMonto[i].value) + TCM;
    }
    let TBG = 0;

    for (var i = 0; i < td.length; i++) {
        TBG = parseInt(td[i].value) + TBG;
    }

    debugger
    $('#Cuotamontomensual_porcobrar').val(TCM);
    $('#Totaldeudacuentasporpagar_porcobrar').val(TBG);


}

function TotalInventario(id) {
    var id_p = id.substr(8, id.length);
    let can = 0;//cantidad_1
    let pc = 0;//costoun_1

    let tcan = $("#cantidad_" + id_p).val();
    let tpc = $("#costoun_" + id_p).val();

    let xt = tcan * tpc;

    $('#csotoT_' + id_p).val(xt);
}

function addTInventarios() {
    //csotoT
    let Tcst = 0;
    let cst = $("[name='csotoT']");

    for (var i = 0; i < cst.length; i++) {

        Tcst = parseInt(cst[i].value) + Tcst;

    }
    $('#Totaldeinventarios').val(Tcst);
    //Totaldeinventarios
}


function getBienesDeNegocio() {
    let estanteria, maquinaria, vehiculos, deudasT, Local, OtrosNeg;
    estanteria = $('#estanteria').val();
    maquinaria = $('#maquinaria').val();
    vehiculos = $('#vehiculos').val();
    deudasT = $('#deudasT').val();
    Local = $('#Local').val();
    OtrosNeg = $('#OtrosNeg').val();
    debugger
    //BNError
    if (estanteria.length == 0 || estanteria == ' ' ||
        maquinaria.length == 0 || maquinaria == ' ' ||
        vehiculos.length == 0 || vehiculos == ' ' ||
        deudasT.length == 0 || deudasT == ' ' ||
        Local.length == 0 || Local == ' ' ||
        OtrosNeg.length == 0 || OtrosNeg == ' ') {

        $('#BNError').html('<span class="badge badge-danger">falta alguno de los datos</span> ');
    }
    else {
        let bienesActivosNegocio = 0; let bienesPasivosNegocio = 0;


        let aa_estant = $("[name='estanteria']:checked").val();
        if (aa_estant == 'ACTIVO') {
            bienesActivosNegocio = parseInt(bienesActivosNegocio) + parseInt(estanteria);
        } else {
            bienesPasivosNegocio = parseInt(bienesPasivosNegocio) + parseInt(estanteria);
        }


        let aa_maqui = $("[name='maquinaria']:checked").val();
        if (aa_maqui == 'ACTIVO') {
            bienesActivosNegocio = parseInt(bienesActivosNegocio) + parseInt(maquinaria);
        } else {
            bienesPasivosNegocio = parseInt(bienesPasivosNegocio) + parseInt(maquinaria);
        }


        let aa_vehi = $("[name='maquinaria']:checked").val();
        if (aa_vehi == 'ACTIVO') {
            bienesActivosNegocio = parseInt(bienesActivosNegocio) + parseInt(vehiculos);
        } else {
            bienesPasivosNegocio = parseInt(bienesPasivosNegocio) + parseInt(vehiculos);
        }


        let aa_deudas = $("[name='deudasT']:checked").val();
        if (aa_deudas == 'ACTIVO') {
            bienesActivosNegocio = parseInt(bienesActivosNegocio) + parseInt(deudasT);
        } else {
            bienesPasivosNegocio = parseInt(bienesPasivosNegocio) + parseInt(deudasT);
        }



        let aa_Local = $("[name='Local']:checked").val();
        if (aa_Local == 'ACTIVO') {
            bienesActivosNegocio = parseInt(bienesActivosNegocio) + parseInt(Local);
        } else {
            bienesPasivosNegocio = parseInt(bienesPasivosNegocio) + parseInt(Local);
        }
        //OtrosNeg


        let aa_otros = $("[name='OtrosNeg']:checked").val();
        if (aa_otros == 'ACTIVO') {
            bienesActivosNegocio = parseInt(bienesActivosNegocio) + parseInt(OtrosNeg);
        } else {
            bienesPasivosNegocio = parseInt(bienesPasivosNegocio) + parseInt(OtrosNeg);
        }



        $('#bienesActivosNegocio').val(bienesActivosNegocio);
        $('#bienesPasivosNegocio').val(bienesPasivosNegocio);
    }

}

function CalcRubros() {
    let inventarios, ahorrobancos, clientesprovedores, deudasT, tandas, cajaefectivo;
    inventarios = $('#inventarios').val();
    ahorrobancos = $('#ahorrobancos').val();
    clientesprovedores = $('#clientesprovedores').val();
    deudasT = $('#deudasT').val();
    tandas = $('#tandas').val();
    cajaefectivo = $('#cajaefectivo').val();



    if (inventarios.length == 0 || inventarios == ' ' ||
        ahorrobancos.length == 0 || ahorrobancos == ' ' ||
        clientesprovedores.length == 0 || clientesprovedores == ' ' ||
        deudasT.length == 0 || deudasT == ' ' ||
        cajaefectivo.length == 0 || cajaefectivo == ' ' ||
        tandas.length == 0 || tandas == ' ') {
        $('#semenalRubros').html('<span class="badge badge-danger">falta alguno de los datos</span> ');
    }
    else {
        let activosRubros = 0; let pasivosRubros = 0;

        let aa_invent = $("[name='inventarios']:checked").val();
        if (aa_invent == 'ACTIVO') {
            activosRubros = parseInt(activosRubros) + parseInt(inventarios);
        } else {
            pasivosRubros = parseInt(pasivosRubros) + parseInt(inventarios);
        }

        let aa_ahorro = $("[name='ahorrobancos']:checked").val();
        if (aa_ahorro == 'ACTIVO') {
            activosRubros = parseInt(activosRubros) + parseInt(ahorrobancos);
        } else {
            pasivosRubros = parseInt(pasivosRubros) + parseInt(ahorrobancos);
        }

        let aa_client = $("[name='clientesprovedores']:checked").val();
        if (aa_client == 'ACTIVO') {
            activosRubros = parseInt(activosRubros) + parseInt(clientesprovedores);
        } else {
            pasivosRubros = parseInt(pasivosRubros) + parseInt(clientesprovedores);
        }


        let aa_deudas = $("[name='deudasT']:checked").val();
        if (aa_deudas == 'ACTIVO') {
            activosRubros = parseInt(activosRubros) + parseInt(deudasT);
        } else {
            pasivosRubros = parseInt(pasivosRubros) + parseInt(deudasT);
        }

        let aa_tandas = $("[name='tandas']:checked").val();
        if (aa_tandas == 'ACTIVO') {
            activosRubros = parseInt(activosRubros) + parseInt(tandas);
        } else {
            pasivosRubros = parseInt(pasivosRubros) + parseInt(tandas);
        }


        let aa_cajaefectivo = $("[name='cajaefectivo']:checked").val();
        if (aa_cajaefectivo == 'ACTIVO') {
            activosRubros = parseInt(activosRubros) + parseInt(cajaefectivo);
        } else {
            pasivosRubros = parseInt(pasivosRubros) + parseInt(cajaefectivo);
        }
        //let activosRubros = 0; let pasivosRubros = 0;

        $('#activosRubros').val(activosRubros);
        $('#pasivosRubros').val(pasivosRubros);

    }
}


function calcBienesPropios() {
    // Casas Terrenos    otrosbieneshogar vehiculos
    let casas, terrenos, otrosbh, vehiculos;

    casas = $('#Casas').val();
    terrenos = $('#Terrenos').val();
    otrosbh = $('#otrosbieneshogar').val();
    vehiculos = $('#vehiculos').val();

    debugger

    if (casas.length == 0 || casas == ' ' ||
        terrenos.length == 0 || terrenos == ' ' ||
        otrosbh.length == 0 || otrosbh == ' ' ||
        vehiculos.length == 0 || vehiculos == ' ') {
        $('#errorBienesPropios').html('<span class="badge badge-danger">falta alguno de los datos</span> ');
    }
    else {
        let activosPropios = 0; let pasivosPropios = 0;

        let aa_casas = $("[name='Casas']:checked").val();
        if (aa_casas == 'ACTIVO') {
            activosPropios = parseInt(activosPropios) + parseInt(casas);
        } else {
            pasivosPropios = parseInt(pasivosPropios) + parseInt(casas);
        }


        let aa_terr = $("[name='Terreros']:checked").val();
        if (aa_terr == 'ACTIVO') {
            activosPropios = parseInt(activosPropios) + parseInt(terrenos);
        } else {
            pasivosPropios = parseInt(pasivosPropios) + parseInt(terrenos);
        }


        let aa_obh = $("[name='otrosbieneshogar']:checked").val();
        if (aa_obh == 'ACTIVO') {
            activosPropios = parseInt(activosPropios) + parseInt(otrosbh);
        } else {
            pasivosPropios = parseInt(pasivosPropios) + parseInt(otrosbh);
        }


        let aa_vh = $("[name='vehiculos']:checked").val();
        if (aa_vh == 'ACTIVO') {
            activosPropios = parseInt(activosPropios) + parseInt(vehiculos);
        } else {
            pasivosPropios = parseInt(pasivosPropios) + parseInt(vehiculos);
        }

        //bienespropiosactivos bienespropiospasivos

        $('#bienespropiosactivos').val(activosPropios);
        $('#bienespropiospasivos').val(pasivosPropios);
    }

}




function detallesCuentaPorCobrar(id) {

    let lnid = id.length;

    let subst = id.substring(6, lnid);



    let meses = $('#cuotaMonto_' + subst).val();
    let cuota = $('#meses_' + subst).val();
    debugger
    let vt = meses * cuota;
    vt = parseFloat(vt).toFixed(2);
    $('#td_porcobrar_' + subst).val(vt);

}

function detallesCuentaPorPagar(id) {
    let lnid = id.length;

    let subst = id.substring(6, lnid);



    let meses = $('#cuotaMonto_' + subst).val();
    let cuota = $('#meses_' + subst).val();

    let vt = meses * cuota;
    vt = parseFloat(vt).toFixed(2);
    $('#td_patyBg_' + subst).val(vt);
}
