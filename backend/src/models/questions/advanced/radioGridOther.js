const Mongoose = require("mongoose");
const baseGridSchema = require("./baseGridSchema");
const Schema = Mongoose.Schema;

const radioGridOtherSchema = new Schema({
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
    "forwardColumnOptionsFrom",
    "forwardColumnOptionsType",
    "displayAsGrid",
  );

module.exports = radioGridOtherSchema;
