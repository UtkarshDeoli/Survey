const Mongoose = require("mongoose");
const checkBoxSchema = require("./checkBox");
const Schema = Mongoose.Schema;

const checkBoxOtherSchema = new Schema({
  //TODO: Other Text Field Handling
}).add(checkBoxSchema);

module.exports = checkBoxOtherSchema;
