//  Chemin relatif : reponses/script-06.js
// String.fromCharCode() permet de récupérer le caractère à partir du code
$(document).ready(_ => {
    //1
    $('#f1').on('keypress', (event) => {
        console.log(event);
    });
    //2
    $('#f1').on('keypress', (event) => {
        $("div#out").append(String.fromCharCode(event.charCode));
    });
    //3
    $('#f1').on('keypress', (event) => {
        var char = String.fromCharCode(event.charCode);
        if (!isNaN(char))
            $("<span style='color:red'>" + char + "</span>").appendTo("div#out");
    });
    //4
    var str = "";
    $('#f2').on('keypress', (event) => {
        str+=String.fromCharCode(event.charCode);
        if(str.length%3 == 0){
            $('<span style="color:lightgreen"></span>').append(str).appendTo('div#out'); 
            str = "";
        }      

    });
});








