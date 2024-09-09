const Mongoose = require("mongoose");
const baseSchema = require("./baseSchema");
const Schema = Mongoose.Schema;

const decimalInputSchema = new Schema({
  suffix: {
    type: String,
  },
  precision: {
    type: Number,
  },
  limitLength: {
    from: Number,
    to: Number,
  },
  validationPattern: {
    type: String,
  },
  validationMessage: {
    type: String,
  },
  includeInCrossTab: {
    type: Boolean,
  },
}).add(baseSchema);

module.exports = decimalInputSchema;
