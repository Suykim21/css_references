$(function(){

    $('#animateBtn').click(function(){
        animate('#animate-head', 'bounce');
        animate('#animate-body', 'rubberBand');
        return false;
    })

    $('#animateBtn2').click(function(){
        animate('header', 'slideOutUp');
        setTimeout(function(){
            $('header').css('visibility', 'hidden');
        }, 1000);
        return false;
    })
    
    //Animate
    function animate(element, animation){
        $(element).addClass('animated '+animation);
        var wait = setTimeout(function(){
            $(element).removeClass('animated '+animation);
        }, 1000);
    }
})