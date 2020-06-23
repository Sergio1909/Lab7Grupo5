
$(document).ready(function () {



    // Metodo de obtención de parámetros
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    // TODO: Metodo para cambiar el href, cambiar de acuerdo a la conveniencia

    $("#redirect-grafico").attr("href", "./grafico/graficoEvolutivo.html?name=Peru&slug=peru&countryCode=PE");


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
                    contentHtml += "<td>" + caso.date + "</td>";
                    contentHtml += "<td>" + caso.cases + "</td>";
                    contentHtml += "<tr>";
                });

            } else {
                console.log(data.msg);
                alert(data.msg);
            }

            $("#casos-pais").html(msg);
        }).fail(function (err) {
            var jsonData = err.responseJSON;
            console.log(jsonData.msg);
            alert(jsonData.msg);
        });

    };


    $("#caracteristica-tabla").function() ;
    {
        var urll = "https://restcountries.eu/rest/v2/alpha/";
        //se debe obtener la el codigo del pais(pe) y guardar en una variable
        var codigo = "";
        var url = urll + codigo; //
        $.ajax({
                method: "get",
                url: url,
            dataType: "json",
            crossDomain: true,
            }
        ).done(function (data) {
            if (data.estado === "ok") {
                var listaCaracter = data.lista;
                var contentHtml = "";
                $.each(listaCaracter, function (i, c) {
                    contentHtml += "<tr>";
                    contentHtml += "<td>" + "Capital" + "</td>";
                    contentHtml += "<td>" + c.capital + "</td>";
                    contentHtml += "<tr>";
                    contentHtml += "<tr>";
                    contentHtml += "<td>" + "Poblacion" + "</td>";
                    contentHtml += "<td>" + c.population + "</td>";
                    contentHtml += "<tr>";
                    contentHtml += "<tr>";
                    contentHtml += "<td>" + "Sub Region" + "</td>";
                    contentHtml += "<td>" + c.subregion + "</td>";
                    contentHtml += "<tr>";

                });
            } else {
                console.log(data.msg);
                alert(data.msg);
            }
        }).fail(function (err) {
            var jsonData = err.responseJSON;
            console.log(jsonData.msg);
            alert(jsonData.msg);

        });

    }
});
