const Mongoose = require("mongoose");
const baseSchema = require("../baseSchema");
const Schema = Mongoose.Schema;

const radioTextSchema = new Schema({
  options: {
    type: [String],
    required: true,
  },
  hiddenOptions: {
    type: [String],
  },
  numberOfColumns: {
    type: Number,
  },
  randomizeOptions: {
    type: Boolean,
    default: false,
  },
  //TODO: SPSS codes
  //TODO: image as options
})
  .add(baseSchema)
  .remove("description");

module.exports = radioTextSchema;
