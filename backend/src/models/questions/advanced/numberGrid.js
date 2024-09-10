const Mongoose = require("mongoose");
const baseGridSchema = require("./baseGridSchema");
const Schema = Mongoose.Schema;

const numberGridSchema = new Schema({
  limitValue: {
    from: Number,
    to: Number,
  },
})
  .add(baseGridSchema)
  .remove(
    "questionOptions",
    "forwardQuestionOptionsFrom",
    "forwardQuestionOptionsType",
  );

module.exports = numberGridSchema;
