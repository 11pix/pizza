(function($){
    $(function(){

        /* Scroll to sections */
        $(".jq--scroll-our-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top-70}, 1000);
        });

        $(".jq--scroll-o-nasi-pizze").click(function(){
            $("html, body").animate({scrollTop: $(".jq--o-nasi-pizze").offset().top-70}, 1200);
        });

        $(".jq--scroll-reference").click(function(){
            $("html, body").animate({scrollTop: $(".jq--reference").offset().top-67}, 1400);
        });

        $(".jq--scroll-fotogalerie").click(function(){
            $("html, body").animate({scrollTop: $(".jq--fotogalerie").offset().top-87}, 1600);
        });

        $(".jq--scroll-kontakt").click(function(){
            $("html, body").animate({scrollTop: $(".jq--kontakt").offset().top}, 1800);
        });


        /* Scroll buttons to sections */
        $(".jq--scroll-button-first").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 1800);
        });

        $(".jq--scroll-button-second").click(function(){
            $("html, body").animate({scrollTop: $(".jq--reference").offset().top}, 1800);
        });

        /* Mobile navigation */
        $(".jq--nav-icon").click(function(){
            $(".nav-background").fadeToggle();
            $(".mobile-nav-back").slideToggle();
            $("nav ul").fadeToggle();
        });

        /* Prohodit ikonky - hamburger za cross */
        $(".jq--image-hamburger").click(function(){

            if($(".jq--image-hamburger").attr("src") == "img/hamburgerMenu.png")
            {
                $($(".jq--image-hamburger").attr("src", "img/crossMenu.png"));
            }
            else
            {
                 $($(".jq--image-hamburger").attr("src", "img/hamburgerMenu.png"));
            }

        })
       
        
    });
})(jQuery);