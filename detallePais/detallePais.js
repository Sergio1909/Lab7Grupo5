
$(document).ready(function () {



    // Metodo de obtención de parámetros
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    // TODO: Metodo para cambiar el href, cambiar de acuerdo a la conveniencia
    $("#redirect-grafico").attr("href", '');

    // TODO: Consultas a la web service

    $(".div-bandera").function() ;{

        $.ajax({
            method: "GET",
            url: "https://www.countryflags.io/PE/flat/64.png"
        }).done(function (msg) {
            $(".div-bandera").html(msg);
        }).fail(function (err) {
            console.log(err);
            alert("ocurrio un error");
        });

    };

    $("#casos-pais").function() ;{

        $.ajax({
            method: "GET",
            dataType: "json",
            crossDomain: true,
            url: "https://api.covid19api.com/total/dayone/country/peru/status/confirmed"
        }).done(function (data) {
            if(data.estado === "ok"){
                var listaCasos = data.lista;
                var contentHtml= "";
                $.each(listaCasos , function (i,caso) {
                    contentHtml += "<tr>";
                    contentHtml += "<td>" + (i+1) + "</td>";
                    contentHtml += "<td>" + caso.date + "</td>";
                    contentHtml += "<td>" + caso.cases + "</td>";
                    contentHtml += "<tr>";
                });

            }


            $("#casos-pais").html(msg);
        }).fail(function (err) {
            console.log(err);
            alert("ocurrio un error");
        });

    };



    var urll = "https://restcountries.eu/rest/v2/alpha/";
    //se debe obtener la el codigo del pais(pe) y guardar en una variable
    var codigo = "";
    var url = urll + codigo;
    $.ajax({
        method: "get",
        url : url
        }
    ).done(function (data) {

    }) .fail(function (err) {

    });


});
