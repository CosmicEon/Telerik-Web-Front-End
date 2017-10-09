/* globals $ */

const $mainElement = $('main');
const $sectionElement = $('#main-content');
const $pagingTop = $('ul.main-paging-top');
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


    $mainElement.css('margin', '10px 0px');
    $sectionElement.css('width', '100%');
    $pagingTop.css('margin-left', '83px');
    $asideElement.addClass('hidden');
}
function initializeMovieComments() {
    return $sectionElement.after('<section id="movie-comments"></section>');
}

function tablistSwitcher() {
    $('button.post-aside-btn').on('click', (ev) => {
        const $tabitemsList = $('ul.tabitems');
        const $eventTarget = $(ev.target);

        $tabitemsList.addClass('hidden');

        if ($eventTarget.hasClass('one')) {
            $tabitemsList.eq(0).removeClass('hidden');
        } else if ($eventTarget.hasClass('two')) {
            $tabitemsList.eq(1).removeClass('hidden');
        } else if ($eventTarget.hasClass('three')) {
            $tabitemsList.eq(2).removeClass('hidden');
        }
    });
}

export {
    insertAside,
    initializeMoviePost,
    initializeMovieComments,
    tablistSwitcher,
};
