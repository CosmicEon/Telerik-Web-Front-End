/* globals System */

System.config({
    transpiler: 'plugin-babel',
    map: {
        // plugins
        'plugin-babel': '/libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '/libs/systemjs-plugin-babel/systemjs-babel-browser.js',

        // libs
        'jquery': '/libs/jquery/dist/jquery.js',
        'bootstrap': '/libs/bootstrap/dist/js/bootstrap.min.js',
        'navigo': '/libs/navigo/lib/navigo.min.js',
        'handlebars': '/libs/handlebars/dist/handlebars.min.js',

        // app
        'main': '/scripts/main.js',
        'requester': '/scripts/utils/requester.js',
        'data': '',
        'templates': '/scripts/utils/template.compiler.js',

        // controllers
        'homeController': '/scripts/controllers/home.controller.js',
        'moviesController': '/scripts/controllers/movies.controller.js',
    },
});
