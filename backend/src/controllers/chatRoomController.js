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
    const skip = (page - 1) * limit;
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

    const users = await User.find(query)
      .select({
        _id: 1,
        name: 1,
        email: 1,
        profile_picture: 1,
        isOnline: 1,
      })
      .populate("profile_picture")
      .skip(skip)
      .limit(Number(limit));

    const total = await User.countDocuments(query);

    const usersWithLastMessageData = await Promise.all(
      users.map(async (user) => {
        const chatRoom = await ChatRoom.findOne({
          participants: { $all: [currentUserId, user._id] },
        }).populate("lastMessage");

        const unreadMessages = chatRoom
          ? await Message.countDocuments({
              chat_room_id: chatRoom._id,
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
        };
      }),
    );

    // Sorting logic
    const sortedUsersWithLastMessageData = usersWithLastMessageData.sort(
      (a, b) => {
        if (a.lastMessageData && b.lastMessageData) {
          // Both have lastMessageData, compare by lastMessageTime
          return (
            new Date(b.lastMessageData.lastMessageTime) -
            new Date(a.lastMessageData.lastMessageTime)
          );
        } else if (a.lastMessageData) {
          // a has lastMessageData but b does not, a comes first
          return -1;
        } else if (b.lastMessageData) {
          // b has lastMessageData but a does not, b comes first
          return 1;
        } else {
          // Neither has lastMessageData, no change in order
          return 0;
        }
      },
    );

    res
      .status(200)
      .json({ success: true, data: sortedUsersWithLastMessageData, total });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};
