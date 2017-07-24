module.exports = (router, config) => {

    router.get('/', (req, res) => {
        res.send({mess: 'start'});
    })

    router.get('/config', (req, res) => {
        res.send(config);
    })
}