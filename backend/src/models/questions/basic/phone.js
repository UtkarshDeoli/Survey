const Mongoose = require("mongoose");
const baseSchema = require("./baseSchema");
const Schema = Mongoose.Schema;

const phoneSchema = new Schema({
  limitValue: {
    from: Number,
    to: Number,
  },
})
  .add(baseSchema)
  .remove("defaultValue");

module.exports = phoneSchema;
