/* globals __dirname */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');

const init = (data) => {
    const app = express();

    // Middlewares
    app.use(cors());
    app.use(morgan('combined', {
        skip: (req, res) => {
            return res.statusCode < 400;
        },
    }));
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Load static content
    app.use('/public', express.static('public'));
    app.use('/libs', express.static('node_modules'));

    require('../routers/router').attachTo(app, data);

    return Promise.resolve(app);
};

module.exports = { init };
