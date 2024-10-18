const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");

const surveyRoutes = require("./src/routes/surveyRoute");
const authRoutes = require("./src/routes/authRoutes");
const userRoutes = require("./src/routes/userRoute");
const chatRoomRoutes = require("./src/routes/chatRoomRoute");
const responseRoutes = require("./src/routes/responseRoute");
const familyRoutes = require("./src/routes/familyRoutes")

const app = express();

app.use(fileUpload());
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/survey/", surveyRoutes);
app.use("/api/auth/", authRoutes);
app.use("/api/survey", surveyRoutes);
app.use("/api/user", userRoutes);
app.use("/api/chatroom", chatRoomRoutes);
app.use("/api/response", responseRoutes);
app.use("/api/family",familyRoutes)

app.use(express.static(path.join(__dirname, "../frontend/out/")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../frontend/out/index.html")),
);

module.exports = app;
