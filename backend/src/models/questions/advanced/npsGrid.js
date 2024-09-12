const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const npsGridSchema = new Schema({
  rowOptions: {
    type: [String],
  },
  variableName: {
    type: String,
  },
  allRequired: {
    type: Boolean,
    default: true,
  },
  minimumQuestionsRequired: {
    type: Number,
  },
  randomizeRowOptions: {
    type: Boolean,
  },
  forwardRowOptionsFrom: {
    type: String,
  },
  forwardRowOptionsType: {
    type: String,
    enum: ["none", "selected", "unselected"],
  },
  // TODO: SPSS codes
});

module.exports = npsGridSchema;
