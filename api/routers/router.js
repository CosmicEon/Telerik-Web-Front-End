const attachTo = (app, data) => {
    // Insert other routes here
    require('./movies/movies.router').attach(app, data);
    require('./comments/comments.router').attach(app, data);
};

module.exports = { attachTo };
