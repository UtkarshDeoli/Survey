const Mongoose = require("mongoose");
const baseSchema = require("./baseSchema");
const Schema = Mongoose.Schema;

const dropDownSchema = new Schema({
  options: {
    type: [String],
    required: true,
  },
  hiddenOptions: {
    type: [String],
  },
  orientation: {
    type: String,
    enum: ["vertical", "top", "bottom"],
    default: "vertical",
  },
  enableTextSearch: {
    type: Boolean,
    default: false,
  },
  randomizeOptions: {
    type: Boolean,
    default: false,
  },
  //TODO: SPSS codes
}).add(baseSchema);

module.exports = dropDownSchema;
