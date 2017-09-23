const attachTo = (app, data) => {
    // Insert other routes here
    require('./book.router').attach(app, data);
};

module.exports = { attachTo };
