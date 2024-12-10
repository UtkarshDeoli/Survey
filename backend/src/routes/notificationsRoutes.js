const express = require("express");
const router = express.Router();
const notificationsController = require("../controllers/notificationsController");

router.get("/clear", notificationsController.clearNotifications);
router.get("/get-all", notificationsController.getAllNotifications);
router.get("/unread-count", notificationsController.getUnreadCount);

module.exports = router;
