const Mongoose = require("mongoose");
const baseGridSchema = require("./baseGridSchema");
const Schema = Mongoose.Schema;

const checkBoxGridSchema = new Schema({
  uniqueOptions: {
    type: [String],
  },
  hiddenColumnOptions: {
    type: [String],
  },
  minimumOptionsRequired: {
    type: Number,
  },
  randomizeRowOptions: {
    type: Boolean,
  },
  randomizeColumnOptions: {
    type: Boolean,
  },
  // TODO: SPSS codes
})
  .add(baseGridSchema)
  .remove(
    "questionOptions",
    "forwardQuestionOptionsFrom",
    "forwardQuestionOptionsType",
    "displayAsGrid",
  );

module.exports = checkBoxGridSchema;
