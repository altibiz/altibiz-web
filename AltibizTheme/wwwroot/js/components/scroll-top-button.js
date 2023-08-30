// Animate scroll to top button in/off view
(function () {
    var element = document.querySelector('.btn-scroll-top');
    var scrollOffset = 600;

    if (element == null) return;

    var offsetFromTop = parseInt(scrollOffset, 10);

    window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > offsetFromTop) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
})();
