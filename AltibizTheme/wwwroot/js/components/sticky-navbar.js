/**
 * Sticky Navbar
 * Enable sticky behavior of navigation bar on page scroll
*/

var stickyNavbar = function () {

    var navbar = document.querySelector('.navbar-sticky');

    if (navbar == null) return;

    var navbarClass = navbar.classList;
    var navbarH = navbar.offsetHeight;
    var scrollOffset = 500;

    if (navbarClass.contains('position-absolute')) {
        window.addEventListener('scroll', function (e) {
            if (window.pageYOffset > scrollOffset) {
                navbar.classList.add('navbar-stuck');
            } else {
                navbar.classList.remove('navbar-stuck');
            }
        });
    } else {
        window.addEventListener('scroll', function (e) {
            if (window.pageYOffset > scrollOffset) {
                document.body.style.paddingTop = navbarH + 'px';
                navbar.classList.add('navbar-stuck');
            } else {
                document.body.style.paddingTop = '';
                navbar.classList.remove('navbar-stuck');
            }
        });
    }

};

stickyNavbar();
