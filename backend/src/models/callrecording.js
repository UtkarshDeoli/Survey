const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const callRecordingSchema = new Schema(
  {
    file_path: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    response_id: {
      type: Schema.Types.ObjectId,
      ref: "Response99",
    },
    survey_id: {
      type: Schema.Types.ObjectId,
      ref: "Survey99",
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User99",
    },
  },
  { timestamps: true },
);

const CallRecordings = mongoose.model("CallRecordings99", callRecordingSchema);

module.exports = CallRecordings;
