/* globals $ */

import { templateLoader } from 'templates';
import * as homeData from 'homeData';
import * as utils from 'utils';

const $mainContainer = $('#main-content');
const $mainNav = $('.main-paging-bottom');
const $footer = $('footer');

const templateName = 'home/movies';
const templateNav = 'home/nav';
const templateFooter = 'footer';
const returnSize = 11;

function getHome(params) {
    const page = parseInt(params.page, 20);

    const startIndex = (page - 1) * returnSize;
    const endIndex = page * returnSize;

    Promise.all([
        templateLoader(templateName),
        templateLoader(templateNav),
        templateLoader(templateFooter),
        homeData.getAll(),
    ])
        .then(([home, nav, footer, data]) => {
            const pageData = data.slice(startIndex, endIndex);
            const navMaxLength = Math.ceil(data.length / returnSize) + 1;
            const navData = pageData.slice(0, navMaxLength);

            $mainContainer.html(home(pageData));
            $mainNav.html(nav(navData));
            $footer.html(footer); // data can be injected here

            utils.insertAside();
            // router.initRouter();
        })
        .catch((err) => {
            return console.log(err);
        });
}

export { getHome };
