/**
 * Element jarallax effect
 * @requires https://github.com/dixonandmoe/rellax
 */

// Element jarallax initialization
var elementjarallax = function () {
    var el = document.querySelector('.rellax');

    if (el === null) return;

    var rellax = new Rellax('.rellax', {
        horizontal: true
    });
};

elementjarallax();
