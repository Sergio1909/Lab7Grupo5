
$(document).ready(function () {

    // Metodo de obtención de parámetros
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    // TODO: Metodo para cambiar el href, cambiar de acuerdo a la conveniencia
    $("#redirect-grafico").attr("href", '');

    // TODO: Consultas a la web service

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
