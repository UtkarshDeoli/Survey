const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User99",
    },
    chat_room_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ChatRoom99",
    },
    content: { type: String, required: true },
    //delivered: { type: Boolean, default: false },
    read: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Message = mongoose.model("messages99", messageSchema);

module.exports = Message;
