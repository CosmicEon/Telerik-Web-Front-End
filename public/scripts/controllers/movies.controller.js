import { tamplateLoader } from 'templates';

const $mainContainer = $('main-test');

function getMovies() {
    console.log(tamplateLoader.load('movies'));
    return tamplateLoader.load('movies')
        .then((template) => {
            console.log('home.controller');
            // console.log(template);

            $mainContainer.html(template());
        })
        .catch((err) => {
            return console.log(err);
        });
}

export { getMovies };
