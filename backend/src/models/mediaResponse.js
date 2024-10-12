const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mediaResponseSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User99",
    required: true,
  },
  surveyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Survey99",
    required: true,
  },
  responseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Response99",
  },
  type: {
    type: String,
    required: true,
  },
  data: {
    type: Buffer,
    required: true,
  },
});

const MediaResponse = mongoose.model("mediaResponses99", mediaResponseSchema);

module.exports = MediaResponse;
