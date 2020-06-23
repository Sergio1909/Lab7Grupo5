
$(document).ready(function () {


    // TODO, consultas a las web services


    let val;
    let informacion = {
        "Global":" ",
        "InfoGlobal":{
            "NewConfirmed":" ",
            "TotalConfirmed":" ",
            "NewDeaths":" ",
            "NewRecovered":" ",
            "TotalRecovered": " ",
        },
        "Countries":[{
            "Country": " ",
            "CountryCode": " ",
            "Slug": " ",
            "NewConfirmed": " ",
            "TotalConfirmed": " ",
            "NewDeaths": " ",
            "TotalDeaths": " ",
            "NewRecovered": " ",
            "TotalRecovered": " ",
            "Date": " ",

        }]
    };

    $.get("https://api.covid19api.com/summary")
        .done(function (val){

            $('titulo-resumen-global').html(val);
        })
        .fail(function (err) {
            console.log(err);
            alert("ocurrió un error al cargar la página")

        })

});

// Función para hacer el sort de un array
function compare(a, b) {
    // TODO
}
// Función para devolver un formato de fecha
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    // TODO
    return '';
}