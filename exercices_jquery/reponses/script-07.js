//  Chemin relatif : reponses/script-07.js
//1

$(document).keydown(function(event) {
    console.log("hoo");
    
   if(event.shiftKey){
       switch (event.keyCode) {
           case 37: $('.box').css('left', parseInt($('.box').css('left')) - 1); break;
           case 38: $('.box').css('top', parseInt($('.box').css('top')) - 1); break;
           case 39: $('.box').css('left', parseInt($('.box').css('left')) + 1); break;
           case 40: $('.box').css('top', parseInt($('.box').css('top')) + 1); break;
       }

   } 
});

//2
  

























