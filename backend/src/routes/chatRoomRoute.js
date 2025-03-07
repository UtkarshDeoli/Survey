const express = require("express");
const router = express.Router();
const chatRoomController = require("../controllers/chatRoomController");

router.get("/getAllChatsData", chatRoomController.getAllChatsData);

module.exports = router;
