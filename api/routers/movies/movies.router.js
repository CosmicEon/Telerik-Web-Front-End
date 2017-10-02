const { Router } = require('express');

const attach = (app, data) => {
    const moviesController = require('./movies.controller')(data);
    const router = new Router();

    router
        .get('/', (req, res) => {
            // console.log('GET /movies/');
            return moviesController.getAllMovies(req, res);
        })
        .get('/:id', (req, res) => {
            // console.log('GET /movies/:id');
            return moviesController.getMovieById(req, res);
        })
        .get('/category/:category/:subcategory', (req, res) => {
            // console.log('GET /movies/:category/:subcategory');
            return moviesController.getMovieByCategoryAndSubcategory(req, res);
        })
        .get('/category/:category', (req, res) => {
            // console.log('GET /movies/:category');
            return moviesController.getMovieByCategory(req, res);
        });

    app.use('/movies', router);
};

module.exports = { attach };
