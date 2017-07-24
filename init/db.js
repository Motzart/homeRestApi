const mongoose = require("mongoose");

// MLab free database 
const mLabUrl = "mongodb://weather:JEwoccaHetlodE9@ds141232.mlab.com:41232/home";

mongoose.connect(mLabUrl, { useMongoClient: true });
mongoose.Promise = Promise;

const db = mongoose.connection;

const dbPromise = new Promise((res, rej) => {
  db.on("error", (e) => rej(e));
  db.once("openUri", () => res());
});


dbPromise.then(() => {
  console.log("db connected");
})
  .catch((e) => {
    console.log("error", e);
    process.exit(1);
  });