/**
 * Content carousel with extensive options to control behaviour and appearance
 * @requires https://github.com/nolimits4web/swiper
 */

// forEach function
function forEach(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]); // passes back stuff we need
    }
}

// Carousel initialization
var carousels = document.querySelectorAll('.swiper');
forEach(carousels, function (index, value) {
    var userOptions,
        pagerOptions;
    if (value.dataset.swiperOptions !== undefined) userOptions = JSON.parse(value.dataset.swiperOptions);

    // Pager
    if (userOptions.pager) {
        pagerOptions = {
            pagination: {
                el: '.pagination .list-unstyled',
                clickable: true,
                bulletActiveClass: 'active',
                bulletClass: 'page-item',
                renderBullet: function (index, className) {
                    return '<li class="' + className + '"><a href="#" class="page-link btn-icon btn-sm">' + (index + 1) + '</a></li>';
                }
            }
        };
    }

    // Slider init
    var options = Object.assign({}, userOptions, pagerOptions);
    var swiper = new Swiper(value, options);

    // Tabs (linked content)
    if (userOptions.tabs) {
        swiper.on('activeIndexChange', function (e) {
            var targetTab = document.querySelector(e.slides[e.activeIndex].dataset.swiperTab),
                previousTab = document.querySelector(e.slides[e.previousIndex].dataset.swiperTab);

            previousTab.classList.remove('active');
            targetTab.classList.add('active');
        });
    }
});
