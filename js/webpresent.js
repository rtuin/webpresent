// webpresent.js
// (c) 2011 Richard Tuin
// webpresent.js may be freely distributed under the *** license
(function($) {
    $(document).ready(function() {
        $('section:first-child').addClass('current');
        var zIndex = 500;
        $('section:not(.current)').each(function() {
            var el = $(this);
            el.addClass('next').css('zIndex', zIndex--);
        });
    });
    $(document).keydown(function (event) {
        switch (event.keyCode) {
            case 39:
                console.log('next');
                var current = $('section.current');
                if (!current.next('section').length) return;
                current.next('section').removeClass('next').addClass('current');
                current.addClass('previous').removeClass('current');
                break;
            case 37:
                var current = $('section.current');
                if (!current.prev('section').length) return;
                current.prev('section').removeClass('previous').addClass('current');
                current.addClass('next').removeClass('current');
                break;
        }
    });
})(jQuery)