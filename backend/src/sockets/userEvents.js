let OnlineUsers = [];
const userEvents = (socket, io) => {
  // socket.on("user_online", ({ userId }) => {
  //   if (!OnlineUsers.includes(userId)) {
  //     OnlineUsers.push(userId);
  //   }
  //   io.emit("user_online", OnlineUsers);
  // });
  //
  // socket.on("user_offline", ({ userId }) => {
  //   OnlineUsers = OnlineUsers.filter((user) => user !== userId);
  //   io.emit("user_offline", OnlineUsers);
  // });
};

module.exports = userEvents;
