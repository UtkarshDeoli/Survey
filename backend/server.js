const app = require("./app");
const http = require("http");
const socketIo = require("socket.io");
const socketHandler = require("./socket");
require("dotenv").config();

const connectDatabase = require("./src/config/database");

const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

socketHandler(io);

const PORT = process.env.PORT || 6969;

connectDatabase();

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
