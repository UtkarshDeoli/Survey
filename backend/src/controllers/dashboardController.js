const Survey = require("../models/survey");
const Response = require("../models/response");
const User = require("../models/user");
const Todo = require("../models/todo");
const mongoose = require("mongoose");
const Data = require("../models/data");

exports.getDashboard = async (req, res) => {
  try {
    const surveys = await Survey.find()
      .sort({ createdAt: -1 })
      .limit(20)
      .skip(0);
    const surveysCount = await Survey.countDocuments();
    const responseCount = await Response.countDocuments();
    const userAggregationPipeline = [
      // Unwind the role array to have one document per role
      {
        $unwind: {
          path: "$role",
        },
      },
      // Group by role and calculate the count of users for each role
      {
        $group: {
          _id: "$role",
          count: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: "role99",
          localField: "_id",
          foreignField: "_id",
          as: "roleDetails",
        },
      },
      {
        $unwind: {
          path: "$roleDetails",
          preserveNullAndEmptyArrays: true, // Optional: use if some roles might not have a matching document
        },
      },
      // Add a total count field to calculate percentages
      {
        $group: {
          _id: "$roleDetails.category",
          totalUsers: { $sum: "$count" },
          roles: {
            $push: {
              role: "$roleDetails",
              count: "$count",
            },
          },
        },
      },
      // Calculate percentage for each role and format the output
      {
        $project: {
          _id: 1,
          roles: {
            $map: {
              input: "$roles",
              as: "role",
              in: {
                role: "$$role.role",
                count: "$$role.count",
                percentage: {
                  $multiply: [
                    { $divide: ["$$role.count", "$totalUsers"] },
                    100,
                  ],
                },
              },
            },
          },
          totalUsers: 1,
        },
      },
    ];
    const userStats = await User.aggregate(userAggregationPipeline);
    const todos = await Todo.find().sort({ createdAt: -1 }).limit(20).skip(0);

    res.status(200).json({
      success: true,
      data: {
        surveys,
        surveysCount,
        responseCount,
        userStats,
        todos,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Unable to fetch dashboard data",
    });
  }
};

exports.getResponsesStatusCount = async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) {
      return res
        .status(400)
        .json({ success: false, message: "User Id is required" });
    }

    const approvedCount = await Response.countDocuments({
      user_id: new mongoose.Types.ObjectId(String(user_id)),
      status: "Approved",
    });
    const rejectedCount = await Response.countDocuments({
      user_id: new mongoose.Types.ObjectId(String(user_id)),
      status: "Rejected",
    });
    const pendingCount = await Response.countDocuments({
      user_id: new mongoose.Types.ObjectId(String(user_id)),
      status: "Pending",
    });

    const responseObject = {
      total: approvedCount + rejectedCount + pendingCount,
      approved: approvedCount,
      rejected: rejectedCount,
      pending: pendingCount,
    };
    console.log("responseObject", responseObject);

    res.status(200).json({
      success: true,
      data: responseObject
        ? responseObject
        : { total: 0, approved: 0, rejected: 0, pending: 0 },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.getResponsesByStatus = async (req, res) => {
  try {
    const { user_id, status } = req.query;
    if (!user_id) {
      return res
        .status(400)
        .json({ success: false, message: "User Id is required" });
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const groupedResponses = await Response.aggregate([
      {
        $match: {
          user_id: new mongoose.Types.ObjectId(String(user_id)),
          status: status,
        },
      },
      {
        $group: {
          _id: "$survey_id",
          responses: {
            $push: "$$ROOT",
          },
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
        $unwind: {
          path: "$surveyDetails",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $facet: {
          // Paginated results
          paginatedResults: [{ $skip: skip }, { $limit: limit }],
          // Total count of matching documents
          totalSurveys: [{ $count: "count" }],
        },
      },
    ]);

    // Extract paginated results and total count
    const paginatedResults = groupedResponses[0].paginatedResults;
    const totalSurveys = groupedResponses[0].totalSurveys[0]?.count || 0;
    const totalPages = Math.ceil(totalSurveys / limit);

    res.status(200).json({
      success: true,
      data: paginatedResults,
      pagination: {
        currentPage: page,
        totalPages: totalPages,
        totalSurveys: totalSurveys,
        surveyPerPage: limit,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.getKaryakartaAssignedResponsesStatus = async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) {
      return res
        .status(400)
        .json({ success: false, message: "User Id is required" });
    }

    const responsesStatusCount = await Response.aggregate([
      {
        $match: {
          panna_pramukh_assigned: new mongoose.Types.ObjectId(String(user_id)),
        },
      },
      {
        $group: {
          _id: null,
          totalResponsesAssigned: { $sum: 1 },
          contactedCount: {
            $sum: {
              $cond: [{ $eq: ["$contacted", true] }, 1, 0],
            },
          },
          voteStatusCount: {
            $sum: {
              $cond: [{ $eq: ["$vote_status", true] }, 1, 0],
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalResponsesAssigned: 1,
          contactedCount: 1,
          voteStatusCount: 1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data:
        responsesStatusCount.length > 0
          ? responsesStatusCount[0]
          : {
              totalResponsesAssigned: 0,
              contactedCount: 0,
              voteStatusCount: 0,
            },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.getResponsesStatusByAcList = async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) {
      return res
        .status(400)
        .json({ success: false, message: "User Id is required" });
    }

    const userData = await User.findById(user_id);
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const matchStage = {};
    const { ac_list } = userData;
    if (ac_list.length === 0) {
      return res.status(200).json({
        success: true,
        data: {
          totalResponsesAssigned: 0,
          contactedCount: 0,
          voteStatusCount: 0,
        },
      });
    }
    const filterCriteria = ac_list.flatMap(({ ac_no, booth_numbers }) =>
      booth_numbers.map((booth_no) => ({ ac_no, booth_no })),
    );

    if (filterCriteria.length > 0) {
      matchStage.$or = filterCriteria;
    }

    const aggregationPipeline = [
      {
        $match: matchStage,
      },
      {
        $group: {
          _id: null,
          totalResponsesAssigned: { $sum: 1 },
          contactedCount: {
            $sum: {
              $cond: [{ $eq: ["$contacted", true] }, 1, 0],
            },
          },
          voteStatusCount: {
            $sum: {
              $cond: [{ $eq: ["$vote_status", true] }, 1, 0],
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalResponsesAssigned: 1,
          contactedCount: 1,
          voteStatusCount: 1,
        },
      },
    ];
    console.log(
      "aggregationPipeline",
      JSON.stringify(aggregationPipeline, null, 2),
    );

    const responsesStatusCount = await Response.aggregate(aggregationPipeline);

    res.status(200).json({ success: true, data: responsesStatusCount[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
