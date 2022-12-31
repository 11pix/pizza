(function($){
    $(function(){

        /* Scroll to sections */
        $(".jq--scroll-our-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 1000);
        });

        $(".jq--scroll-o-nasi-pizze").click(function(){
            $("html, body").animate({scrollTop: $(".jq--o-nasi-pizze").offset().top}, 1200);
        });

        $(".jq--scroll-reference").click(function(){
            $("html, body").animate({scrollTop: $(".jq--reference").offset().top}, 1400);
        });

        $(".jq--scroll-fotogalerie").click(function(){
            $("html, body").animate({scrollTop: $(".jq--fotogalerie").offset().top}, 1600);
        });

        $(".jq--scroll-kontakt").click(function(){
            $("html, body").animate({scrollTop: $(".jq--kontakt").offset().top}, 1800);
        });


    });
})(jQuery);