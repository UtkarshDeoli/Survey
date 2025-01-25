const CallRating = require("../models/callRating"); // Import your CallRating model

// Create a new CallRating
exports.createCallRating = async (req, res) => {
  try {
    const { user_id, response_id, rating, comment } = req.body;
    const newCallRating = new CallRating({
      user_id,
      response_id,
      rating,
      comment,
    });
    await newCallRating.save();
    res.status(201).json({
      success: true,
      message: "Call Rating created successfully",
      data: newCallRating,
    });
  } catch (err) {
    res.status(500).json({
      success: true,
      message: "Error creating Call Rating",
      error: err.message,
    });
  }
};

// Read all CallRatings
exports.getAllCallRatings = async (req, res) => {
  try {
    const callRatings = await CallRating.find().exec();
    res.status(200).json({
      success: true,
      data: callRatings,
    });
  } catch (err) {
    res.status(500).json({
      success: true,
      message: "Error retrieving Call Ratings",
      error: err.message,
    });
  }
};

// Read a single CallRating by ID
exports.getCallRatingById = async (req, res) => {
  try {
    const callRating = await CallRating.findById(req.query.id).exec();

    if (!callRating) {
      return res
        .status(404)
        .json({ success: true, message: "Call Rating not found" });
    }

    res.status(200).json({
      success: true,
      data: callRating,
    });
  } catch (err) {
    res.status(500).json({
      success: true,
      message: "Error retrieving Call Rating",
      error: err.message,
    });
  }
};

// Update a CallRating by ID
exports.updateCallRating = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const updatedCallRating = await CallRating.findByIdAndUpdate(
      req.params.id,
      { rating, comment },
      { new: true } // Return the updated document
    );

    if (!updatedCallRating) {
      return res.status(404).json({ message: "Call Rating not found" });
    }

    res.status(200).json({
      message: "Call Rating updated successfully",
      data: updatedCallRating,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating Call Rating", error: err.message });
  }
};

// Delete a CallRating by ID
exports.deleteCallRating = async (req, res) => {
  try {
    const deletedCallRating = await CallRating.findByIdAndDelete(req.query.id);

    if (!deletedCallRating) {
      return res.status(404).json({ message: "Call Rating not found" });
    }

    res.status(200).json({ message: "Call Rating deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting Call Rating", error: err.message });
  }
};
