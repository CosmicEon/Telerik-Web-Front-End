import { loadTemplate } from '../utils/template.compiler';

const $mainContainer = $('main-test');
function getHome() {
    loadTemplate('home')
        .then((template) => {
            $mainContainer.html(template);
        });
}

export { getHome };
