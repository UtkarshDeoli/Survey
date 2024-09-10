const Mongoose = require("mongoose");
const baseGridSchema = require("./baseGridSchema");
const Schema = Mongoose.Schema;

const dropDownGridSchema = new Schema().add(baseGridSchema);

module.exports = dropDownGridSchema;
