// Collapse the navbar on scroll
$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// Smooth page scrolling with dynamic navbar offset
$(function () {
    $('a.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        var $target = $($anchor.attr('href'));

        if ($target.length) {
            var navbarHeight = $('.navbar-fixed-top').outerHeight() || 0;
            var isHome = $anchor.attr('href') === '#page-top';

            // Use smaller offset for section-scroll buttons
            var extraOffset = $anchor.hasClass('btn-scroll')
                ? (window.innerWidth < 768 ? 80 : 200)
                : (window.innerWidth < 768 ? 200 : 200);

            var offsetTop = isHome
                ? 0
                : $target.offset().top - navbarHeight + extraOffset;

            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 1500, 'easeInOutExpo');

            event.preventDefault();
        }
    });


    // Collapse responsive menu on item click (mobile)
    $('.navbar-collapse ul li a').click(function () {
        if ($('.navbar-toggle').is(':visible')) {
            $('.navbar-toggle').trigger('click');
        }
    });
});
