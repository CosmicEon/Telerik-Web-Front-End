const { Router } = require('express');

const attach = (app, data) => {
    const router = new Router();
    const bookController = require('../controllers/book.controller');

    router.get('/', (req, res, next) => {
        res.send('OK');
    });
    app.use('/books', router);
};

module.exports = { attach };
