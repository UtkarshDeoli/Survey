const Mongoose = require("mongoose");
const baseSchema = require("../baseSchema");
const Schema = Mongoose.Schema;

const multilineTextSchema = new Schema({
  suffix: {
    type: String,
  },
  limitValue: {
    from: Number,
    to: Number,
  },
  displayInSurvey: {
    type: Boolean,
  },
}).add(baseSchema);

module.exports = multilineTextSchema;
