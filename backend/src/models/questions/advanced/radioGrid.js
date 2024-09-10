const Mongoose = require("mongoose");
const baseGridSchema = require("./baseGridSchema");
const Schema = Mongoose.Schema;

const radioGridSchema = new Schema({
  hiddenColumnOptions: {
    type: [String],
  },
  minimumQuestionsRequired: {
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

module.exports = radioGridSchema;
