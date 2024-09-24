const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profilePictureSchema = new Schema({
  type: { type: String, required: true },
  data: { type: Buffer, required: true },
});

const ProfilePicture = mongoose.model(
  "profilepictures99",
  profilePictureSchema,
);

module.exports = ProfilePicture;
