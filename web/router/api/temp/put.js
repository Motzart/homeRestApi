'use strict';

const TempModel = require('../../../../models');
const dummyData = {
    place: 'Children Room',
    type: 'Weather Sensor',
    name: 'AM2302',
    serial: '170130FF4',
    temperature: 25.30,
    humidity: 30
};

module.exports = function (req, res) {

    let data = new TempModel(dummyData);
    data.save(function (err, data) {
        if (err) res.errorResponse(err);
        res.jsonSuccess(data);
    });
};

