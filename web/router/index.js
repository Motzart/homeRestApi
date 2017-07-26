'use strict';

const router = require('express').Router();
const api = require('./api');

router.get('/temp', api.temp.get);
router.put('/temp', api.temp.put);

module.exports = router;