const Mongoose = require("mongoose");
const checkBoxSchema = require("./checkBox");
const Schema = Mongoose.Schema;

const checkBoxTwoColSchema = new Schema({}).add(checkBoxSchema);

module.exports = checkBoxTwoColSchema;
