"use strict";
const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");

let HomeWeatherSchema = new mongoose.Schema({
  place: {type: String, required: true},
  name: String,
  type: String,
  serial:  {type: String, required: true},
  temperature: Number,
  humidity: Number
});

HomeWeatherSchema.plugin(timestamps);

module.exports = mongoose.model("HomeWeather", HomeWeatherSchema);