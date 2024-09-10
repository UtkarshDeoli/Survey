const Mongoose = require("mongoose");
const baseSchema = require("../baseSchema");
const Schema = Mongoose.Schema;

const checkBoxSchema = new Schema({
  options: {
    type: [String],
    required: true,
  },
  hiddenOptions: {
    type: [String],
  },
  minimumOptionsRequired: {
    type: Number,
  },
  maximumOptionsSelectable: {
    type: Number,
  },
  uniqueOptions: { type: String },
  checkAllOptions: {
    type: String,
  },
  enableTextSearch: {
    type: Boolean,
    default: false,
  },
  randomizeOptions: {
    type: Boolean,
    default: false,
  },
  //TODO: image as option
}).add(baseSchema);

module.exports = checkBoxSchema;
