/**
 * Anchor smooth scrolling
 * @requires https://github.com/cferdinandi/smooth-scroll/
*/

var smoothScroll = function () {

    var selector = '[data-scroll]';
    var fixedHeader = '[data-scroll-header]';

    var scroll = new SmoothScroll(selector, {
        speed: 800,
        speedAsDuration: true,
        offset: function (anchor, toggle) {
            return toggle.getAttribute('data-scroll-offset') || 40;
        },
        header: fixedHeader,
        updateURL: false
    });

};

smoothScroll();
