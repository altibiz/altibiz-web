/**
 * Mouse move parallax effect
 * @requires https://github.com/wagerfield/parallax
*/

var parallax = function () {

    var elements = document.querySelectorAll('.parallax');

    for (var i = 0; i < elements.length; i++) {
        var parallaxInstance = new Parallax(elements[i]);
    }

};

parallax();
