import 'jquery';
import Navigo from 'navigo';

import * as homeController from 'homeController';
import * as moviesController from 'moviesController';

const appRoot = null;
const useHash = true;
const hash = '#';

const router = new Navigo(appRoot, useHash, hash);

router
    .navigate('#/home')
    .on('/home', homeController.getHome)
    .on('/movies/:category', moviesController.getMovies)
    .resolve();
