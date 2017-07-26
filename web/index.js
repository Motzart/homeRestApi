const app = require('./server');
const config = require('../config');
const logger = require('winston');
const promisify = require('es6-promisify');

const serverListen = promisify(app.listen, app);

serverListen(config.server.port)
    .then(() => logger.info(`App is listening on port ${config.server.port}`))
    .catch(err => {
        logger.error('Error happend during server start', err);
        process.exit(1);
    });

