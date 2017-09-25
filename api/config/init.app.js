/* globals __dirname */

const express = require('express');
const path = require('path');
const morgan = require('morgan');

const config = require('./constants');

const init = (data) => {
    const app = express();

    // Load Morgan -> HTTP request logger
    app.use(morgan('combined', {
        skip: (req, res) => {
            return res.statusCode < 400;
        },
    }));

    // Load static content
    app.use(express.static(path.join(__dirname, '../../public/')));
    app.use('/dev', express.static('public'));

    require('../routers/router').attachTo(app, data);

    return Promise.resolve(app);
};

module.exports = { init };
