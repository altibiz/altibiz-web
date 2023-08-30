/**
 * Price switch
*/

var priceSwitch = function () {

    var switcherWrapper = document.querySelectorAll('.price-switch-wrapper');

    if (switcherWrapper.length <= 0) return;

    for (var i = 0; i < switcherWrapper.length; i++) {
        var switcher = switcherWrapper[i].querySelector('[data-bs-toggle="price"]');

        switcher.addEventListener('change', function (e) {
            var checkbox = e.currentTarget.querySelector('input[type="checkbox"]');
            var monthlyPrice = e.currentTarget.closest('.price-switch-wrapper').querySelectorAll('[data-monthly-price]');
            var annualPrice = e.currentTarget.closest('.price-switch-wrapper').querySelectorAll('[data-annual-price]');

            for (var n = 0; n < monthlyPrice.length; n++) {
                if (checkbox.checked == true) {
                    monthlyPrice[n].classList.add('d-none');
                } else {
                    monthlyPrice[n].classList.remove('d-none');
                }
            }

            for (var m = 0; m < monthlyPrice.length; m++) {
                if (checkbox.checked == true) {
                    annualPrice[m].classList.remove('d-none');
                } else {
                    annualPrice[m].classList.add('d-none');
                }
            }
        });
    }
};

priceSwitch();
