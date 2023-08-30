/**
 * Gallery like styled lightbox component for presenting various types of media
 * @requires https://github.com/sachinchoolur/lightGallery
 */

// Gallery initialization
var gallery = function () {
    var galleryElements = document.querySelectorAll('.gallery');

    if (galleryElements.length) {
        for (var i = 0; i < galleryElements.length; i++) {
            var thumbnails = galleryElements[i].getAttribute('data-thumbnails') ? true : false,
                video = galleryElements[i].getAttribute('data-video') ? true : false,
                defaultPlugins = [lgZoom, lgFullscreen],
                videoPlugin = video ? [lgVideo] : [],
                thumbnailPlugin = thumbnails ? [lgThumbnail] : [],
                plugins = defaultPlugins.concat(videoPlugin, thumbnailPlugin);

            lightGallery(galleryElements[i], {
                selector: '.gallery-item',
                plugins: plugins,
                licenseKey: 'D4194FDD-48924833-A54AECA3-D6F8E646',
                download: false,
                autoplayVideoOnSlide: true,
                zoomFromOrigin: false,
                youtubePlayerParams: {
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0
                },
                vimeoPlayerParams: {
                    byline: 0,
                    portrait: 0,
                    color: '6366f1'
                }
            });
        }
    }
};

gallery();
