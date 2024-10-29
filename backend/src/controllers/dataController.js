const mongoose = require("mongoose");
const Data = require("../models/data");

exports.getData = async (req, res) => {
  try {
    const { userId } = req.query;

    const dataDoc = await Data.findOne({
      user_id: new mongoose.Types.ObjectId(String(userId)),
    });

    return res.status(200).json({ success: true, data: dataDoc });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "something went wrong while getting data",
    });
  }
};
