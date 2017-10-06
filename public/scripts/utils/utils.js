/* globals $ */

const $mainElement = $('main');
const $sectionElement = $('#main-content');
const $pagingTop = $('section ul.main-paging-top');
const $pagingBottom = $('nav.main-paging-bottom');
const $asideElement = $('div.aside-widget');

function insertAside() {
    const $articlesSize = $sectionElement.children('article').length;

    if ($articlesSize < 10) {
        $asideElement.removeClass('hidden');
        $mainElement.css('margin', '10px 75px');
        $sectionElement.css('width', '76%');
    } else {
        $asideElement.addClass('hidden');
        $mainElement.css('margin', '20px 75px');
        $sectionElement.css('width', '100%');
    }
}

function initializeMoviePost() {
    $pagingBottom.html('');
    $asideElement.removeClass('hidden');
    $mainElement.css('margin', '10px 0px');
    // $pagingTop.addClass('movie-post-paging');
    $pagingTop.css('margin-left', '83px');
    // $pagingTop.css('margin-bottom', '13px');
}

export {
    insertAside,
    initializeMoviePost,
};
