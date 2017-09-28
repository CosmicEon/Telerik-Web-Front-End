import { tamplateLoader } from 'templates';

const $mainContainer = $('main-test');

function getHome() {
    return Promise.resolve(tamplateLoader.load('home'))
        .then((template) => {
            console.log('home.controller');
            // console.log(template);

            $mainContainer.html(template());
        })
        .catch((err) => {
            return console.log(err);
        });
}

export { getHome };
