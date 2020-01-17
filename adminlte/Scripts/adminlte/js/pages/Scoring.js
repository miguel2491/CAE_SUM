var preg = 1;
$('#pregt').val(parseInt(preg));


function AddRowSRT_T() {
    let vp = $('#pregt').val();
    vp = parseInt(vp) + 1;
    document.getElementById("SRT_T").insertRow(-1).innerHTML += `
             <tr>
                <td><input type="text" class="form-control" id="regunta_st_`+ vp + `" value="" /></td>
                <td><input type="number" class="form-control" id="valor_st_`+ vp + `" value="" /></td>
                                              
            </tr>`;
    $('#pregt').val(parseInt(vp));
}


function DelRowSRT_T() {

    $('#st_error').html(' ')
    let preg, p1, r1;
    //regunta_st_1 valor_st_1
    preg = $('#pregunta').val();
    p1 = $('#regunta_st_1').val();
    r1 = $('#valor_st_1').val();
    id_doc = $('#tipo_check').val();
    
        if (preg.length == 0 || preg == null ||
        id_doc.length == 0 || id_doc == null ||
        p1.length == 0 || p1 == null ||
        r1.length == 0 || r1 == null) {

        $('#st_error').html('<span class="badge badge-danger">Faltan datos minimos</span> ');
    } else {

        let data = { pregunta: preg, id_documento: id_doc }

        $.ajax({
            url: '/SCORING/Insert_SCORING_PREGUNTA',
            type: "post",
            dataType: "json",
            data: data,
            //contentType: "application/json; charset=utf-8",

            success: function (response) {
                //.log(response);

                var rl = response;
                let vp = $('#pregt').val();
                for (var i = 0; i < vp; i++) {
                    let i_n = parseInt(i) + 1;
                    let resp = $('#regunta_st_' + i_n).val();
                    let valor = $('#valor_st_' + i_n).val();
                    
                    
                    let id = rl.id;
                    let data2 = {
                        id_pregunta: id,
                        respuesta: resp,
                        valor: parseFloat(valor).toFixed(2)
                    }
                    console.log(data2);
                    $.ajax({
                        url: '/SCORING/INSERT_SCORING_Respuesta',
                        type: "post",
                        dataType: "json",
                        data: data2,
                        //contentType: "application/json; charset=utf-8",

                        success: function (response) {
                            console.log(response);

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
                //  location.reload(); 
            },
            error: function (jqXHR, textStatus, err) {
                //$('#myModalLabel').append(`error: - ${err}`);
                console.log(jqXHR);
                console.log(textStatus);
                console.log(err);
                alert(err);
            }
        });
        $('#resp_resp').html('<h3>Respuestas agregadas al Scoring</h3>  ');
        $('#ttscor').addClass('hidden');
        $('#btnADDp').addClass('hidden');//
    }
    //end func
}

function AddPregunta() {

    $('#st_error').html(' ')
    let preg, p1, r1;
    //regunta_st_1 valor_st_1
    preg = $('#pregunta').val();
    p1 = $('#regunta_st_1').val();
    r1 = $('#valor_st_1').val();
    id_doc = $('#tipo_check').val();
    debugger
    if (preg.length == 0 || preg == null ||
        id_doc.length == 0 || id_doc == null ||
        p1.length == 0 || p1 == null ||
        r1.length == 0 || r1 == null) {

        $('#st_error').html('<span class="badge badge-danger">Faltan datos minimos</span> ');
    } else {

        let data = { pregunta: preg, id_documento: id_doc }

        $.ajax({
            url: `/SCORING/Insert_SCORING_PREGUNTA`,
            type: "post",
            dataType: "json",
            data: data,
            //contentType: "application/json; charset=utf-8",

            success: function (response) {
                //.log(response);

                var rl = response;
                let vp = $('#pregt').val();
                for (var i = 0; i < vp; i++) {
                    let i_n = parseInt(i) + 1;
                    let resp = $('#regunta_st_' + i_n).val();
                    let valor = $('#valor_st_' + i_n).val();
                    let id = rl.id;
                    let data2 = {
                        id_pregunta: id,
                        respuesta: resp,
                        valor: valor
                    }
                    console.log(data2);
                    $.ajax({
                        url: `/SCORING/INSERT_SCORING_Respuesta`,
                        type: "post",
                        dataType: "json",
                        data: data2,
                        //contentType: "application/json; charset=utf-8",
                        success: function (response) {
                            console.log("|*|");console.log(response);
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

                //  location.reload(); 

            },
            error: function (jqXHR, textStatus, err) {
                //$('#myModalLabel').append(`error: - ${err}`);
                console.log(jqXHR);
                console.log(textStatus);
                console.log(err);

                alert(err);

            }
        });
        $('#resp_resp').html('<h3>Respuestas agregadas al Scoring</h3>  ');
        $('#ttscor').addClass('hidden');
        $('#btnADDp').addClass('hidden');//
    }





    //end func
}
