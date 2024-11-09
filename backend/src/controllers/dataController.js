const mongoose = require("mongoose");
const Data = require("../models/data");

exports.getData = async (req, res) => {
  try {
    const { userId } = req.query;

    const dataDoc = await Data.findOne({
      user_id: new mongoose.Types.ObjectId(String(userId)),
    }).populate("responses");
    console.log(userId, dataDoc);

    // [
    //   {
    //     $match: {
    //       user_id:ObjectId('672c2d3fe4b067ef21b6a778')
    //     }
    //   },
    //   {
    //     $group:{
    //       _id:"$survey_id",
    //       responses:{$last:"$responses"}
    //     }
    //   },
    //    {
    //     $lookup: {
    //       from: "survey99",           
    //       localField: "_id",          
    //       foreignField: "_id",         
    //       as: "surveyDetails"          
    //     }
    //   },
    //   {
    //     $unwind: "$surveyDetails"    
    //   },
    //   {
    //     $lookup: {
    //       from: "response99",   
    //       localField: "responses",     
    //       foreignField: "_id",         
    //       as: "responseDetails"        
    //     }
    //   },
      
    // ]

    if (!dataDoc) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }
    return res.status(200).json({ success: true, data: dataDoc });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "something went wrong while getting data",
    });
  }
};
