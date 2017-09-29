/* globals $ */

import { tamplateLoader } from 'templates';

const $mainContainer = $('#main-test');
const templateName = 'movies';

function getMovies() {
    return tamplateLoader(templateName)
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
