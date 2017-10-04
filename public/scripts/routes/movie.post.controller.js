/* globals $ */

import { templateLoader } from 'templates';
import * as moviePostData from 'moviePostData';

const $mainContainer = $('#main-content');
const templateName = 'movie.post';

function getMovieById(params) {
    const id = params.id;
    Promise.all([
        templateLoader(templateName),
        moviePostData.getById(id),
    ])
        .then(([home, data]) => {
            $mainContainer.html(home(data));
        })
        .catch((err) => {
            return console.log(err);
        });
}

export { getMovieById };
