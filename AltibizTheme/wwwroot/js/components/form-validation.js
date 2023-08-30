/**
 * Form validation
 */

// Form validation initialization
var formValidation = function () {
    var selector = 'needs-validation';

    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName(selector);
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (e) {
                if (form.checkValidity() === false) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
};

formValidation();
