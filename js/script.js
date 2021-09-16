$(function () {

    var navoff = $('#menu_part').offset().top;

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();
        if (scrolling > navoff) {

            $('#menu_part').addClass('menu_fix');

        } else {
            $('#menu_part').removeClass('menu_fix');
        }

    });


    $('.fas').click(function () {
        $('.txt').slideToggle('slow');
    });


    $('.btn').click(function () {
        $('.contact_form').slideToggle('slow');
    });

});