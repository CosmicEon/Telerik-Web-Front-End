const { Router } = require('express');

const attach = (app, data) => {
    const commentsController = require('./comments.controller')(data);
    const router = new Router();

    router
        .get('/', (req, res) => {
            return commentsController.getComments(req, res);
        })
        .post('/', (req, res) => {
            return commentsController.postComment(req, res);
        })
        .get('/:id', (req, res) => {
            return commentsController.getCommentById(req, res);
        });

    app.use('/comments', router);
};

module.exports = { attach };
