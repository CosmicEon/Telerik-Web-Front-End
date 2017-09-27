import Navigo from 'navigo';
import * as controllers from 'controllers';

function initRouter() {
    const router = new Navigo(null, true, '#');
    console.log('test import');
    router
        .on('/home', controllers.home.getHome)
        .on('/movie', controllers.movie.getMovie)
        .on('*', controllers.home.getHome)
        .resolve();
}

export { initRouter };
