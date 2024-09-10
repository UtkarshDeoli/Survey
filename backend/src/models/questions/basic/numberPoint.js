const Mongoose = require("mongoose");
const baseSchema = require("../baseSchema");
const Schema = Mongoose.Schema;

const numberPointSchema = new Schema({
  limitValue: {
    from: Number,
    to: Number,
  },
  startValue: {
    type: Number,
  },
  midValue: {
    type: Number,
  },
  endValue: {
    type: Number,
  },
  displayAs: {
    type: String,
    enum: ["slider", "Numbers"],
  },
}).add(baseSchema);

module.exports = numberPointSchema;
