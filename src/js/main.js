(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $('.preloader').delay(500).fadeOut(500);
    });

    $(document).ready(function () {
        // Smoot Scroll Effect
        $('.arrow_down a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '60';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 200, 'easeInSine');
            event.preventDefault();
        });
        // video
        $('.video').parent().click(function () {
            if($(this).children(".video").get(0).paused){        
                $(this).children(".video").get(0).play();  
                $(this).children(".controls").css({
                  'opacity': 0,
                  'pointer-events': 'none',
                });
                
            }else{
                $(this).children(".video").get(0).pause();
                $(this).children(".controls").css({
                  'opacity': 1,
                  'pointer-events': 'all',
                });
                
            }
        });

        // Slider Initialize
        $('.owl-carousel.slider').owlCarousel({
            loop: true,
            margin: 30,
            items: 1,
            nav: true,
            navText: ['<img src="img/arrow_left.svg">','<img src="img/arrow_right.svg">'],
            dots: false,
        });

        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    });

})(jQuery);