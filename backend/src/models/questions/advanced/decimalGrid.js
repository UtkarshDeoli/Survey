const Mongoose = require("mongoose");
const baseGridSchema = require("./baseGridSchema");
const Schema = Mongoose.Schema;

const decimalGridSchema = new Schema({
  limitValue: {
    from: Number,
    to: Number,
  },
  precision: {
    type: Number,
    min: 1,
    required: true,
  },
})
  .add(baseGridSchema)
  .remove(
    "questionOptions",
    "forwardQuestionOptionsFrom",
    "forwardQuestionOptionsType",
  );

module.exports = decimalGridSchema;
