//  Chemin relatif : ../reponses/script-09.js
//  Chemin relatif : ../files/usa.json
function loadtoSelect(id, data) {
    data.forEach(function (value, index) {
        $('<option></option>').html(value.state).attr('value', index)
            .appendTo("#" + id);
    });
}
$(document).ready(function () {
    var data = [];
    // JSON
    // $.ajax({
    //     dataType: "json",
    //     type: "GET",
    //     url: "../files/usa.json",
    //     success: function (json) {
    //         data = json;
    //         loadtoSelect("la",data);
    //     },
    //     error: function (xhr, status) { // Exécutée si la requete échoue
    //         alert("Il y a eu une erreur...");
    //     },
    //     complete: function (xhr, status) { // exécutée dans tous les cas
    //         console.log("Fin de la requete");
    //     }
    // });
    //XML
    $.ajax({
        dataType: "xml",
        type: "GET",
        url: "../files/usa.xml",
        success: function (xml) {
            $('state', $(xml)).each(function () {
                var state = $(this);
                var cities = [];

                $('city', state).each(function () {
                    cities.push($(this).html());
                });
                data.push({
                    state: $(this).attr('name'),
                    cities: cities
                });

            });
            loadtoSelect("la", data);
        },
        error: function (xhr, status) { // Exécutée si la requete échoue
            alert("Il y a eu une erreur...");
        },
        complete: function (xhr, status) { // exécutée dans tous les cas
            console.log("Fin de la requete");
        }

    });
    $('#la').on('change', function (event) {
        if ($(this).val() !== "") {
            var cities = data[$(this).val()].cities;
            cities.forEach(function (value, index) {
                $("<option></option>").html(value).attr('value', index)
                    .appendTo("#lb");
            });
        }
        else {
            $('#lb option:not(":first")').remove();

        }
    });
});






