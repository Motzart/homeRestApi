'use strict';

const TempModel = require('../../../../models');

module.exports = function(req, res) {

    TempModel.find({}, (err, list) => {
        if (err) res.errorResponse(err);
        res.jsonSuccess(list);
    });
    
};