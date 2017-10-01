/* globals $ */

import { templateLoader } from 'templates';

const $mainContainer = $('#main-content');
const templateName = 'movies';

function getMovies() {
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

export { getMovies };
