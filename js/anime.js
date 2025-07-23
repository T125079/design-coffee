function fadeAnime() {
    $('.fadeUpTrigger').each(function () {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll + windowHeight >= elemPos) {
            $(this).addClass('blur');
        } else {
            $(this).removeClass('blur');
        }
    });
}

$(window).on('scroll', function () {
    fadeAnime();
});
$(window).on('load', function () {
    fadeAnime();
});


$(window).on('scroll load', function () {
    $('.kodawari-image.line').each(function () {
        var elemTop = $(this).offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scrollTop + windowHeight > elemTop + 50) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
});