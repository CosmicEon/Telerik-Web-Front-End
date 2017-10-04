import Navigo from 'navigo';

import * as homeController from 'homeController';
import * as moviesController from 'moviesController';
import * as moviePostController from 'moviePostController';

const appRoot = null;
const useHash = true;
const hash = '#';

const router = new Navigo(appRoot, useHash, hash);

function initRouter() {
    router
        .navigate('#/home/:page')
        .on('/home/:page', homeController.getHome)
        .on('/movies/:category/:page', moviesController.getMoviesByCategory)
        .on('/movies/:category/:subcategory/:page', moviesController.getMoviesByCategoryAndSubcategory)
        .on('/post/movie/:id', moviePostController.getMovieById)
        .resolve();
}

export { initRouter };
