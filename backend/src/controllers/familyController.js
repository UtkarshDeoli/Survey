const Family = require("../models/family");
const Response = require("../models/response");
const mongoose = require("mongoose");

exports.getFamily = async (req, res) => {
  try {
    const { house_no, last_name, survey_id } = req.query;

    const filterOptions = { survey_id, house_no };
    if (last_name) {
      console.log("with last name");
      filterOptions.last_name = { $regex: last_name, $options: "i" };
      const families = await Family.find(filterOptions);
      const responses = await Response.find(filterOptions);
      // Transform responses to match the aggregation pipeline format
      const transformedResponses = [
        {
          _id: last_name,
          total_responses: responses.length,
          house_no: house_no,
          name: responses.map((response) => response.name),
        },
      ];

      return res.status(200).json({
        success: true,
        families,
        responses: transformedResponses,
      });
    }
    console.log("no last name");
    const aggregationPipeline = [
      {
        $match: {
          survey_id: new mongoose.Types.ObjectId(String(survey_id)),
          house_no,
        },
      },
      {
        $group: {
          _id: "$last_name",
          total_responses: { $sum: 1 },
          house_no: { $first: "$house_no" },
          name: { $push: "$name" },
        },
      },
    ];
    const families = await Family.find(filterOptions);
    const responses = await Response.aggregate(aggregationPipeline);
    return res.status(200).json({
      success: true,
      families,
      responses,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

exports.getFamilyResponse = async (req, res) => {
  try {
    const { family_id } = req.query;
    if (!family_id) {
      res
        .status(400)
        .json({ success: false, message: "family_id is required" });
    }

    const family = await Family.findById(family_id);
    const responses = await Response.find({ family_id });

    res.status(200).json({
      success: true,
      family,
      responses,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.updateFamily = async (req, res) => {
  try {
    const { family_id, house_no, last_name } = req.body;
    const updatedFamily = {};
    if (house_no) updatedFamily.house_no = house_no;
    if (last_name) updatedFamily.last_name = last_name;

    const family = await Family.findByIdAndUpdate(family_id, updatedFamily, {
      new: true,
    });

    if (Object.keys(updatedFamily).length > 0) {
      await Response.updateMany({ family_id }, { $set: updatedFamily });
    }

    res.status(200).json({ success: true, data: family });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
