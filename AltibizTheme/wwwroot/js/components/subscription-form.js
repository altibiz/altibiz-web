/**
 * Ajaxify MailChimp subscription form
*/

var subscriptionForm = function () {

    var forms = document.querySelectorAll('.subscription-form');

    if (forms == null) return;

    for (var i = 0; i < forms.length; i++) {

        var button = forms[i].querySelector('button[type="submit"]');
        var buttonText = button.innerHTML;
        var input = forms[i].querySelector('.form-control');
        var antispam = forms[i].querySelector('.subscription-form-antispam');
        var status = forms[i].querySelector('.subscription-status');

        forms[i].addEventListener('submit', function (e) {
            if (e) e.preventDefault();
            if (antispam.value !== '') return;
            register(this, button, input, buttonText, status);
        });
    }

    var register = function (form, button, input, buttonText, status) {
        button.innerHTML = 'Sending...';

        // Get url for MailChimp
        var url = form.action.replace('/post?', '/post-json?');

        // Add form data to object
        var data = '&' + input.name + '=' + encodeURIComponent(input.value);

        // Create and add post script to the DOM
        var script = document.createElement('script');
        script.src = url + '&c=callback' + data;
        document.body.appendChild(script);

        // Callback function
        var callback = 'callback';
        window[callback] = function (response) {

            // Remove post script from the DOM
            delete window[callback];
            document.body.removeChild(script);

            // Change button text back to initial
            button.innerHTML = buttonText;

            // Display content and apply styling to response message conditionally
            if (response.result == 'success') {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
                status.classList.remove('status-error');
                status.classList.add('status-success');
                status.innerHTML = response.msg;
                setTimeout(function () {
                    input.classList.remove('is-valid');
                    status.innerHTML = '';
                    status.classList.remove('status-success');
                }, 6000);
            } else {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
                status.classList.remove('status-success');
                status.classList.add('status-error');
                status.innerHTML = response.msg.substring(4);
                setTimeout(function () {
                    input.classList.remove('is-invalid');
                    status.innerHTML = '';
                    status.classList.remove('status-error');
                }, 6000);
            }
        };
    };
};

subscriptionForm();
