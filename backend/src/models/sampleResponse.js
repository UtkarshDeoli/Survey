const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sampleResponseSchema = new Schema(
  {
    survey_id: {
      type: Schema.Types.ObjectId,
      ref: "Survey99",
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User99",
      required: true,  
    },
    response_id: {
      type: Schema.Types.ObjectId,
      ref: "Response99", 
      required: true,
    },
    group_id: {
      type: String,
      required: true, 
    },
    sampling_size: {
      type: Number,
      required: true, 
    },
    sampling_method: {
      type: String,
      enum: ['random', 'index'],
      required: true, 
    },
    index: {
      type: Number,
      default: 0, 
    },
    assigned_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const SampleResponse = mongoose.model("SampleResponse99", sampleResponseSchema);

module.exports = SampleResponse;
