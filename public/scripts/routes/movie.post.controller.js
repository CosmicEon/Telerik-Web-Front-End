/* globals $ */

import { templateLoader } from 'templates';
import * as moviePostData from 'moviePostData';
import * as utils from 'utils';

const $mainContainer = $('#main-content');
const templateName = 'post/post.movie';

function getMovieById(params) {
    const id = params.id;


    Promise.all([
        templateLoader(templateName),
        moviePostData.getById(id),
    ])
        .then(([home, data]) => {
            utils.initializeMoviePost();

            $mainContainer.html(home(data));
        })
        .catch((err) => {
            return console.log(err);
        });
}

export { getMovieById };
