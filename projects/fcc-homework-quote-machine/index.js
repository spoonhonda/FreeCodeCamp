$('body').scrollspy({ target: '.navbar-fixed-top' });





    $(window).on('resize', function () {
    'use strict';
    var element = document.querySelector('#banner'), elHeight = 0, elTop = 0, dHeight = 0, wHeight = 0, wScrollCurrent = 0, wScrollBefore = 0, wScrollDiff = 0;
    window.addEventListener('scroll', function () {
        $('.navbar-collapse').collapse('hide');
        $('.navbar-toggle').addClass('collapsed').blur();
        if ($(window).width() <= 768) {
            elHeight = element.offsetHeight;
            dHeight = document.body.offsetHeight;
            wHeight = window.innerHeight;
            wScrollCurrent = window.pageYOffset;
            wScrollDiff = wScrollBefore - wScrollCurrent;
            elTop = parseInt(window.getComputedStyle(element).getPropertyValue('top')) + wScrollDiff;
            if (wScrollCurrent <= 0) {
                element.style.top = '0px';
            } else if (wScrollDiff > 0) {
                element.style.top = (elTop > 0 ? 0 : elTop) + 'px';
            } else if (wScrollDiff < 0) {
                if (wScrollCurrent + wHeight >= dHeight - elHeight) {
                    element.style.top = ((elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0) + 'px';
                } else {
                    element.style.top = (Math.abs(elTop) > elHeight ? -elHeight : elTop) + 'px';
                }
            }
            wScrollBefore = wScrollCurrent;
        } else
            element.style.top = '0px';
    });
}).resize();









$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1600);
    return false;
});