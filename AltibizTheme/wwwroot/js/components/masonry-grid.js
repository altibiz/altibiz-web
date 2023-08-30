/**
 * Cascading (Masonry) grid layout
 * 
 * @requires https://github.com/desandro/imagesloaded
 * @requires https://github.com/Vestride/Shuffle
*/

var masonryGrid = function () {

    var grids = document.querySelectorAll('.masonry-grid'),
        masonry;

    if (grids === null) return;

    for (var i = 0; i < grids.length; i++) {
        masonry = new Shuffle(grids[i], {
            itemSelector: '.masonry-grid-item',
            sizer: '.masonry-grid-item'
        });

        imagesLoaded(grids[i]).on('progress', function () {
            masonry.layout();
        });

        // Filtering
        var filtersWrap = grids[i].closest('.masonry-filterable');
        if (filtersWrap === null) return;
        var filters = filtersWrap.querySelectorAll('.masonry-filters [data-group]');

        for (var n = 0; n < filters.length; n++) {
            filters[n].addEventListener('click', function (e) {
                var current = filtersWrap.querySelector('.masonry-filters .active'),
                    target = this.getAttribute('data-group');
                if (current !== null) {
                    current.classList.remove('active');
                }
                this.classList.add('active');
                masonry.filter(target);
                e.preventDefault();
            });
        }
    }

};

masonryGrid();
