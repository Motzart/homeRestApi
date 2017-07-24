module.exports = {
    name: "home server",
    version: "0.0.1",
    env: process.env.NODE_ENV || "dev",
    port: process.env.PORT || 8080,
    api_url: process.env.API_URL || "http://localhost/api",

};