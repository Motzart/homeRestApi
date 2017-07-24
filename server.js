const app = require("./init/app");
const config = require("./config");
const db = require("./init/db");

app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`);
});