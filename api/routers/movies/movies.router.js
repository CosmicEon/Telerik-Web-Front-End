const { Router } = require('express');

const attach = (app, data) => {
    const moviesController = require('./movies.controller')(data);
    const router = new Router();

    router
        .get('/', (req, res) => {
            return moviesController.getMovies(req, res);
        })
        .get('/:id', (req, res) => {
            return moviesController.getMovie(req, res);
        });

    app.use('/movies', router);
};

module.exports = { attach };
