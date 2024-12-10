const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationsSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User99",
    required: true,
  },
  notifications: [
    {
      type: {
        title: String,
        content: String,
      },
    },
  ],
  unread_count: {
    type: Number,
    default: 0,
  },
});

const Notifications = mongoose.model("notifications99", notificationsSchema);

module.exports = Notifications;
