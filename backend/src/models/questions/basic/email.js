const Mongoose = require("mongoose");
const baseSchema = require("../baseSchema");
const Schema = Mongoose.Schema;

const emailSchema = new Schema().add(baseSchema).remove("defaultValue");

module.exports = emailSchema;
