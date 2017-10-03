/* globals $ */

import { templateLoader } from 'templates';
import * as movieData from 'movieData';

const $mainContainer = $('#main-content');
const $mainNav = $('.main-nav');
const templateName = 'movies';
const templateNav = 'nav';
const returnSize = 11;

function getMoviesByCategory(params) {
    const category = params.category;
    const page = parseInt(params.page, 20);

    const startIndex = (page - 1) * returnSize;
    const endIndex = page * returnSize;

    Promise.all([
        templateLoader(templateName),
        templateLoader(templateNav),
        movieData.getByCategory(category),
    ])
        .then(([home, nav, data]) => {
            console.log(data);
            for (const i in data) {
                data[i].category = category;
            }
            const pageData = data.slice(startIndex, endIndex);
            console.log(pageData);

            const navMaxLength = Math.ceil(data.length / returnSize) + 1;
            const navData = pageData.slice(0, navMaxLength);

            $mainContainer.html(home(pageData));
            $mainNav.html(nav(navData));
        })
        .catch((err) => {
            return console.log(err);
        });
}

function getMoviesByCategoryAndSubcategory(params) {
    const category = params.category;
    const subcategory = params.subcategory;
    const page = parseInt(params.page, 20);

    const startIndex = (page - 1) * returnSize;
    const endIndex = page * returnSize;
    Promise.all([
        templateLoader(templateName),
        templateLoader(templateNav),
        movieData.getByCategoryAndSubcategory(category, subcategory),
    ])
        .then(([home, nav, data]) => {
            // need to convert paging into server
            console.log(data);
            for (const i in data) {
                data[i].category = category;
                data[i].subcategory = subcategory;
            }
            const pageData = data.slice(startIndex, endIndex);
            console.log(pageData);

            const navMaxLength = Math.ceil(data.length / returnSize) + 1;
            const navData = pageData.slice(0, navMaxLength);

            $mainContainer.html(home(pageData));
            $mainNav.html(nav(navData));
        })
        .catch((err) => {
            return console.log(err);
        });
}

export {
    getMoviesByCategory,
    getMoviesByCategoryAndSubcategory,
};
