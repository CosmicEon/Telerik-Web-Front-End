/* globals $ */

import { templateLoader } from 'templates';
import * as movieData from 'movieData';

const $mainContainer = $('#main-content');
const templateName = 'movies';

function getMoviesByCategory(params) {
    const category = params.category;

    Promise.all([
        templateLoader(templateName),
        movieData.getByCategory(category),
    ])
        .then(([home, data]) => {
            $mainContainer.html(home(data));
        })
        .catch((err) => {
            return console.log(err);
        });
}

function getMoviesByCategoryAndSubcategory(params) {
    const category = params.category;
    const subcategory = params.subcategory;

    Promise.all([
        templateLoader(templateName),
        movieData.getByCategoryAndSubcategory(category, subcategory),
    ])
        .then(([home, data]) => {
            $mainContainer.html(home(data));
        })
        .catch((err) => {
            return console.log(err);
        });
}

export {
    getMoviesByCategory,
    getMoviesByCategoryAndSubcategory,
};
