/**
 * Range slider
 * @requires https://github.com/leongersen/noUiSlider
*/

var rangeSlider = function () {

    var rangeSliderWidgets = document.querySelectorAll('.range-slider');

    for (var i = 0; i < rangeSliderWidgets.length; i++) {

        var rangeSlider = rangeSliderWidgets[i].querySelector('.range-slider-ui');
        var valueMinInput = rangeSliderWidgets[i].querySelector('.range-slider-value-min');
        var valueMaxInput = rangeSliderWidgets[i].querySelector('.range-slider-value-max');

        var options = {
            dataStartMin: parseInt(rangeSliderWidgets[i].getAttribute('data-start-min'), 10),
            dataStartMax: parseInt(rangeSliderWidgets[i].getAttribute('data-start-max'), 10),
            dataMin: parseInt(rangeSliderWidgets[i].getAttribute('data-min'), 10),
            dataMax: parseInt(rangeSliderWidgets[i].getAttribute('data-max'), 10),
            dataStep: parseInt(rangeSliderWidgets[i].getAttribute('data-step'), 10),
            dataPips: rangeSliderWidgets[i].getAttribute('data-pips')
        };

        var start = (options.dataStartMax) ? [options.dataStartMin, options.dataStartMax] : [options.dataStartMin];
        var connect = (options.dataStartMax) ? true : 'lower';

        noUiSlider.create(rangeSlider, {
            start: start,
            connect: connect,
            step: options.dataStep,
            pips: options.dataPips ? { mode: 'count', values: 5 } : false,
            tooltips: true,
            range: {
                'min': options.dataMin,
                'max': options.dataMax
            },
            format: {
                to: function (value) {
                    return '$' + parseInt(value, 10);
                },
                from: function (value) {
                    return Number(value);
                }
            }
        });

        rangeSlider.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            value = value.replace(/\D/g, '');
            if (handle) {
                if (valueMaxInput) {
                    valueMaxInput.value = Math.round(value);
                }
            } else {
                if (valueMinInput) {
                    valueMinInput.value = Math.round(value);
                }
            }
        });

        if (valueMinInput) {
            valueMinInput.addEventListener('change', function () {
                rangeSlider.noUiSlider.set([this.value, null]);
            });
        }

        if (valueMaxInput) {
            valueMaxInput.addEventListener('change', function () {
                rangeSlider.noUiSlider.set([null, this.value]);
            });
        }
    }

};

rangeSlider();
