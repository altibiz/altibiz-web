/**
 * Input fields formatter
 * @requires https://github.com/nosir/cleave.js
*/

var inputFormatter = function () {
    var inputs = document.querySelectorAll('[data-format]');
    if (inputs.length === 0) return;

    for (var i = 0; i < inputs.length; i++) {
        var targetInput = inputs[i];
        var cardIcon = targetInput.parentNode.querySelector('.credit-card-icon');
        var options, formatter;

        if (targetInput.getAttribute('data-format') !== undefined) {
            options = JSON.parse(targetInput.getAttribute('data-format'));
        }

        if (cardIcon) {
            formatter = new Cleave(targetInput, Object.assign({}, options, {
                onCreditCardTypeChanged: function (type) {
                    cardIcon.className = 'credit-card-icon ' + type;
                }
            }));
        } else {
            formatter = new Cleave(targetInput, options);
        }
    }
};

inputFormatter();
