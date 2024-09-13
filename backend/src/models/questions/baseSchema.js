const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const baseSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  displayTitle: {
    type: String,
  },
  variableName: {
    type: String,
  },
  mediaType: {
    type: String,
    enum: ["Include Media Type", "image", "video", "audio"],
  },
  //TODO: media: {
  //   type: Buffer,
  // },
  defaultValue: {
    type: String,
  },
  requiredQuestion: {
    type: Boolean,
  },
});

module.exports = baseSchema;
