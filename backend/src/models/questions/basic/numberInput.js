const Mongoose = require("mongoose");
const baseSchema = require("./baseSchema");
const Schema = Mongoose.Schema;

const numberInputSchema = new Schema({
  suffix: {
    type: String,
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

module.exports = numberInputSchema;
