const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const config = require('../config');

app.use(bodyParser.urlencoded({extended: true}));
app.use(jsonParser);

const router = express.Router();
app.use('/api', router);

require('./routes')(router, config);

module.exports = app;
