const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const recordAudioSchema = new Schema({
  question: {
    type: String,
    required: true,
  },

  requiredQuestion: {
    type: Boolean,
  },
  maxLength: {
    type: Number,
    max: 3600,
  },
});

module.exports = recordAudioSchema;
