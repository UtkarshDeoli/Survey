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

    const unreadCount = userNotificationsDoc
      ? userNotificationsDoc.unread_count
      : 0;

    console.log(userNotificationsDoc);
    return res.status(200).json({
      success: true,
      message: "Unread count retrieved successfully",
      data: unreadCount,
    });
  } catch (error) {
    console.log(error);
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
      return res.status(200).json({
        success: true,
        data: { notifications: [] },
        message: "No notifications found for this user",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Notifications retrieved successfully",
      data: userNotificationsDoc,
    });
  } catch (error) {
    console.log(error);
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

    if (!userNotificationsDoc) {
      return res.status(200).json({
        success: true,
        message: "No notifications found for this user",
      });
    }
    userNotificationsDoc.notifications = [];
    userNotificationsDoc.unread_count = 0;
    userNotificationsDoc.save();

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
