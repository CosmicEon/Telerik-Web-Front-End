/* globals $ */

import { templateLoader } from 'templates';
import * as homeData from 'homeData';

const $mainContainer = $('#main-content');
const $mainNav = $('.main-paging');
const templateName = 'movies';
const templateNav = 'nav';
const returnSize = 11;

function getHome(params) {
    const page = parseInt(params.page, 20);

    const startIndex = (page - 1) * returnSize;
    const endIndex = page * returnSize;

    Promise.all([
        templateLoader(templateName),
        templateLoader(templateNav),
        homeData.getAll(),
    ])
        .then(([home, nav, data]) => {
            const pageData = data.slice(startIndex, endIndex);
            const navMaxLength = Math.ceil(data.length / returnSize) + 1;
            const navData = pageData.slice(0, navMaxLength);

            $mainContainer.html(home(pageData));
            $mainNav.html(nav(navData));

            // router.initRouter();
        })
        .catch((err) => {
            return console.log(err);
        });
}

export { getHome };
