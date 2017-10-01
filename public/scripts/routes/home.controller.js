/* globals $ */

import { templateLoader } from 'templates';

const $mainContainer = $('#main-content');
const templateName = 'home';

function getHome() {
    return templateLoader(templateName)
        .then((template) => {
            // this is used if data is passed on template
            // $mainContainer.html(template(data));
            $mainContainer.html(template);
        })
        .catch((err) => {
            return console.log(err);
        });
}

export { getHome };
