'use strict';
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({silent: true});
}

const logger = require('./logger');
const server = require('./server');
const mongodb = require('./mongoDb');

module.exports = Object.assign({}, logger, server, mongodb);

