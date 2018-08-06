$(document).ready(function () {
    $('.navbar li span').click(function () {
        if ($('.navbar li span i').hasClass("color")) {

            $('.navbar li span i').removeClass("color")
        }
        $(this).find("i").addClass("color");
        $(this).next().slideToggle();
        if ($(this).find("i").hasClass("fa-plus")) {
            $(this).find("i").removeClass("fa-plus");
            $(this).find("i").addClass("fa-minus");
        } else {
            $(this).find("i").removeClass("fa-minus");
            $(this).find("i").addClass("fa-plus");
        }

    });
    $(".navbar-toggler").click(function () {
        if ($(this).find(".navbar-toggler-icon").hasClass("active")) {
            $(this).find(".navbar-toggler-icon").removeClass("active");
            $(this).find(".navbar-toggler-times").addClass("active");
        } else {
            $(this).find(".navbar-toggler-times").removeClass("active");
            $(this).find(".navbar-toggler-icon").addClass("active");
        }
    });



    if ($(window).width() > 991) {

        $(".navbar-main").addClass("active");
        $(".navbar-expand-lg").addClass("deactive");
    } else {
        $(".navbar-main").removeClass("active");
        $(".navbar-main").addClass("deactive");

        $(".navbar-expand-lg").removeClass("deactive");
    }


    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        item: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    
    $(".active .slider-content h1").addClass("bounceInDown")
    $(".active h2").addClass("bounceInRight")
    $(".active p").addClass("fadeIn")
  
    $(".owl-next, .owl-prev").click(function(){
        $(".slider-content h1").removeClass("bounceInDown").addClass("animated")
        $(".active .slider-content h1").addClass("bounceInDown")
        $("h2").removeClass("bounceInRight").addClass("animated")
        $(".active h2").addClass("bounceInRight")
        $("p").removeClass("fadeIn").addClass("animated")
        $(".active p").addClass("fadeIn")
        
    })

    new WOW().init();
 

});