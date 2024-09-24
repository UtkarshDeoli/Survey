const mongoose = require("mongoose");
const ProfilePicture = require("../models/profilePicture");
const User = require("../models/user");

exports.addUsers = async (req, res) => {
  try {
    console.log("add user Request");

    const user = new User(req.body);
    const result = await user.save();

    return res.status(201).json({
      success: true,
      message: "Users created successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error adding users:", error);
    return res
      .status(400)
      .json({ success: false, message: "Something went wrong" });
  }
};

exports.addMultipleUsers = async (req, res) => {
  try {
    const { userDetails, ...restOfBody } = req.body;
    // const createdUsers = [];

    for (const user of userDetails) {
      const newUser = new User({
        name: user[0],
        username: user[1],
        email: user[2],
        password: user[3],
        ...restOfBody,
      });
      const savedUser = await newUser.save();
      // createdUsers.push(savedUser);
    }

    return res.status(201).json({
      success: true,
      message: "Users created successfully",
      // data: createdUsers
    });
  } catch (error) {
    console.error("Error adding users:", error);
    return res
      .status(400)
      .json({ success: false, message: "Something went wrong" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = req.body;
    if (!user || !user.username) {
      return res.status(400).json({ error: "Username is required" });
    }
    const dbRes = await User.findOneAndUpdate(
      { username: user.username },
      { $set: user },
      { new: true, runValidators: true },
    );
    return res
      .status(200)
      .json({ success: true, message: "User updated successfully" });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "something went wrong" });
  }
};

exports.getUser = async (req, res) => {
  try {
    console.log("get single user hitting");
    const _id = req.query.userId;
    console.log(_id);
    const user = await User.findOne({ _id: _id });
    console.log(user);
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "something went wrong" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    let filter = req.query.filter || "";
    let created_by = req.query.created_by;
    const getWithProfilePicture = Boolean(req.query.getWithProfilePicture);
    const role = req.query.role;
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
      $and: [{ $or: searchConditions }, { created_by: created_by }],
    };

    if (validRoles.includes(role)) {
      query.$and.push({ role: { $in: [role] } });
    }

    let users;

    if (getWithProfilePicture) {
      users = await User.find(query).populate("profile_picture");
    } else {
      users = await User.find(query);
    }

    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "something went wrong" });
  }
};

exports.uploadProfilePicture = async (req, res) => {
  try {
    const { userId, type, imageData } = req.body;

    const imageBuffer = Buffer.from(imageData, "base64");

    const profilePicture = new ProfilePicture({
      type: type,
      data: imageBuffer,
    });
    await profilePicture.save();

    const user = await User.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(userId) },
      { $set: { profile_picture: profilePicture._id } },
      { new: true },
    );

    return res.status(200).json({
      success: true,
      message: "Profile picture uploaded successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "something went wrong while uploading profile picture",
    });
  }
};

exports.getProfilePicture = async (req, res) => {
  try {
    // TODO: implement
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "something went wrong while fetching profile picture",
    });
  }
};
