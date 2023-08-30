/**
 * Toast
 * @requires https://getbootstrap.com
*/

var toast = function () {

    var toastElList = [].slice.call(document.querySelectorAll('.toast'));

    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl);
    });

};

toast();
