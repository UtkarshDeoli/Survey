const Mongoose = require("mongoose");
const Schema = Mongooose.Schema;

const rankingSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  questionsList: {
    type: [String],
    required: true,
  },
  randomizeRows: {
    type: Boolean,
    default: false,
  },
  // TODO: SPSS codes
});

module.exports = rankingSchema;
