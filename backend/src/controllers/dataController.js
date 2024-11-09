const mongoose = require("mongoose");
const Data = require("../models/data");

exports.getData = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "userId is required",
      });
    }

    const aggregationPipeline = [
      {
        $match: {
          user_id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $group: {
          _id: "$survey_id",
          responses: { $last: "$responses" },
        },
      },
      {
        $lookup: {
          from: "survey99",
          localField: "_id",
          foreignField: "_id",
          as: "surveyDetails",
        },
      },
      {
        $unwind: "$surveyDetails",
      },
      {
        $lookup: {
          from: "response99",
          localField: "responses",
          foreignField: "_id",
          as: "responseDetails",
        },
      },
      {
        $addFields: {
          assigned_response_count: { $size: "$responseDetails" },
        },
      },
    ];

    const SurveyData = await Data.aggregate(aggregationPipeline);

    if (!SurveyData) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }
    return res.status(200).json({ success: true, data: SurveyData });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "something went wrong while getting data",
    });
  }
};
