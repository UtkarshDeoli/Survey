const moment = require("moment");
const CallRating = require("../../models/callRating");

// Helper function to get Total Call Ratings
exports.getTotalCallRatings = async () => {
  return await CallRating.aggregate([{ $count: "totalRatings" }]);
};

// Helper function to get Recent Call Ratings (last 5 ratings)
exports.getRecentCallRatings = async () => {
  return await CallRating.aggregate([
    { $sort: { createdAt: -1 } },
    { $limit: 5 },
    {
      $lookup: {
        from: "user99", 
        localField: "user_id",
        foreignField: "_id", 
        as: "user", 
      },
    },
    {
      $unwind: { path: "$user", preserveNullAndEmptyArrays: true },
    },
  ]);
};
// Helper function to get Rating Count (Good, Bad, Great)
exports.getRatingCount = async () => {
  return await CallRating.aggregate([
    {
      $group: {
        _id: "$rating",
        count: { $sum: 1 },
      },
    },
  ]);
};

exports.overallDailyRatingCount = async () => {
  return await CallRating.aggregate([
    {
      $match: {
        createdAt: {
          $gte: moment().subtract(7, "days").startOf("day").toDate(),
          $lte: moment().endOf("day").toDate(),
        },
      },
    },
    {
      $project: {
        date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
      },
    },
    {
      $group: {
        _id: "$date",
        count: { $sum: 1 },
      },
    },
    { $sort: { _id: -1 } },
  ]);
};
exports.overallWeeklyRatingCount = async () => {
  return await CallRating.aggregate([
    {
      $match: {
        createdAt: {
          $gte: moment().subtract(5, "weeks").startOf("week").toDate(),
          $lte: moment().endOf("week").toDate(),
        },
      },
    },
    {
      $project: {
        week: { $isoWeek: "$createdAt" },
      },
    },
    {
      $group: {
        _id: "$week",
        count: { $sum: 1 },
      },
    },
    { $sort: { _id: -1 } },
  ]);
};

exports.overallMonthlyRatingCount = async () => {
  return await CallRating.aggregate([
    {
      $match: {
        createdAt: {
          $gte: moment().subtract(6, "months").startOf("month").toDate(),
          $lte: moment().endOf("month").toDate(),
        },
      },
    },
    {
      $project: {
        month: { $month: "$createdAt" },
        year: { $year: "$createdAt" },
      },
    },
    {
      $group: {
        _id: { month: "$month", year: "$year" },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
  ]);
};

exports.getGoodDailyRatingCount = async () => {
    return await CallRating.aggregate([
      { $match: { rating: "positive" } },
      {
        $match: {
          createdAt: {
            $gte: moment().subtract(7, "days").startOf("day").toDate(),
            $lte: moment().endOf("day").toDate(),
          },
        },
      },
      {
        $project: {
          date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        },
      },
      {
        $group: {
          _id: "$date",
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: -1 } },
    ]);
  };
  
  exports.getGoodWeeklyRatingCount = async () => {
    return await CallRating.aggregate([
      { $match: { rating: "positive" } },
      {
        $match: {
          createdAt: {
            $gte: moment().subtract(5, "weeks").startOf("week").toDate(),
            $lte: moment().endOf("week").toDate(),
          },
        },
      },
      {
        $project: {
          week: { $isoWeek: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$week",
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: -1 } },
    ]);
  };
  
  exports.getGoodMonthlyRatingCount = async () => {
    return await CallRating.aggregate([
      { $match: { rating: "positive" } },
      {
        $match: {
          createdAt: {
            $gte: moment().subtract(6, "months").startOf("month").toDate(),
            $lte: moment().endOf("month").toDate(),
          },
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          year: { $year: "$createdAt" },
        },
      },
      {
        $group: {
          _id: { month: "$month", year: "$year" },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": -1, "_id.month": -1 } },
    ]);
  };
  
  exports.getBadDailyRatingCount = async () => {
    return await CallRating.aggregate([
      { $match: { rating: "negative" } },
      {
        $match: {
          createdAt: {
            $gte: moment().subtract(7, "days").startOf("day").toDate(),
            $lte: moment().endOf("day").toDate(),
          },
        },
      },
      {
        $project: {
          date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        },
      },
      {
        $group: {
          _id: "$date",
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: -1 } },
    ]);
  };
  
  exports.getBadWeeklyRatingCount = async () => {
    return await CallRating.aggregate([
      { $match: { rating: "negative" } },
      {
        $match: {
          createdAt: {
            $gte: moment().subtract(5, "weeks").startOf("week").toDate(),
            $lte: moment().endOf("week").toDate(),
          },
        },
      },
      {
        $project: {
          week: { $isoWeek: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$week",
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: -1 } },
    ]);
  };
  
  exports.getBadMonthlyRatingCount = async () => {
    return await CallRating.aggregate([
      { $match: { rating: "negative" } },
      {
        $match: {
          createdAt: {
            $gte: moment().subtract(6, "months").startOf("month").toDate(),
            $lte: moment().endOf("month").toDate(),
          },
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          year: { $year: "$createdAt" },
        },
      },
      {
        $group: {
          _id: { month: "$month", year: "$year" },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": -1, "_id.month": -1 } },
    ]);
  };
  
  exports.getGreatDailyRatingCount = async () => {
    return await CallRating.aggregate([
      { $match: { rating: "neutral" } },
      {
        $match: {
          createdAt: {
            $gte: moment().subtract(7, "days").startOf("day").toDate(),
            $lte: moment().endOf("day").toDate(),
          },
        },
      },
      {
        $project: {
          date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        },
      },
      {
        $group: {
          _id: "$date",
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: -1 } },
    ]);
  };
  
  exports.getGreatWeeklyRatingCount = async () => {
    return await CallRating.aggregate([
      { $match: { rating: "neutral" } },
      {
        $match: {
          createdAt: {
            $gte: moment().subtract(5, "weeks").startOf("week").toDate(),
            $lte: moment().endOf("week").toDate(),
          },
        },
      },
      {
        $project: {
          week: { $isoWeek: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$week",
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: -1 } },
    ]);
  };
  
  exports.getGreatMonthlyRatingCount = async () => {
    return await CallRating.aggregate([
      { $match: { rating: "neutral" } },
      {
        $match: {
          createdAt: {
            $gte: moment().subtract(6, "months").startOf("month").toDate(),
            $lte: moment().endOf("month").toDate(),
          },
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          year: { $year: "$createdAt" },
        },
      },
      {
        $group: {
          _id: { month: "$month", year: "$year" },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": -1, "_id.month": -1 } },
    ]);
  };
  
