/**
 * Mouse move jarallax effect
 * @requires https://github.com/wagerfield/jarallax
*/

var jarallax = function () {

    var elements = document.querySelectorAll('.jarallax');

    for (var i = 0; i < elements.length; i++) {
        var jarallaxInstance = new jarallax(elements[i]);
    }

};

jarallax();
