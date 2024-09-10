const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const rankingCheckboxSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  variableName: {
    type: String,
  },
  options: {
    type: [String],
    required: true,
  },
  requiredQuestion: {
    type: Boolean,
  },
  minimumOptionsRequired: {
    type: Number,
  },
  maximumOptionsSelectable: {
    type: Number,
  },
  randomizeOptions: {
    type: Boolean,
    default: false,
  },
  exportRawData: {
    type: Boolean,
    default: false,
  },
  // TODO: Image as option
});

module.exports = rankingCheckboxSchema;
