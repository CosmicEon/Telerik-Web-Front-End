const { Router } = require('express');
const bookController = require('./books.controller');

const attach = (app, data) => {
    const router = new Router();

    router.get('/', (req, res, next) => {
        res.send('OK');
    });
    app.use('/books', router);
};

module.exports = { attach };
