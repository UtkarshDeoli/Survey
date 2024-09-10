const Mongoose = require("mongoose");
const dropDownGridSchema = require("./dropDownGrid");
const Schema = Mongoose.Schema;

const dropDownGridOtherSchema = new Schema()
  .add(dropDownGridSchema)
  .remove("forwardQuestionOptionsFrom", "forwardQuestionOptionsType");

module.exports = dropDownGridOtherSchema;
