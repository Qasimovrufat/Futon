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


    $('.slider-active').owlCarousel({
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

    $('.product-slider-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 4,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1170: {
                items: 3
            },
            1300: {
                items: 4
            }
        }
    })

    
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

    $(".product-tab-list a:first").addClass("active");
    $(".tab-pane").hide();
    $(".tab-pane:first").show();
    $(".product-tab-list a").click(function(e){
        e.preventDefault()
        $(".product-tab-list a").removeClass("active");
        $(this).addClass("active");
        $(".tab-pane").hide();
        var activeTab=$(this).attr("href");
        $(activeTab).show();
    })


    $('.brand-logo-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        item: 5,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })
    

    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    $('.quickview-active').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        item: 3,
        margin: 12,
    })

    var ProductDetailsSmall = $('.product-details-small a');
    ProductDetailsSmall.on('click', function(e) {
        e.preventDefault();
        var $href = $(this).attr('href');
        ProductDetailsSmall.removeClass('active');
        $(this).addClass('active');
        $('.product-details-large .tab-pane').removeClass('active');
        $('.product-details-large ' + $href).addClass('active');
    })

    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $('.testimonial-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

 
})
