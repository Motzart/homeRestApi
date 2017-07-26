const mongoose = require('mongoose');
const config = require('../../config');

mongoose.connect(config.mongodb.url, { useMongoClient: true });
mongoose.Promise = Promise;

const db = mongoose.connection;

const dbPromise = new Promise((res, rej) => {
    db.on('error', (e) => rej(e));
    db.once('openUri', () => res());
});


dbPromise.then(() => {
    console.log('db connected');
})
    .catch((e) => {
        console.log('error', e);
        process.exit(1);
    });  