$(function(){
    // question 1
    var firstdiv = $('div', "div#ce").first(); 
    $(firstdiv).css('color','red'); 
    // question 2
    $(firstdiv).parent().append(firstdiv.clone(true));
    // 3
    $("#ce").children().last().prependTo("#ce");
    // 4
    var newdiv = $("<div color='grey'></div>").html("nombre de divs fils  : "+ ($("#ce").children().length+1)).css('color','grey'); 
    newdiv.appendTo('#ce');
    // 5
    var i = 0;
    $('#ce').children().each(function(){
        $(this).append(" (ordre : ",(++i) + ")");
    });
});


