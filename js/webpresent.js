// webpresent.js
// 2011 Richard Tuin
// webpresent.js may be freely distributed, altered, used and abused under the who-needs-a license
(function($) {
    $(document).ready(function() {
        $('section:first-child').addClass('current');
        var zIndex = 500;
        $('section:not(.current)').each(function() {
            var el = $(this);
            el.addClass('next').css('zIndex', zIndex--);
        });
        $('.item').addClass('hidden');
    });
    $(document).keydown(function (event) {
        switch (event.keyCode) {
            case 39: // next
            case 34: // next
                var current = $('section.current');
                var items = current.find('.item.hidden');
                if (items.length) {
                    items.first().removeClass('hidden');
                    break;
                }

                if (!current.next('section').length) return;
                current.next('section').removeClass('next').addClass('current');
                current.addClass('previous').removeClass('current');
                break;
            case 37: // previous
            case 33: // previous
                var current = $('section.current');

                var items = current.find('.item:not(.hidden)');
                if (items.length) {
                    items.last().addClass('hidden');
                    break;
                }

                if (!current.prev('section').length) return;
                current.prev('section').removeClass('previous').addClass('current');
                current.addClass('next').removeClass('current');
                break;
        }
    });
})(jQuery);
