const attachTo = (app, data) => {
    // Insert other routes here
    require('./books/books.router').attach(app, data);
};

module.exports = { attachTo };
