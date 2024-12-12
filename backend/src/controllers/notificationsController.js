const Notifications = require("../models/notifications");

exports.getUnreadCount = async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) {
      return res.status(400).json({
        success: false,
        message: "User Id is required",
      });
    }
    const userNotificationsDoc = await Notifications.findOne({
      user_id: user_id,
    });
    if (!userNotificationsDoc) {
      return res.status(404).json({
        success: false,
        message: "No notifications found for this user",
      });
    }
    console.log(userNotificationsDoc);
    return res.status(200).json({
      success: true,
      message: "Unread count retrieved successfully",
      data: userNotificationsDoc.unread_count,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllNotifications = async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) {
      return res.status(400).json({
        success: false,
        message: "User Id is required",
      });
    }
    const userNotificationsDoc = await Notifications.findOne({
      user_id: user_id,
    });
    if (!userNotificationsDoc) {
      return res.status(404).json({
        success: false,
        message: "No notifications found for this user",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Notifications retrieved successfully",
      data: userNotificationsDoc,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.clearNotifications = async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) {
      return res.status(400).json({
        success: false,
        message: "User Id is required",
      });
    }
    const userNotificationsDoc = await Notifications.findOne({
      user_id: user_id,
    });
    userNotificationsDoc.notifications = [];
    userNotificationsDoc.unread_count = 0;
    userNotificationsDoc.save();

    if (!userNotificationsDoc) {
      return res.status(404).json({
        success: false,
        message: "No notifications found for this user",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Notifications cleared successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
