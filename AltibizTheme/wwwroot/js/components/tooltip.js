/**
 * Tooltip
 * @requires https://getbootstrap.com
 * @requires https://popper.js.org/
*/

var tooltip = function () {

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, { trigger: 'hover' });
    });

};

tooltip();
