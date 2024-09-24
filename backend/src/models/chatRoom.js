const mongoose = require("mongoose");
const messageSchema = require("./message");
const Schema = mongoose.Schema;

const chatRoomSchema = new Schema(
  {
    participants: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User99", required: true },
    ],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "messages99" }],
    lastMessage: { type: mongoose.Schema.Types.ObjectId, ref: "messages99" },
  },
  { timestamps: true },
);

const ChatRoom = mongoose.model("ChatRoom99", chatRoomSchema);

module.exports = ChatRoom;
