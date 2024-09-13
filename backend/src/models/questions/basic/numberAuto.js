const Mongoose = require("mongoose");
const numberInputSchema = require("./numberInput");
const Schema = Mongoose.Schema;

const numberAutoSchema = new Schema({
  //TODO: code values table
}).add(numberInputSchema);

module.exports = numberAutoSchema;
