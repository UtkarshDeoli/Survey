const Response = require("../models/response");
const SampleResponse = require("../models/sampleResponse");
const Survey = require("../models/survey");
const mongoose = require("mongoose");

//helper functions /////////////---------------------------------------------------------------------------------------------------------------
async function getSortedResponses(surveyId) {
  try {
    const responses = await Response.find({ survey_id: surveyId }).sort({
      createdAt: -1,
      name: 1,
    });
    return responses;
  } catch (error) {
    console.error("Error fetching sorted responses:", error);
    throw new Error("Failed to fetch responses");
  }
}

function groupResponses(responses, sampleSize) {
  const groups = [];
  for (let i = 0; i < responses.length; i += sampleSize) {
    groups.push(responses.slice(i, i + sampleSize));
  }
  return groups;
}

function assignToCollector(groups, sampleMethod, index = 0) {
  const sampleResponses = [];
  try {
    groups.forEach((group) => {
      let selectedResponse;

      if (sampleMethod === "random") {
        // Randomly pick a response from the group
        const randomIndex = Math.floor(Math.random() * group.length);
        selectedResponse = group[randomIndex];
      } else if (sampleMethod === "index" && group[index]) {
        // Pick the response at a specific index (default is 0, but admin can choose)
        selectedResponse = group[index];
      }

      if (selectedResponse) {
        sampleResponses.push(selectedResponse);
      }
    });
  } catch (error) {
    console.error("Error assigning responses to collector:", error);
    throw new Error("Failed to assign responses");
  }

  return sampleResponses;
}

async function createSampleResponses(
  surveyId,
  userId,
  sampleResponses,
  groupId,
  samplingMethod,
  samplingSize
) {
  try {
    const sampleResponseDocs = sampleResponses.map((response) => ({
      survey_id: surveyId,
      user_id: userId, // Survey collector (admin selects this)
      response_id: response._id,
      group_id: groupId,
      sampling_method: samplingMethod, // Add sampling method
      sampling_size: samplingSize, // Add sampling size
    }));

    // Save all sample responses
    await SampleResponse.insertMany(sampleResponseDocs);
  } catch (error) {
    console.error("Error creating sample responses:", error);
    throw new Error("Failed to create sample responses");
  }
}

//main controllers /////////////---------------------------------------------------------------------------------------------------------------

exports.assignResponsesToCollector = async (req, res) => {
  const { surveyId, userId, sampleSize, sampleMethod, index = 0 } = req.body;
  console.log("bopdy is ---->", req.body);

  // Input validation
  if (!surveyId || !userId || !sampleSize || !sampleMethod) {
    return res.status(400).json({
      success: false,
      message:
        "Missing required parameters: surveyId, userId, sampleSize, or sampleMethod",
    });
  }

  try {
    // Step 1: Get sorted responses
    const responses = await getSortedResponses(surveyId);
    if (responses.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No responses found for the given survey ID",
      });
    }

    console.log(responses.length, "--->responses found");

    // Step 2: Group responses into the specified sample size
    const groups = groupResponses(responses, Number(sampleSize));
    console.log(groups.length, "--->groups formed");

    console.log("groups", groups);

    // Step 3: Assign responses based on the selected method (random or index)
    const sampleResponses = assignToCollector(groups, sampleMethod, index);

    console.log("sampleResponses", sampleResponses);

    if (sampleResponses.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No valid responses found to assign",
      });
    }

    // Step 4: Create sample response records and assign them to the survey collector
    const groupId = `group_${Date.now()}`; // Unique group ID for this batch
    await createSampleResponses(
      surveyId,
      userId,
      sampleResponses,
      groupId,
      sampleMethod, // Pass sampling method
      sampleSize // Pass sampling size
    );

    return res.status(200).json({
      success: true,
      message: "Sample responses assigned successfully",
    });
  } catch (error) {
    console.error("Error in assigning responses to collector:", error);
    return res.status(500).json({
      success: false,
      message: "An internal server error occurred. Please try again later.",
    });
  }
};

exports.getSampleResponses = async (req, res) => {
  const { surveyId, groupId, userId } = req.query;

  // Validate the surveyId
  if (!surveyId) {
    return res.status(400).json({
      success: false,
      message: "Survey ID is required",
    });
  }

  try {
    // Build the query based on the provided filters
    const filterQuery = { survey_id: surveyId };

    if (groupId) {
      filterQuery.group_id = groupId;
    }

    if (userId) {
      filterQuery.user_id = userId;
    }

    // Fetch filtered sample responses
    const sampleResponses = await SampleResponse.find(filterQuery).populate(
      "response_id"
    );

    return res.status(200).json({
      success: true,
      message: "Filtered sample responses fetched successfully",
      data: sampleResponses,
    });
  } catch (error) {
    console.error("Error filtering sample responses:", error);
    return res.status(500).json({
      success: false,
      message: "An internal server error occurred. Please try again later.",
    });
  }
};

exports.getSampleSurveys = async (req, res) => {
  try {
    console.log("route hitting");
    const { name } = req.query;
    const filters = { sampling: true };
    if (name) filters.name = { $regex: name, $options: "i" };
    console.log("filters", filters);
    const sampleSurveys = await Survey.find(filters);
    console.log(sampleSurveys);
    return res.status(200).json({ success: true, data: sampleSurveys });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "An internal server error occurred. Please try again later.",
    });
  }
};
exports.getGroupsWithSurveyCollectors = async (req, res) => {
  const { survey_id } = req.query; // Assuming survey_id is passed as a query parameter

  if (!survey_id) {
    return res.status(400).json({ message: "Survey ID is required" });
  }
  try {
    const groupsWithCollectors = await SampleResponse.aggregate([
      {
        $match: {
          survey_id: new mongoose.Types.ObjectId(String(survey_id)), // Match the specified survey_id
        },
      },
      {
        $lookup: {
          from: "user99", // Collection name for User99
          localField: "user_id",
          foreignField: "_id",
          as: "survey_collector",
        },
      },
      {
        $unwind: "$survey_collector", // Extract the single collector object
      },
      {
        $group: {
          _id: "$group_id", // Group by group_id
          survey_collector: { $first: "$survey_collector.name" }, // Get the collector's name (adjust the field as needed)
        },
      },
      {
        $project: {
          _id: 0, // Exclude default _id
          group_id: "$_id", // Rename _id to group_id
          survey_collector: 1, // Include only survey_collector
        },
      },
    ]);

    return res.status(200).json({success:true,data:groupsWithCollectors});
  } catch (error) {
    console.error("Error fetching groups with survey collectors:", error);
    return res.status(500).json({ message: "Server error", error });
  }
};
