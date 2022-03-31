$(function()
{
    'use strict';
    var winH   = $(window).height();
    var upperH = $('.upper-bar').innerHeight();
    var navH   = $('.navbar').innerHeight();

    $('.slider, .carousel-item').height(winH - (upperH + navH));

    //featured Work
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        
        if($(this).data('class') === 'all')
        {
            $('.shufffle-images .col-sm').css('opacity',1);
        }
        else 
        {
            $('.shufffle-images .col-sm').css('opacity',0.1);
            $($(this).data('class')).parent().css('opacity','1');

        }
    });
});