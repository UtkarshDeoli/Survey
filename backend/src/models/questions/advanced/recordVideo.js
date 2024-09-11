const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const recordVideoSchema = new Schema({
  question: {
    type: String,
    required: true,
  },

  requiredQuestion: {
    type: Boolean,
    default: true,
  },
  maxLength: {
    type: Number,
    max: 60,
  },
});

module.exports = recordVideoSchema;
