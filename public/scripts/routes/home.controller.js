/* globals $ */

import { templateLoader } from 'templates';
import * as homeData from 'homeData';

const $mainContainer = $('#main-content');
const templateName = 'home';

function getHome() {
    Promise.all([
        templateLoader(templateName),
        homeData.getAll(),
    ])
        .then(([home, data]) => {
            $mainContainer.html(home(data));
        })
        .catch((err) => {
            return console.log(err);
        });
}

export { getHome };
