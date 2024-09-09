const Mongoose = require("mongoose");
const radioSchema = require("./radio");
const Schema = Mongoose.Schema;

const radioOtherSchema = new Schema({
  //TODO: Other Text Field Handling
}).add(radioSchema);

module.exports = radioOtherSchema;
