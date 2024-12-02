const ChatRoom = require("../models/chatRoom");
const Message = require("../models/message");

async function createOrGetChatRoom(userId1, userId2) {
  const participants = [userId1, userId2].sort();

  let room = await ChatRoom.findOne({
    participants: { $all: participants },
  }).populate("messages");

  if (!room) {
    room = await ChatRoom.create({ participants });
    await room.save();
  }

  await Message.updateMany(
    { _id: { $in: room.messages }, sender: { $ne: userId1 } },
    { $set: { read: true } },
  );

  return room;
}

const chatEvents = (socket, io) => {
  socket.on("join_room", async (data) => {
    const { currentUserId, otherUserId } = data;

    try {
      const room = await createOrGetChatRoom(currentUserId, otherUserId);

      // Check if the user is already in a room and leave it
      const currentRoomId = socket.currentRoomId;
      console.log("currentRoomId was", currentRoomId);
      if (currentRoomId) {
        console.log(`User leaving room: ${currentRoomId}`);
        socket.leave(currentRoomId);
      }

      // Join the new room and store the room ID in the socket
      socket.join(room._id.toString());
      socket.currentRoomId = room._id.toString(); // Store the room ID for future reference

      console.log("User joined new room:", room._id.toString());

      socket.emit("room_joined", {
        roomId: room._id,
        otherParticipantId: room.participants.find(
          (p) => p.toString() !== currentUserId,
        ),
        messages: room.messages,
      });
    } catch (error) {
      console.error("Error creating chat room:", error);
      socket.emit("error", { message: "Failed to create chat room" });
    }
  });

  socket.on("send_message", async ({ roomId, senderId, content }) => {
    try {
      const room = await ChatRoom.findById(roomId);

      if (!room) {
        throw new Error("Room not found");
      }

      const message = { sender: senderId, content, chat_room_id: roomId };
      const messageDocument = new Message(message);
      messageDocument.save();

      room.messages.push(messageDocument._id);
      room.lastMessage = messageDocument._id;
      const newMessage = messageDocument;
      await room.save();

      io.emit("new_message", { roomId, newMessage });
    } catch (error) {
      console.error("error sending message: ", error);
      socket.emit("error", { message: "Failed to send message" });
    }
  });

  socket.on("exit_room", async ({ currentUserId, otherUserId }) => {
    try {
      const room = await ChatRoom.findOne({
        participants: { $all: [currentUserId, otherUserId].sort() },
      });

      if (!room) {
        throw new Error("Room not found");
      }

      if (room.messages.length === 0) {
        room.deleteOne().then(() => {
          socket.emit("room_exited", { roomId: room._id });
        });
      }
    } catch (error) {
      console.error("error exiting the room", error);
      socket.emit("error", { message: "Failed to send message" });
    }
  });
};

module.exports = chatEvents;
