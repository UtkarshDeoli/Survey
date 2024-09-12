const Mongoose = require("mongoose");
const baseGridSchema = require("./baseGridSchema");
const Schema = Mongoose.Schema;

const singlelineTextGridSchema = new Schema()
  .add(baseGridSchema)
  .remove(
    "questionOptions",
    "forwardQuestionOptionsFrom",
    "forwardQuestionOptionsType",
  );

module.exports = singlelineTextGridSchema;
