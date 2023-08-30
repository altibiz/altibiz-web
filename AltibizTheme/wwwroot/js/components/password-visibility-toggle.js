/**
 * Toggling password visibility in password input
*/

var passwordVisibilityToggle = function () {

    var elements = document.querySelectorAll('.password-toggle');

    for (var i = 0; i < elements.length; i++) {
        var passInput = elements[i].querySelector('.form-control');
        var passToggle = elements[i].querySelector('.password-toggle-btn');

        passToggle.addEventListener('click', function (e) {

            if (e.target.type !== 'checkbox') return;
            if (e.target.checked) {
                passInput.type = 'text';
            } else {
                passInput.type = 'password';
            }

        }, false);
    }
};

passwordVisibilityToggle();
