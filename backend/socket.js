const chatEvents = require("./src/sockets/chatEvents");
const userEvents = require("./src/sockets/userEvents");
const User = require("./src/models/user");

module.exports = (io) => {
  io.on("connection", async (socket) => {
    const userId = socket.handshake.query.id;
    console.log(`User connected ${socket.id}`);

    await User.findByIdAndUpdate(
      userId,
      { $set: { isOnline: true } },
      { new: true },
    );

    io.emit("user_online", { userId });

    chatEvents(socket, io);
    userEvents(socket, io);

    socket.on("disconnect", async () => {
      console.log(`User disconnected: ${socket.id}`);

      await User.findByIdAndUpdate(
        userId,
        { $set: { isOnline: false } },
        { new: true },
      );

      io.emit("user_offline", { userId });
    });
  });
};
