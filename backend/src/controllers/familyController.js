const Family = require("../models/family");
const Response = require("../models/response");

exports.getFamily = async (req, res) => {
  try {
    const { house_no, father_first_name, father_last_name, survey_id } =
      req.query;

    const filterOptions = { survey_id };

    if (house_no)
      filterOptions.house_no = { $regex: new RegExp(`^${house_no}$`, "i") };
    if (father_first_name)
      filterOptions.father_first_name = {
        $regex: new RegExp(`^${father_first_name}$`, "i"),
      };
    if (father_last_name)
      filterOptions.father_last_name = {
        $regex: new RegExp(`^${father_last_name}$`, "i"),
      };

    const families = await Family.find(filterOptions);

    res.status(200).json({
      success: true,
      data: families,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.getFamilyResponse = async (req, res) => {
  try {
    const { family_id } = req.query;
    if(!family_id){
      res.status(400).json({ success: false, message:"family_id is required"})
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
      success:false,
      message:"Internal server error"
    })
  }
};

exports.updateFamily = async (req, res) => {
  try {
    const { family_id, house_no, father_first_name, father_last_name } =
      req.body;
    const updatedFamily = {};
    if (house_no) updatedFamily.house_no = house_no;
    if (father_first_name) updatedFamily.father_first_name = father_first_name;
    if (father_last_name) updatedFamily.father_last_name = father_last_name;
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
