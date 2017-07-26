'use strict';
const logger = require('winston');
const config = require('./config');

logger.info(`Starting Web server on ${config.env} mode`);

require('./web');