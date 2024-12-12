const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema(
  {
    created_by: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    ac_no: String,
    booth_no: String,
    district: String,
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone_number: {
      type: Number,
      required: false,
    },
    role: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role99",
        required: true,
      },
    ],
    auto_assign_survey: {
      type: Boolean,
      default: false,
    },
    veiw_own_collected_data: {
      type: Boolean,
      default: false,
    },
    prevent_data_download: {
      type: Boolean,
      default: false,
    },
    prevent_data_analytics: {
      type: Boolean,
      default: false,
    },
    prevent_spatial_report: {
      type: Boolean,
      default: false,
    },
    remove_audio_recording_access: {
      type: Boolean,
      default: false,
    },
    view_pending_data: {
      type: Boolean,
      default: false,
    },
    assigned_survey: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Survey99",
      },
    ],
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    profile_picture: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "profilepictures99",
    },
    isOnline: { type: Boolean, default: false },
    notification_token: { type: String, default: null },
    supervisor:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User99",
      required: false,
    }
  },
  { timestamps: true },
);
userSchema.plugin(uniqueValidator);
const User = mongoose.model("User99", userSchema);

module.exports = User;
