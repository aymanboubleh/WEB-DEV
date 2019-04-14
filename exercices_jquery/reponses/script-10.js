//  Chemin relatif : ../reponses/script-10.js
console.log();
var position = $('#imgsrc').offset();
console.log(position);

var width = $('#imgsrc').width();
var height = $('#imgsrc').height();
var positionX,positionY;
$("#imgsrc").on('mousemove',function(event){
    positionX = (event.clientX - position.left+48) * 1920 / width; //48 dial cursor
    positionY = (event.clientY - position.top+48)* 1200 / height; //48 dial cursor
    if (positionX > (1920 - ((48 / width) * 1920))) positionX = 1920 - (48 / width * 1920);
    if (positionY > (1200 - ((48 / height) * 1200))) positionY = 1200 - (48 / height * 1200);
    $('.box').css("background-position", "bottom " + parseInt(positionY) + "px" + " right " + parseInt(positionX) + "px");
    
    
});










