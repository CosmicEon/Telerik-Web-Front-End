const { Router } = require('express');

const attach = (app, data) => {
    const moviesController = require('./movies.controller')(data);
    const router = new Router();

    router
        .get('/', (req, res) => {
            console.log('GET /movies/');
            return moviesController.getAllMovies(req, res);
        })
        .get('/:id', (req, res) => {
            // const params = parseInt(req.params.id, 10);

            // if (isNaN(params)) {
            //     console.log('GET /movies/:category');
            //     return moviesController.getMovieByCategory(req, res);
            // }
            console.log('GET /movies/:id');

            return moviesController.getMovieById(req, res);
        })
        .get('/:category/:subcategory', (req, res) => {
            console.log('GET /movies/:category/:subcategory');
            return moviesController.getMovieByCategoryAndSubcategory(req, res);
        })
        .get('/:category', (req, res) => {
            console.log('GET /movies/:category');
            return moviesController.getMovieByCategory(req, res);
        });

    app.use('/movies', router);
};

module.exports = { attach };
