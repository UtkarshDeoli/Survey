const Mongoose = require("mongoose");
const baseSchema = require("../baseSchema");
const Schema = Mongoose.Schema;

const checkBoxTextSchema = new Schema({
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
  minimumOptionsSelectable: {
    type: Number,
  },
  randomizeOptions: {
    type: Boolean,
    default: false,
  },
  //TODO: image as options
}).add(baseSchema);

module.exports = checkBoxTextSchema;
