const Mongoose = require("mongoose");
const multilineTextSchema = require("./multilineText");
const Schema = Mongoose.Schema;

const singlelineTextSchema = new Schema({
  formula: {
    type: String,
  },
  validationPattern: {
    type: String,
  },
  validationMessage: {
    type: String,
  },
}).add(multilineTextSchema);

module.exports = singlelineTextSchema;
