/* globals $ */

const $mainElement = $('main');
const $sectionElement = $('#main-content');

function checkSpaceForAside() {
    const $articlesSize = $sectionElement.children('article').length;
    const $asideElem = $('div.aside-widget');

    if ($articlesSize < 10) {
        $asideElem.removeClass('hidden');
        $mainElement.css('margin', '13px 75px');
        $sectionElement.css('width', '76%');
    } else {
        $asideElem.addClass('hidden');
        $mainElement.css('margin', '20px 75px');
        $sectionElement.css('width', '100%');
    }
}

export {
    checkSpaceForAside,
};
