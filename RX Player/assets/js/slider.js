$(document).ready(function(){
    var width;
    var lastMargin;
    var currSlide=1;
    var goslide;
    
    if(window.matchMedia('(max-width: 450px)').matches){
        width = 250;
        lastMargin = -750;
    } else if (window.matchMedia('(max-width: 869px)').matches){
        width = 300;
        lastMargin = -900;
    } else {
        width = 500;
        lastMargin = -1500;
    } 

    function startSlide(){
        goslide = setInterval(function(){
            $('.sliderImg').animate({'margin-left': '-='+width}, 1000, function() {
                if (++currSlide === $('.slide').length) {
                    currSlide = 1;
                    $('.sliderImg').css('margin-left', 0);
                }
            });
        },4000);
    }

    startSlide();
});