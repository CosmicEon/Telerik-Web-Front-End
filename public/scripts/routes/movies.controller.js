/* globals $ */

import { templateLoader } from 'templates';
import * as movieData from 'movieData';
import * as utils from 'utils';

const $mainContainer = $('#main-content');
const $mainNav = $('.main-paging-bottom');
const $mainAside = $('.aside-widget');
const $footer = $('footer');

const templateName = 'home/movies';
const templateNav = 'home/nav';
const templateAside = 'home/aside';
const templateFooter = 'footer';
const returnSize = 11;

// function getMoviesByCategory(params) {
//     const category = params.category;
//     Promise.all([
//         templateLoader(templateName),
//         templateLoader(templateNav),
//         templateLoader(templateAside),
//         templateLoader(templateFooter),
//         // movieData.getByCategory(category),
//         movieData.getByCategoryAndSubcategory(category, ''), // for testing
//     ])
//         .then(([home, nav, aside, footer, data]) => {
//             const navMaxLength = Math.ceil(data.length / returnSize) + 1;
//             const navData = data.slice(0, navMaxLength);
//             $mainContainer.html(home(data));
//             $mainNav.html(nav(navData));
//             $mainAside.html(aside); // data can be injected here
//             $footer.html(footer); // data can be injected here
//             utils.insertAside();
//         })
//         .catch((err) => {
//             return console.log(err);
//         });
// }

function getMoviesByCatAndSubcat(params) {
    const category = params.category;
    let subcategory = params.subcategory;
    if (typeof subcategory === 'undefined') {
        subcategory = ''; // only if category is given
    }

    Promise.all([
        templateLoader(templateName),
        templateLoader(templateNav),
        templateLoader(templateAside),
        templateLoader(templateFooter),
        movieData.getByCategoryAndSubcategory(category, subcategory),
    ])
        .then(([home, nav, aside, footer, data]) => {
            const navMaxLength = Math.ceil(data.length / returnSize) + 1;
            const navData = data.slice(0, navMaxLength);

            $mainContainer.html(home(data));
            $mainNav.html(nav(navData));
            $mainAside.html(aside); // data can be injected here
            $footer.html(footer); // data can be injected here

            utils.insertAside();
        })
        .catch((err) => {
            return console.log(err);
        });
}

export {
    getMoviesByCatAndSubcat,
};
