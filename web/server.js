const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const db = require('./db/db');
const router = require('./router');
const logger = require('winston');
const _ = require('lodash');

express.response.jsonSuccess = function (data) {
    this.json({ data, success: true });
};

express.response.errorResponse = function (status, e) {
    if (_.isString(e)) {
        logger.error('RESPONSE ERROR:', e);
        e = { message: e };
    }
    this.status(status).send({ success: false, data: { message: e.message } });
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(jsonParser);


app.use('/api', router);


module.exports = app;