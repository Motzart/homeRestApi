const { HomeWeatherModel } = require('../models/appModels');

const dummyData = {
    place: 'Children Room',
    type: 'Weather Sensor',
    name: 'AM2302',
    serial: '170130FF4',
    temperature: 25.30,
    humidity: 30
}

module.exports = (router, config) => {

    router.get('/', (req, res) => {
        res.send({ mess: 'start' });
    })

    router.get('/config', (req, res) => {
        res.send(config);
    })

    router.get("/home-weather", (req, res) => {
        HomeWeatherModel.find({}, (err, list) => {
             if (err) res.send(err);
             res.json(list);
        })
    })

    router.put("/home-weather", (req, res) => {
        let data = new HomeWeatherModel(dummyData);
        data.save(function (err, data) {
            if (err) res.send(err);
            res.json(data);
        });
    })
}