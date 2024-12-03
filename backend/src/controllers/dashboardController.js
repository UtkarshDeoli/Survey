const Survey = require("../models/survey");
const Response = require("../models/response");
const User = require("../models/user");
const Todo = require("../models/todo");

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
