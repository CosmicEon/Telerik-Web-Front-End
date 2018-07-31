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
    .navigate('#/home/1')
    .on('/home/:page', homeController.getHome)
    .on('/movies/:category/:page', moviesController.getMoviesByCatAndSubcat)
    .on('/movies/:category/:subcategory/:page', moviesController.getMoviesByCatAndSubcat)
    .on('/post/movie/:id', moviePostController.getMovieById)
    .resolve();
}

export { initRouter };
