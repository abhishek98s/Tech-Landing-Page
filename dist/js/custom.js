$(document).ready(function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const body = document.querySelector("body");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        body.classList.toggle("body-hidden");
    });

    document.querySelectorAll(".nav-link").forEach((link) =>
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            body.classList.remove("body-hidden");
        })
        );

    //sticky header
    var stickyNavTop = $('header').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); 
        if (scrollTop > stickyNavTop) { 
            $('header').addClass('header-top-sticky');
        } else {
            $('header').removeClass('header-top-sticky'); 
        }
    };

    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });



    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1000,
        dots: true
    });

    $('.case-study-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        dots: false
    });

    //matchheight
    $('.supply-list a').matchHeight();
    $('.product-search-list .product-info').matchHeight();
    $('.product-search-list .p-name').matchHeight();

    $(".open-div").click(function(){
        $(".drop-down-wrapper").show();
    });
    $(".close-div").click(function(){
        $(".drop-down-wrapper").hide();
    });
});


$(function () {
    initScrollToTop();
});
// End $(function)

function initScrollToTop() {
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop(),
        docHeight = $(document).height(),
        winHeight = $(window).height(),
        scrollPercent = (scrollTop) / (docHeight - winHeight),
        scrollPercentRounded = Math.round(scrollPercent * 100);
        if (scrollPercentRounded > 15) {
            $('.topTop').css({
                opacity: 1,
                transform: 'translateY(-50%)'
            });
        } else {
            $('.topTop').css({
                opacity: 0,
                transform: 'translateY(50%)'
            });
        }
    });

    // Click event to scroll to top
    $('.topTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1200);
        return false;
    });
}


$('.product-img').slick({
    dots: true,
    arrows: false,
});