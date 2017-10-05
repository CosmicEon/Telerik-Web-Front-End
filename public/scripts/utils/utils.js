/* globals $ */
const $sectionElement = $('#main-content');
function checkSpaceForAside() {
    const $articlesSize = $sectionElement.children().length;
    const $asideElem = $('div.aside-widget');

    if ($articlesSize < 10) {
        $asideElem.removeClass('hidden');
        $sectionElement.css('width', '76%');
    } else {
        $asideElem.addClass('hidden');
        $sectionElement.css('width', '100%');
    }
}

export {
    checkSpaceForAside,
};
