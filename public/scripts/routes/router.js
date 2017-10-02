import Navigo from 'navigo';

import * as homeController from 'homeController';
import * as moviesController from 'moviesController';

const appRoot = null;
const useHash = true;
const hash = '#';

const router = new Navigo(appRoot, useHash, hash);

function initRouter() {
    router
        .navigate('#/home')
        .on('/home', homeController.getHome)
        .on('/movies/:category', moviesController.getMoviesByCategory)
        .on('/movies/:category/:subcategory', moviesController.getMoviesByCategoryAndSubcategory)
        .resolve();
}

export { initRouter };
