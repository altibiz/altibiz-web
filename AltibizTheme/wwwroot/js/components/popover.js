/**
 * Popover
 * @requires https://getbootstrap.com
 * @requires https://popper.js.org/
*/

var popover = function () {

    var popoverTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));

    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

};

popover();
