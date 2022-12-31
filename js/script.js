(function($){
    $(function(){

        /* Scroll to sections */
        $(".jq--scroll-our-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 1000);
        });
    });
})(jQuery);