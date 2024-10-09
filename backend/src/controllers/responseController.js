const Responses = require("../models/response");

exports.saveResponse = async (req, res) => {
  try {
    const { survey_id, user_id,responses, other_details } = req.body;
    const response = new Responses({
      survey_id,
      user_id,
      responses,
      other_details
    });
    await response.save();
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
      return res.status(400).json({ success: false, message: "Invalid input data" });
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
    const surveyId = req.query.surveyId;
<<<<<<< HEAD
    const response = await Responses.find({ survey_id:surveyId });
=======

    const response = await Responses.find({ survey_id: surveyId });
>>>>>>> b7660fb2a5bde2322ed2db75d71ea0abaf9d02dd
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

exports.getSurveyResponses = async (req, res) => {
  try {
    const { search, sortOrder = 'desc' } = req.query;

    const pipeline = [
      {
        $group: {
          _id: "$survey_id",
          responseCount: { $sum: 1 },
          latestResponseCreatedAt: { $max: "$createdAt" }
        }
      },
      {
        $lookup: {
          from: "survey99",
          localField: "_id",
          foreignField: "_id",
          as: "surveyDetails"
        }
      },
      {
        $unwind: "$surveyDetails"
      },
      {
        $project: {
          _id: 0,
          survey_id: "$_id",
          surveyName: "$surveyDetails.name",
          responseCount: 1,
          latestResponseCreatedAt: 1,
          surveyCreatedAt: "$surveyDetails.createdAt"
        }
      }
    ];

    if (search) {
      pipeline.push({
        $match: {
          surveyName: { $regex: search, $options: "i" }
        }
      });
    }

    pipeline.push({
      $sort: {
        latestResponseCreatedAt: sortOrder === 'asc' ? 1 : -1 
      }
    });

    const results = await Responses.aggregate(pipeline);

    return res.status(200).json({
      success: true,
      message: "Responses grouped by survey retrieved successfully",
      data: results
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};




