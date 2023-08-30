/**
 * Element parallax effect
 * @requires https://github.com/dixonandmoe/rellax
 */

// Element parallax initialization
var elementParallax = function () {
    var el = document.querySelector('.rellax');

    if (el === null) return;

    var rellax = new Rellax('.rellax', {
        horizontal: true
    });
};

elementParallax();
