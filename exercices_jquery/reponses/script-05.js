//  Chemin relatif : reponses/script-05.js
//1
$('table tr').not(':first').not(':last').each(function () {
    var prix = parseFloat($(this).children().eq(1).html());
    var qte = parseFloat($(this).children().eq(2).html());
    $(this).children().eq(-1).html(prix * qte);
});
//2
var total = 0;
$('td:last', 'table tr:not(":last")').each(function () {
    total += parseFloat($(this).html());
});
$("table td").eq(-1).html(total);
//3
function format(number) {
    number += "";
    let t = [], z = 0;
    let k = number.indexOf(".");
    if (k != -1) {
        for (var i = k, j = 0; j < 3 && i < number.length; i++,j++)
            t.push(number[i]);
            if(j == 2)
                t.push(0);
            else {
                if(i<number.length)
                        t[t.length - 1] += number[i] >= 5 ? 1:0;
                
            }
    }
    else
        {
            t.push(".");
            t.push(0);
            t.push(0);
        k = number.length;
        }
    for (var i = k - 1; i >= 0; i--) {
        t.unshift(number[i]);
        z++;
        if (z % 3 == 0 && i != 0)
            t.unshift(' ');
    }
    return t.join("")
}
$("td").each(function(){
    var val = $(this).html();
    if(!isNaN(val))
        $(this).html(format(val));
});