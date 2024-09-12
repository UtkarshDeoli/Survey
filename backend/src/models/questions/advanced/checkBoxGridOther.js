const Mongoose = require("mongoose");
const checkBoxGridSchema = require("./checkBoxGrid");
const Schema = Mongoose.Schema;

const checkBoxGridOtherSchema = new Schema()
  .add(checkBoxGridSchema)
  .remove("forwardColumnOptionsFrom", "forwardColumnOptionsType");
module.exports = checkBoxGridOtherSchema;
