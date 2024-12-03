const ChatRoom = require("../models/chatRoom");
const Message = require("../models/message");
const User = require("../models/user");

exports.getAllChatsData = async (req, res) => {
  try {
    const { currentUserId, filter, role, page = 1, limit = 10 } = req.query;
    const validRoles = [
      "Admin",
      "Booth Karyakarta",
      "Survey Collector",
      "Support Executive",
      "Survey Manager",
    ];

    const searchConditions = [];
    searchConditions.push({ name: { $regex: filter, $options: "i" } });
    searchConditions.push({ username: { $regex: filter, $options: "i" } });

    let query = {
      $and: [{ $or: searchConditions }],
    };

    if (validRoles.includes(role)) {
      query.$and.push({ role: { $in: [role] } });
    }
    query.$and.push({ _id: { $ne: currentUserId } });

    // Fetch all matching users with last message data first
    const usersWithLastMessageData = await Promise.all(
      (
        await User.find(query)
          .select({
            _id: 1,
            name: 1,
            email: 1,
            profile_picture: 1,
            isOnline: 1,
          })
          .populate("profile_picture")
      ).map(async (user) => {
        const chatRoom = await ChatRoom.findOne({
          participants: { $all: [currentUserId, user._id] },
        }).populate("lastMessage");

        const unreadMessages = chatRoom
          ? await Message.countDocuments({
              chat_room_id: chatRoom._id,
              sender: { $ne: currentUserId },
              read: false,
            })
          : 0;

        let lastMessageData = null;
        if (chatRoom) {
          lastMessageData = {
            lastMessage: chatRoom.lastMessage,
            lastMessageTime: chatRoom.updatedAt,
          };
        }

        return {
          ...user.toObject(),
          lastMessageData,
          unreadMessages,
        };
      }),
    );

    // Sort users by last message time (most recent first)
    const sortedUsersWithLastMessageData = usersWithLastMessageData.sort(
      (a, b) => {
        if (a.lastMessageData && b.lastMessageData) {
          return (
            new Date(b.lastMessageData.lastMessageTime) -
            new Date(a.lastMessageData.lastMessageTime)
          );
        } else if (a.lastMessageData) {
          return -1;
        } else if (b.lastMessageData) {
          return 1;
        } else {
          return 0;
        }
      },
    );

    // Manually paginate the sorted results
    const skip = (page - 1) * limit;
    const paginatedUsers = sortedUsersWithLastMessageData.slice(
      skip,
      skip + Number(limit),
    );

    res.status(200).json({
      success: true,
      data: paginatedUsers,
      total: sortedUsersWithLastMessageData.length,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};
