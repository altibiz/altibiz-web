/**
 * Mouse move jarallax effect
 * @requires https://github.com/wagerfield/jarallax
 */

// Mouse move jarallax initialization
var audioPlayer = function () {

    var player = document.querySelectorAll('.audio-player');

    if (player.length === 0) return;

    for (var i = 0; i < player.length; i++) {
        var playerContainer = player[i],
            audio = playerContainer.querySelector('audio'),
            playButton = playerContainer.querySelector('.ap-play-button'),
            seekSlider = playerContainer.querySelector('.ap-seek-slider'),
            volumeSlider = playerContainer.querySelector('.ap-volume-slider'),
            durationTimeLabel = playerContainer.querySelector('.ap-duration'),
            currentTimeLabel = playerContainer.querySelector('.ap-current-time');

        var playState = 'play',
            raf = null;

        // Start / stop audio
        playButton.addEventListener('click', function (e) {
            if (playState === 'play') {
                e.currentTarget.classList.add('ap-pause');
                audio.play();
                requestAnimationFrame(whilePlaying);
                playState = 'pause';
            } else {
                e.currentTarget.classList.remove('ap-pause');
                audio.pause();
                cancelAnimationFrame(raf);
                playState = 'play';
            }
        });

        // Instantiate sliders: Seek slider + Volume slider
        var showRangeProgress = function (rangeInput) {
            if (rangeInput === seekSlider) playerContainer.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
            else playerContainer.style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
        }

        seekSlider.addEventListener('input', function (e) {
            showRangeProgress(e.target);
        });
        volumeSlider.addEventListener('input', function (e) {
            showRangeProgress(e.target);
        });

        var calculateTime = function (secs) {
            var minutes = Math.floor(secs / 60);
            var seconds = Math.floor(secs % 60);
            var returnedSeconds = seconds < 10 ? '0' + seconds : '' + seconds;
            return minutes + ':' + returnedSeconds;
        }

        var displayDuration = function () {
            durationTimeLabel.textContent = calculateTime(audio.duration);
        }

        var setSliderMax = function () {
            seekSlider.max = Math.floor(audio.duration);
        }

        var displayBufferedAmount = function () {
            var bufferedAmount = Math.floor(audio.buffered.end(audio.buffered.length - 1));
            playerContainer.style.setProperty('--buffered-width', (bufferedAmount / seekSlider.max) * 100 + '%');
        }

        var whilePlaying = function () {
            seekSlider.value = Math.floor(audio.currentTime);
            currentTimeLabel.textContent = calculateTime(seekSlider.value);
            playerContainer.style.setProperty('--seek-before-width', seekSlider.value / seekSlider.max * 100 + '%');
            raf = requestAnimationFrame(whilePlaying);
        }

        if (audio.readyState > 0) {
            displayDuration();
            setSliderMax();
            displayBufferedAmount();
        } else {
            audio.addEventListener('loadedmetadata', function () {
                displayDuration();
                setSliderMax();
                displayBufferedAmount();
            });
        }

        audio.addEventListener('progress', displayBufferedAmount);

        seekSlider.addEventListener('input', function () {
            currentTimeLabel.textContent = calculateTime(seekSlider.value);
            if (!audio.paused) {
                cancelAnimationFrame(raf);
            }
        });

        seekSlider.addEventListener('change', function () {
            audio.currentTime = seekSlider.value;
            if (!audio.paused) {
                requestAnimationFrame(whilePlaying);
            }
        });

        volumeSlider.addEventListener('input', function (e) {
            var value = e.target.value;
            audio.volume = value / 100;
        });
    }
};

audioPlayer();
