/* globals System */

System.config({
    transpiler: 'plugin-babel',
    map: {
        // plugins
        'plugin-babel': '/libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '/libs/systemjs-plugin-babel/systemjs-babel-browser.js',

        // libs
        'handlebars': '/libs/handlebars/dist/handlebars.min.js',
        'jquery': '/libs/jquery/dist/jquery.js',
        'navigo': '/libs/navigo/lib/navigo.min.js',

        // app main
        'app': '/scripts/app.js',

        // app routes
        'router': '/scripts/routes/router.js',
        'homeController': '/scripts/routes/home.controller.js',
        'moviesController': '/scripts/routes/movies.controller.js',

        // app data
        'homeData': '/scripts/data/home.data.js',

        // app utils
        'requester': '/scripts/utils/requester.js',
        'templates': '/scripts/utils/template.compiler.js',
    },
});
