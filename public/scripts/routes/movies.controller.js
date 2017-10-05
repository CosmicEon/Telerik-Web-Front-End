/* globals $ */

import { templateLoader } from 'templates';
import * as movieData from 'movieData';
import * as utils from 'utils';

const $mainContainer = $('#main-content');
const $mainNav = $('.main-paging');
const templateName = 'movies';
const templateNav = 'nav';
const returnSize = 11;

function getMoviesByCategory(params) {
    const category = params.category;

    Promise.all([
        templateLoader(templateName),
        templateLoader(templateNav),
        movieData.getByCategory(category),
    ])
        .then(([home, nav, data]) => {
            const navMaxLength = Math.ceil(data.length / returnSize) + 1;
            const navData = data.slice(0, navMaxLength);

            $mainContainer.html(home(data));
            $mainNav.html(nav(navData));

            utils.checkSpaceForAside();
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
        templateLoader(templateNav),
        movieData.getByCategoryAndSubcategory(category, subcategory),
    ])
        .then(([home, nav, data]) => {
            const navMaxLength = Math.ceil(data.length / returnSize) + 1;
            const navData = data.slice(0, navMaxLength);

            $mainContainer.html(home(data));
            $mainNav.html(nav(navData));

            utils.checkSpaceForAside();
        })
        .catch((err) => {
            return console.log(err);
        });
}

export {
    getMoviesByCategory,
    getMoviesByCategoryAndSubcategory,
};
