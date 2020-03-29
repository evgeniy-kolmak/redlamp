var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top-120
    }, 900);
    return false;
});


$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger, .nav').toggleClass('active');
        $('body, html').toggleClass('scroll-hidden');
    });

    $('.nav-link').click(function(event) {
        $('.nav, .header-burger').removeClass('active');
    });
});




