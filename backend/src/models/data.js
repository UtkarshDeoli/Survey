const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    survey_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Survey99",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User99",
      required: true,
    },
    responses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Response99" }],
  },
  { timestamps: true },
);

const Data = mongoose.model("Data99", DataSchema);

module.exports = Data;
