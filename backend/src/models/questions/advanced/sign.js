const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const signSchema = new Schema({
  question: {
    type: String,
    required: true,
  },

  requiredQuestion: {
    type: Boolean,
    default: true,
  },
});

module.exports = signSchema;
