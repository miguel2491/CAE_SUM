$(document).ready(function () {

});
function addProspecto() {
    var fecha = $('#fecha').val();
    var sucursal = $('#sucursal option:selected').val() == undefined ? '0' : $('#sucursal option:selected').val();
    var nombre = $('#nombre').val();
    var app = $('#app').val();
    var apm = $('#apm').val();
    var municipio = $('#municipio option:selected').val() == undefined ? '0' : $('#municipio option:selected').val();
    var colonia = $('#colonia option:selected').val() == undefined ? '0' : $('#colonia option:selected').val();
    var estado = $('#estado option:selected').val() == undefined ? '0' : $('#estado option:selected').val();
    var cp = $('#cp').val();
    var calle = $('#calle').val();
    var numero = $('#numeroCalle').val();
    var telefono = $('#telefono').val();
    var actividad = $('#actividad').val();
    var tipo_producto = $('#tipo_producto option:selected').val() == undefined ? '0' : $('#tipo_producto option:selected').val();
    var asesor = $('#asesor option:selected').val() == undefined ? '0' : $('#asesor option:selected').val();
    var fechaVisita = $('#fechaVisita').val();
    var resolucion = $('#resolucion').val();
    var enterado = $('#enterado').val();
    var data = {
        id_sucursal: sucursal,
        fecha: fecha,
        id_asesor: asesor,
        nombre: nombre,
        app: app,
        apm: apm,
        telefono: telefono,
        calle: calle,
        numero: numero,
        colonia: colonia,
        cp:cp,
        municipio: municipio,
        estado: estado,
        actividad_negocio: actividad,
        tipo_producto: tipo_producto,
        fecha_visita_tentativa: fechaVisita,
        resolucion: resolucion,
        modo_enterado: enterado
    };
    $.ajax({
        type: "POST",
        url: "/Promocion/InsertProspecto",
        dataType: "json",
        data: data,
        success: function (data) {
            window.location.href = data.redirectToUrl;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    });
}

function uppProspecto() {
    
    var data = {
        id_prospecto: $("#iddProspecto").val(),
        id_sucursal: $('#sucursal option:selected').val() == undefined ? '0' : $('#sucursal option:selected').val(),
        fecha: $("#fecha").val(),
        id_asesor: $('#asesor option:selected').val() == undefined ? '0' : $('#asesor option:selected').val(),
        nombre: $("#nombre").val(),
        app: $("#app").val(),
        apm: $("#apm").val(),
        telefono: $("#telefono").val(),
        calle: $("#calle").val(),
        numero: $("#numeroCalle").val(),
        colonia: $('#colonia option:selected').val() == undefined ? '0' : $('#colonia option:selected').val(),
        cp: $('#cp').val(),
        municipio: $('#municipio option:selected').val() == undefined ? '0' : $('#municipio option:selected').val(),
        estado: $('#estado option:selected').val() == undefined ? '0' : $('#estado option:selected').val(),
        actividad_negocio: $('#actividad').val(),
        tipo_producto: $('#tipo_producto option:selected').val() == undefined ? '0' : $('#tipo_producto option:selected').val(),
        fecha_visita_tentativa: $('#fechaVisita').val(),
        resolucion: $('#resolucion').val(),
        modo_enterado: $('#enterado').val()
    };
    $.ajax({
        type: "POST",
        url: "/Promocion/UpdateProspecto",
        dataType: "json",
        data: data,
        success: function (response) {
            console.log(response);
            window.location.href = response.redirectToUrl;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    });
}

function ListaProspectos() {
    $.ajax({
        type: "GET",
        url: "/Promocion/GetListProspectos",
        dataType: "json",
        success: function (data) {
            var s = '';
            for (var i = 0; i < data.length; i++) {
                var producto;
                var tp = data[i].tipo_producto;
                var producto = tp == "1" ? 'Solidario' :'Individual';
                var bttnDelete = '<button class="btn btn-danger btn-xs" id="bttn_modal_delete" data-id="' + data[i].id + '" data-target="#modal_delete"  data-toggle="modal" title="Eliminar"><i class="glyphicon glyphicon-trash"></i></button>';
                var bttnUpdate = '<button class="btn btn-warning btn-xs" id="bttn_modal_update"  data-id="' + data[i].id + '" onclick="updateProspecto('+data[i].id+')" title="Editar"><i class="glyphicon glyphicon-edit"></i></button> ';
                s += '<tr><td>' + data[i].id + '</td><td>' + data[i].fecha + '</td><td>' + data[i].nombre + '</td><td>' + data[i].telefono + '</td><td>' + data[i].actividad + '</td><td>' + data[i].fecha_tentativa + '</td><td>' + data[i].resolucion + '</td><td>' + data[i].enterado + '</td><td>' + bttnUpdate + ' ' + bttnDelete + '</td></tr>';
            }
            $("#table_body").append(s);
            $('#example1').DataTable();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}

function updateProspecto(i) {
    var data = {
        id: i,
    }
    $.ajax({
        type: "POST",
        url: "/Promocion/editProspecto",
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

function ListaActividadPromocional() {
    $.ajax({
        type: "GET",
        url: "/Promocion/GetListActividad",
        dataType: "json",
        success: function (data) {
            var s = '';
            var pr = 0;
            var rl = 0;
            for (var i = 0; i < data.length; i++) {
                var statusP;
                pr = statusP != null ? pr + 1 : 0;
                rl = statusP == null ? rl + 1 : 0;
                s += '<tr><td>' + data[i].fecha + '</td><td>' + data[i].zona + '</td><td>' + data[i].municipio + '</td><td>' + data[i].localidad + '</td><td>' + data[i].colonia + '</td><td><input type="checkbox" id="status_prospecto" name="status_prospecto"></td></tr>';
            }
            $("#table_body_real").append(s);
            $("#table_body_programado").append(s);
            $('#programado').DataTable();
            $('#real').DataTable();
            var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
            var pieChart = new Chart(pieChartCanvas)
            var PieData = [
                {
                    value: pr,
                    color: '#f56954',
                    highlight: '#f56954',
                    label: 'Real'
                },
                {
                    value: rl,
                    color: '#00a65a',
                    highlight: '#00a65a',
                    label: 'Programado'
                }
            ]
            var pieOptions = {
                //Boolean - Whether we should show a stroke on each segment
                segmentShowStroke: true,
                //String - The colour of each segment stroke
                segmentStrokeColor: '#fff',
                //Number - The width of each segment stroke
                segmentStrokeWidth: 2,
                //Number - The percentage of the chart that we cut out of the middle
                percentageInnerCutout: 50, // This is 0 for Pie charts
                //Number - Amount of animation steps
                animationSteps: 100,
                //String - Animation easing effect
                animationEasing: 'easeOutBounce',
                //Boolean - Whether we animate the rotation of the Doughnut
                animateRotate: true,
                //Boolean - Whether we animate scaling the Doughnut from the centre
                animateScale: false,
                //Boolean - whether to make the chart responsive to window resizing
                responsive: true,
                // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
                maintainAspectRatio: true,
                //String - A legend template
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            }
            //Create pie or douhnut chart
            // You can switch between pie and douhnut using the method below.
            pieChart.Doughnut(PieData, pieOptions)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
    
}

