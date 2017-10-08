/* globals $ */

import { templateLoader } from 'templates';
import * as moviePostData from 'moviePostData';
import * as utils from 'utils';

const $mainContainer = $('#main-content');
const $commentsContainer = $('#movie-comments');
const templateMovie = 'post/post.movie';
const templateComments = 'post/comments';

function getMovieById(params) {
    const id = params.id;

    Promise.all([
        templateLoader(templateMovie),
        templateLoader(templateComments),
        moviePostData.getById(id),
    ])
        .then(([movie, comments, data]) => {
            utils.initializeMoviePost();

            $mainContainer.html(movie(data));
            $commentsContainer.html(comments);

            utils.tablistSwitcher();
        })
        .catch((err) => {
            return console.log(err);
        });
}

export { getMovieById };
