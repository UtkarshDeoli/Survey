const MediaResponse = require("../models/mediaResponse");
const Responses = require("../models/response");
const Family = require("../models/family");
const mongoose = require("mongoose");

exports.saveResponse = async (req, res) => {
  try {
    const {
      survey_id,
      user_id,
      responses,
      media_responses,
      location_data,
      name,
      ac_no,
      booth_no,
      house_no,
      last_name,
      family_id,
      save_mode,
    } = req.body;

    if (media_responses) {
      Object.entries(media_responses).map(([key, value]) => {
        const mediaBuffer = Buffer.from(value.data, "base64");
        const mediaResponse = new MediaResponse({
          userId: user_id,
          surveyId: survey_id,
          type: value.type,
          data: mediaBuffer,
        });
        mediaResponse.save();

        for (let response of responses) {
          if (response.question_id == key) {
            response.response = mediaResponse._id;
          }
        }
      });
    }
    let responseToSave = {
      survey_id,
      user_id,
      responses,
      location_data,
      ac_no,
      booth_no,
      house_no,
      name,
      last_name,
    };

    let createdNewFamily = false;
    if (save_mode === "new_family") {
      const alreadyExists = await Family.findOne({
        survey_id,
        ac_no,
        booth_no,
        house_no,
        last_name,
      });

      console.log("already exists", alreadyExists);

      if (alreadyExists) {
        responseToSave.family_id = alreadyExists._id;
      } else {
        const newFamily = await Family.create({
          survey_id,
          ac_no,
          booth_no,
          house_no,
          last_name,
        });
        createdNewFamily = true;
        responseToSave.family_id = newFamily._id;
      }
    } else if (family_id) {
      responseToSave.family_id = family_id;
    }
    const response = new Responses(responseToSave);
    await response.save();

    if (createdNewFamily) {
      await Family.updateOne(
        { _id: responseToSave.family_id },
        { $set: { family_head: response._id } },
      );
    }
    return res
      .status(201)
      .json({ success: true, message: "Response created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.saveResponses = async (req, res) => {
  try {
    const responsesArray = req.body;

    if (!Array.isArray(responsesArray) || responsesArray.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid input data" });
    }
    await Responses.insertMany(responsesArray);

    return res.status(201).json({
      success: true,
      message: `${responsesArray.length} responses saved successfully`,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getCount = async (req, res) => {
  try {
    const surveyId = req.query.surveyId;
    const response = await Responses.find({ surveyId });
    if (!response) {
      return res
        .status(404)
        .json({ success: "false", message: "Response not found" });
    } else {
      return res.status(201).json({ success: "true", data: response.length });
    }
  } catch (error) {
    return res.status(400).json({ success: "false", message: error.message });
  }
};

exports.getAllResponses = async (req, res) => {
  try {
    const { surveyId, userId, startDate, endDate, filters } = req.query;
    console.log("query is------>", req.query);
    const matchStage = {};

    matchStage.survey_id = new mongoose.Types.ObjectId(String(surveyId));
    if (userId) {
      matchStage.user_id = new mongoose.Types.ObjectId(String(userId));
    }
    if (startDate && endDate) {
      if (isNaN(new Date(startDate)) || isNaN(new Date(endDate))) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid date range." });
      }
      if (startDate && endDate) {
        matchStage.createdAt = {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        };
      }
    }
    const responseFilters = [];
    console.log("filters are-->", filters);
    if (filters) {
      console.log("filteres there");
      // const filterArray = JSON.parse(filters);
      // console.log("fa-->", filterArray);
      filters.forEach(({ question, operator, response: answer }) => {
        const filter = {
          question_id: Number(question),
        };
        switch (operator) {
          case "contains":
            filter.response = { $regex: answer, $options: "i" };
            break;
          case "equals":
            filter.response = answer;
            break;
          case "not equals":
            filter.response = { $ne: answer };
            break;
          case "starts with":
            filter.response = { $regex: `^${answer}`, $options: "i" };
            break;
          case "ends with":
            filter.response = { $regex: `${answer}$`, $options: "i" };
            break;
          case "=":
            filter.response = Number(answer);
            break;
          case "!=":
            filter.response = { $ne: Number(answer) };
            break;
          case "<":
            filter.response = { $lt: Number(answer) };
            break;
          case "<=":
            filter.response = { $lte: Number(answer) };
            break;
          case ">":
            filter.response = { $gt: Number(answer) };
            break;
          case ">=":
            filter.response = { $gte: Number(answer) };
            break;
          case "!=":
            filter.response = { $ne: Number(answer) };
            break;
        }
        responseFilters.push(filter);
      });
    }

    const aggregationPipeline2 = [
      {
        $match: matchStage,
      },
      {
        $unwind: "$responses",
      },
      {
        $project: {
          _id: 1,
          user_id: 1,
          survey_id: 1,
          ac_no: 1,
          booth_no: 1,
          house_no: 1,
          name: 1,
          last_name: 1,
          location_data: 1,
          createdAt: 1,
          "responses.question_id": 1,
          "responses.question_type": 1,
          "responses.question": 1,
          "responses.response": {
            $cond: {
              if: {
                $regexMatch: {
                  input: { $toString: "$responses.response" },
                  regex: /^\d+(\.\d+)?$/,
                },
              },
              then: { $toDouble: "$responses.response" },
              else: "$responses.response",
            },
          },
        },
      },
      {
        $group: {
          _id: "$_id",
          user_id: { $first: "$user_id" },
          ac_no: { $first: "$ac_no" },
          booth_no: { $first: "$booth_no" },
          house_no: { $first: "$house_no" },
          name: { $first: "$name" },
          last_name: { $first: "$last_name" },
          location_data: { $first: "$location_data" },
          survey_id: { $first: "$survey_id" },
          createdAt: { $first: "$createdAt" },
          responses: { $push: "$responses" },
        },
      },
    ];

    if (responseFilters && responseFilters.length > 0) {
      aggregationPipeline2.push({
        $match: {
          $and: responseFilters.map((response) => ({
            responses: {
              $elemMatch: {
                question_id: response.question_id,
                response: response.response,
              },
            },
          })),
        },
      });
    }

    console.log(JSON.stringify(aggregationPipeline2, null, 2));
    const filteredResponse = await Responses.aggregate(aggregationPipeline2);

    if (!filteredResponse) {
      return res
        .status(404)
        .json({ success: "false", message: "Response not found" });
    } else {
      console.log(filteredResponse);
      return res.status(200).json({ success: "true", data: filteredResponse });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: "false", message: error.message });
  }
};

exports.getResponse = async (req, res) => {
  try {
    const responseId = req.query.responseId;
    const response = await Responses.findById(responseId);
    if (!response) {
      return res
        .status(404)
        .json({ success: "false", message: "Response not found" });
    } else {
      return res.status(201).json({ success: "true", data: response });
    }
  } catch (error) {
    return res.status(400).json({ success: "false", message: error.message });
  }
};

exports.getResponsesGroupedByFamily = async (req, res) => {
  try {
    const surveyId = req.query.surveyId;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const groupedResponses = await Responses.aggregate([
      {
        $match: {
          survey_id: new mongoose.Types.ObjectId(surveyId),
        },
      },
      {
        $group: {
          _id: "$family_id",
          family_id: { $first: "$family_id" },
          survey_id: { $first: "$survey_id" },
          ac_no: { $first: "$ac_no" },
          booth_no: { $first: "$booth_no" },
          last_name: { $first: "$last_name" },
          createdAt: { $first: "$createdAt" },
          responses: {
            $push: {
              _id: "$_id",
              user_id: "$user_id",
              name: "$name",
              responses: "$responses",
              location_data: "$location_data",
            },
          },
        },
      },
      {
        $unwind: {
          path: "$responses",
        },
      },
      {
        $sort: { createdAt: -1 },
      },
      { $skip: skip },
      { $limit: limit },
    ]);

    const totalItems = await Responses.countDocuments({ survey_id: surveyId });
    const totalPages = Math.ceil(totalItems / limit);

    return res.status(200).json({
      success: true,
      data: groupedResponses,
      pagination: {
        totalItems,
        totalPages,
        currentPage: page,
        pageSize: groupedResponses.length,
      },
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getSurveyResponses = async (req, res) => {
  try {
    const { search, sortOrder = "desc" } = req.query;

    const pipeline = [
      {
        $group: {
          _id: "$survey_id",
          responseCount: { $sum: 1 },
          latestResponseCreatedAt: { $max: "$createdAt" },
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
        $project: {
          _id: 0,
          survey_id: "$_id",
          surveyName: "$surveyDetails.name",
          responseCount: 1,
          latestResponseCreatedAt: 1,
          surveyCreatedAt: "$surveyDetails.createdAt",
        },
      },
    ];

    if (search) {
      pipeline.push({
        $match: {
          surveyName: { $regex: search, $options: "i" },
        },
      });
    }

    pipeline.push({
      $sort: {
        latestResponseCreatedAt: sortOrder === "asc" ? 1 : -1,
      },
    });

    const results = await Responses.aggregate(pipeline);

    return res.status(200).json({
      success: true,
      message: "Responses grouped by survey retrieved successfully",
      data: results,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getSurveyResponseStats = async (req, res) => {
  try {
    const { survey_id } = req.query;

    if (!survey_id) {
      return res.status(400).json({ message: "Survey ID is required." });
    }

    const stats = await Responses.aggregate([
      {
        $match: {
          survey_id: new mongoose.Types.ObjectId(String(survey_id)),
        },
      },
      {
        $unwind: "$responses",
      },
      {
        $group: {
          _id: "$responses.question_id",
          question: { $first: "$responses.question" },
          responses: {
            $push: {
              response: "$responses.response",
              question_type: "$responses.question_type",
            },
          },
          total_responses: { $sum: 1 },
        },
      },

      {
        $unwind: "$responses",
      },
      {
        $group: {
          _id: {
            question_id: "$_id",
            response_value: "$responses.response",
          },
          question: { $first: "$question" },
          response_count: { $sum: 1 },
          total_responses: { $first: "$total_responses" },
        },
      },
      {
        $group: {
          _id: "$_id.question_id",
          question: { $first: "$question" },
          total_responses: { $first: "$total_responses" },
          responses: {
            $push: {
              response_value: "$_id.response_value",
              count: "$response_count",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          question_id: "$_id",
          question: 1,
          total_responses: 1,
          responses: 1,
        },
      },
    ]);
    return res.status(200).json({ success: true, data: stats });
  } catch (error) {
    console.error("Error fetching survey response stats:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
exports.getMediaResource = async (req, res) => {
  console.log("get media resource called");
  try {
    const mediaId = req.query.mediaId;
    const media = await MediaResponse.findById(mediaId);
    if (!media) {
      return res
        .status(404)
        .json({ success: "false", message: "Media not found" });
    } else {
      return res.status(201).json({ success: "true", data: media });
    }
  } catch (error) {
    return res.status(400).json({ success: "false", message: error.message });
  }
};

exports.updateResponse = async (req, res) => {
  console.log("updating response");
  try {
    const {
      response_id,
      survey_id,
      user_id,
      responses,
      media_responses,
      location_data,
      name,
      ac_no,
      booth_no,
      house_no,
      last_name,
      family_id,
      save_mode,
    } = req.body;

    if (media_responses) {
      Object.entries(media_responses).map(([key, value]) => {
        const mediaBuffer = Buffer.from(value.data, "base64");
        const mediaResponse = new MediaResponse({
          userId: user_id,
          surveyId: survey_id,
          type: value.type,
          data: mediaBuffer,
        });
        mediaResponse.save();

        for (let response of responses) {
          if (response.question_id == key) {
            response.response = mediaResponse._id;
          }
        }
      });
    }
    let responseToUpdate = {
      survey_id,
      user_id,
      responses,
      location_data,
      ac_no,
      booth_no,
      house_no,
      name,
      last_name,
    };
    const response = await Responses.findByIdAndUpdate(
      response_id,
      responseToUpdate,
      {
        new: true,
      },
    );

    if (!response) {
      return res
        .status(404)
        .json({ success: "false", message: "Response not found" });
    }

    return res
      .status(201)
      .json({ success: true, message: "Response Updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};
