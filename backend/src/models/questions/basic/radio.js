const Mongoose = require("mongoose");
const baseSchema = require("./baseSchema");
const Schema = Mongoose.Schema;

const radioSchema = new Schema({
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
  numberOfColumns: {
    type: Number,
    default: 1,
  },
  randomizeOptions: {
    type: Boolean,
    default: false,
  },
  //TODO: SPSS codes
  //TODO: image as options
}).add(baseSchema);

module.exports = radioSchema;
