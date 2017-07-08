function handlejquery(){
    var $top1 = $('header').offset().top;

    $(window).scroll(function () {         
        // Clean header section
        if ($(window).scrollTop() > $top1){
            $('header').addClass('floater');
        } else {
            $('header').removeClass('floater');
        }
    });
};
