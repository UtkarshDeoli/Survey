const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const photoCaptureSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  displayTitle: {
    type: String,
  },
  requiredQuestion: {
    type: Boolean,
  },
  disableTextAnnotation: {
    type: Boolean,
  },
});

module.exports = photoCaptureSchema;
