/**
 * Theme Mode Switch
 * Switch between light/dark mode. The chosen mode is saved to the browser's local storage
*/

var themeModeSwitch = function () {

    var modeSwitch = document.querySelector('[data-bs-toggle="mode"]');

    if (modeSwitch === null) return;

    var checkbox = modeSwitch.querySelector('.form-check-input');
    var root = document.documentElement;

    var mode = window.localStorage.getItem('mode');

    if (mode === 'dark') {
        root.classList.add('dark-mode');
        checkbox.checked = true;
    } else {
        root.classList.remove('dark-mode');
        checkbox.checked = false;
    }

    modeSwitch.addEventListener('click', function (e) {
        if (checkbox.checked) {
            root.classList.add('dark-mode');
            window.localStorage.setItem('mode', 'dark');
        } else {
            root.classList.remove('dark-mode');
            window.localStorage.setItem('mode', 'light');
        }
    });

};

themeModeSwitch();
