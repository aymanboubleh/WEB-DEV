var i = 0;
//1
// $('.box').each(function(){
//     $(this).delay(300*(i++)).animate({
//         height: '-=100',
//         width: '-=100',
//         opacity: '-=1'
//     },300).attr('display','none');
// });


//2
i = 0;
$('.box').each(function(){
    $(this).delay(100*(i++)).animate({
        height: '-=100',
        width: '-=100',
        opacity: '-=1'
    },300).animate({
        height: '+=100',
        width: '+=100',
        opacity: '+=1'
    },300);
});

