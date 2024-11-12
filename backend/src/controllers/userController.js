const mongoose = require("mongoose");
const Data = require("../models/data");
const ProfilePicture = require("../models/profilePicture");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const Role = require("../models/role");
const Response = require("../models/response");

exports.addUsers = async (req, res) => {
  try {
    console.log("add user Request");
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const data = { ...req.body };
    data.password = hashedPass;
    const user = new User(data);
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
    const { user_id, ...userData } = req.body;
    console.log(req.body);
    if (!user_id) {
      return res.status(400).json({ error: "Username is required" });
    }
    console.log("usrData is --->", userData);
    const dbRes = await User.findOneAndUpdate(
      { _id: user_id },
      { $set: userData },
      { new: true, runValidators: true }
    );
    return res
      .status(200)
      .json({ success: true, message: "User updated successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: false, message: "something went wrong" });
  }
};

exports.updateUsers = async (req, res) => {
  try {
    const { users } = req.body;
    console.log(users);

    if (!Array.isArray(users) || users.length === 0) {
      return res.status(400).json({ error: "No users provided for update" });
    }

    const updatePromises = users.map((user) => {
      if (!user.user_id) {
        return Promise.reject(new Error("User ID is required for each user"));
      }

      let updateFields = {};

      if (user.name !== undefined) updateFields.name = user.name;
      if (user.email !== undefined) updateFields.email = user.email;
      if (user.phone_number !== undefined)
        updateFields.phone_number = user.phone_number;
      if (user.role !== undefined) updateFields.role = user.role;
      if (user.assigned_survey !== undefined) {
        updateFields.$addToSet = { assigned_survey: user.assigned_survey };
      }
      if (user.remove_survey !== undefined) {
        updateFields.$pull = { assigned_survey: user.remove_survey };
      }

      return User.findOneAndUpdate({ _id: user.user_id }, updateFields, {
        new: true,
        runValidators: true,
      });
    });

    const dbRes = await Promise.all(updatePromises);

    return res.status(200).json({
      success: true,
      message: "Users updated successfully",
      updatedUsers: dbRes,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const _id = req.query.userId;
    const assignedSurveys = req.query.assignedSurveys;
    if (assignedSurveys) {
      const assignedSurveys = await User.findOne({ _id: _id })
        .populate("assigned_survey")
        .select("assigned_survey _id");
      return res.status(200).json({ success: true, data: assignedSurveys });
    }

    const user = await User.findOne({ _id: _id });
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: false, message: "something went wrong" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    console.log(req.query);
    let filter = req.query.filter || "";
    // let created_by = req.query.created_by;
    const getWithProfilePicture = Boolean(req.query.getWithProfilePicture);
    const role = req.query.role;
    const page = req.query.page !== "undefined" ? Number(req.query.page) : 1;
    const limit =
      req.query.limit !== "undefined" ? Number(req.query.limit) : 10;

    const userRoles = await Role.find({ category: "user" });
    const validUserRoleIds = userRoles.map((role) => role._id);

    const skip = (page - 1) * limit;

    const searchConditions = [];
    searchConditions.push({ name: { $regex: filter, $options: "i" } });
    searchConditions.push({ username: { $regex: filter, $options: "i" } });

    let query = {
      $and: [{ $or: searchConditions }], //{ created_by: created_by }
    };
    let roleExists = [];
    if (role) {
      roleExists = validUserRoleIds.filter(
        (ro) => ro.toString() === role.toString()
      );
    }
    if (role && roleExists.length > 0) {
      query.$and.push({ role: { $in: [role] } });
    } else {
      query.$and.push({ role: { $in: validUserRoleIds } });
    }

    let users;

    if (getWithProfilePicture === "true") {
      users = await User.find(query).populate("profile_picture");
    } else {
      users = await User.find(query)
        .populate("role")
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 });
    }

    const total = await User.countDocuments(query);

    return res.status(200).json({
      success: true,
      data: users,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.log(error);
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
      { new: true }
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

// karyakarta API'S

exports.createKaryakarta = async (req, res) => {
  try {
    const {
      email,
      username,
      created_by,
      name,
      ac_no,
      booth_no,
      district,
      survey_id,
      responses,
      password,
      role,
    } = req.body;
    const karyakartaRoles = await Role.find({ category: "karyakarta" });
    const validRoles = karyakartaRoles.map((el) => el._id);
    console.log("ROLE ISS:", role);
    const roleExists = validRoles.filter(
      (el) => el.toString() === role.toString()
    );

    if (roleExists.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid role",
      });
    }
    const hashedPass = await bcrypt.hash(password, 12);
    const newKaryakarta = await User.create({
      email,
      username,
      created_by,
      name,
      ac_no,
      booth_no,
      district,
      password: hashedPass,
      role: [role],
    });

    const userId = newKaryakarta._id;
    let responseIds;
    if (responses) {
      responseIds = responses.map(
        (responseId) => new mongoose.Types.ObjectId(String(responseId))
      );
    }

    let savedData;
    if (responseIds) {
      savedData = await Data.create({
        survey_id: new mongoose.Types.ObjectId(String(survey_id)),
        user_id: userId,
        responses: responses,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Karyakarta created successfully",
      data: newKaryakarta,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      success: false,
      message: "Error creating Karyakarta",
    });
  }
};

exports.updateMultipleKaryakarta = async (req, res) => { //for assigining data
  try {
    const { id, surveyId, responses } = req.body;
    console.log(req.body);
    // const data = await Data.findOne({ user_id: id });
    // if (data) {
    //   data.responses = responses;
    //   await data.save();
    // } 
    // else {
    //   await Data.create({ survey_id: surveyId, user_id: id, responses });
    // } 
    const data = await Data.findOne({ survey_id: id });
    
    await Data.create({ survey_id: surveyId, user_id: id, responses });

    responses.forEach(async (response) => {
      await Response.findOneAndUpdate(
        { _id: response },
        { panna_pramukh_assigned: id }
      );
    });
    return res
      .status(200)
      .json({ success: true, message: "succeessfuly created data" });
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: "Error updating data",
    });
  }
};

exports.updateKaryakarta = async (req, res) => {
  try {
    const {
      id,
      email,
      username,
      created_by,
      name,
      ac_no,
      booth_no,
      district,
      password,
      survey_id,
      responses,
      role,
      status,
    } = req.body;
    console.log(req.body);
    const karyakartaRoles = await Role.find({ category: "karyakarta" });
    const validRoles = karyakartaRoles.map((el) => el._id);
    const roleExists = validRoles.filter(
      (el) => el.toString() === role.toString()
    );

    if (roleExists.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid role",
      });
    }

    const karyakarta = await User.findById(id);
    if (!karyakarta) {
      return res.status(404).json({
        success: false,
        message: "Karyakarta not found",
      });
    }

    karyakarta.email = email || karyakarta.email;
    karyakarta.username = username || karyakarta.username;
    karyakarta.created_by = created_by || karyakarta.created_by;
    karyakarta.name = name || karyakarta.name;
    karyakarta.ac_no = ac_no || karyakarta.ac_no;
    karyakarta.booth_no = booth_no || karyakarta.booth_no;
    karyakarta.district = district || karyakarta.district;
    karyakarta.status = status || karyakarta.status;
    if (password) {
      const hashedPass = await bcrypt.hash(password, 12);
      karyakarta.password = hashedPass;
    }
    if (role) {
      karyakarta.role = [role];
    }

    await karyakarta.save();
    let updatedResponses;
    if (responses) {
      updatedResponses = responses.map((responseId) => {
        new mongoose.Types.ObjectId(String(responseId));
      });
    }

    if (updatedResponses) {
      await Data.findOneAndUpdate(
        {
          survey_id: new mongoose.Types.ObjectId(String(survey_id)),
          user_id: karyakarta._id,
        },
        {
          $set: {
            survey_id: new mongoose.Types.ObjectId(String(survey_id)),
            user_id: karyakarta._id,
            responses: responses,
          },
        }
      );
    }

    return res.status(200).json({
      success: true,
      message: "Karyakarta updated successfully",
      data: karyakarta,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      success: false,
      message: "Error updating Karyakarta",
    });
  }
};

exports.getAllKaryakarta = async (req, res) => {
  try {
    let filter = req.query.filter || "";

    const role = req.query.role;
    const page = req.query.page !== "undefined" ? Number(req.query.page) : 1;
    const limit =
      req.query.limit !== "undefined" ? Number(req.query.limit) : 10;
    // const validRoles = ["Panna Pramukh", "Booth Adhyaksh", "Mandal Adhyaksh"];

    const validRoles = await Role.find({ category: "karyakarta" });
    const validRoleIds = validRoles.map((r) => r._id);
    console.log("valid roles are -->", validRoleIds);

    const skip = (page - 1) * limit;

    const searchConditions = [];
    searchConditions.push({ name: { $regex: filter, $options: "i" } });
    searchConditions.push({ username: { $regex: filter, $options: "i" } });

    let query = { $and: [{ $or: searchConditions }] };

    let roleExists = [];
    if (role) {
      roleExists = validRoleIds.filter(
        (ro) => ro.toString() === role.toString()
      );
    }

    if (role && roleExists.length > 0) {
      query.$and.push({ role: { $in: [role] } });
    } else {
      query.$and.push({ role: { $in: validRoles } });
    }

    const karyakartas = await User.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .populate("role");
    const total = await User.countDocuments(query);
    console.log("total is -- >", total);
    return res.status(200).json({
      success: true,
      message: "Karyakarta fetched",
      count: karyakartas.length,
      totalPages: Math.ceil(total / limit),
      data: karyakartas,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "Error creating Karyakarta",
    });
  }
};

exports.getKaryakarta = async (req, res) => {
  try {
    const { id } = req.query;
    const karyakarta = await User.findById(id);
    return res.status(200).json({ success: true, data: karyakarta });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching karyakarta" });
  }
};

exports.getPannaPramukh = async (req, res) => {
  try {
    console.log("get panna pramukh");
    console.log(req.query);
    const { ac_no, booth_no } = req.query;
    let filter = req.query.filter || "";
    const page = req.query.page !== "undefined" ? Number(req.query.page) : 1;
    const limit =
      req.query.limit !== "undefined" ? Number(req.query.limit) : 10;

    const skip = (page - 1) * limit;

    if (!ac_no || !booth_no) {
      return res.status(400).json({
        success: false,
        message: "Invalid ac_no or booth_no",
      });
    }

    const pannaPramukhRole = await Role.findOne({
      name: "Panna Pramukh",
    });

    const query = { ac_no, booth_no, role: { $in: [pannaPramukhRole._id] } };

    const searchConditions = [];
    searchConditions.push({ name: { $regex: filter, $options: "i" } });
    searchConditions.push({ username: { $regex: filter, $options: "i" } });

    query.$and = [{ $or: searchConditions }];

    const users = await User.find(query).skip(skip).limit(limit);
    return res.status(200).json({
      success: true,
      message: "Panna Pramukh fetched",
      data: users,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "Error fetching Panna Pramukh",
    });
  }
};
exports.getBoothAdhyaksh = async (req, res) => {
  try {
    const { ac_no, booth_no } = req.query;
    let filter = req.query.filter || "";
    const page = req.query.page !== "undefined" ? Number(req.query.page) : 1;
    const limit =
      req.query.limit !== "undefined" ? Number(req.query.limit) : 10;

    const skip = (page - 1) * limit;

    if (!ac_no || !booth_no) {
      return res.status(400).json({
        success: false,
        message: "Invalid ac_no or booth_no",
      });
    }
    const BoothAdhyakshRole = await Role.findOne({
      name: "Booth Adhyaksh",
    });

    const query = { ac_no, booth_no, role: { $in: [BoothAdhyakshRole._id] } };

    const searchConditions = [];
    searchConditions.push({ name: { $regex: filter, $options: "i" } });
    searchConditions.push({ username: { $regex: filter, $options: "i" } });

    query.$and = [{ $or: searchConditions }];

    const users = await User.find(query).skip(skip).limit(limit);
    return res.status(200).json({
      success: true,
      message: "Booth adhyaksh fetched",
      data: users,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "Error fetching Panna Pramukh",
    });
  }
};
