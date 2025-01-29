const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const callRatingSchemma = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User99",
    },
    response_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Response99",
    },
    rating: { type: String, enum: ["positive", "negative", "neutral"] },
    comment: { type: String },
  },
  { timestamps: true }
);

const CallRating = mongoose.model("CallRating99", callRatingSchemma);

module.exports = CallRating;
