const Family = require("../models/family");
const Response = require("../models/response");

exports.getFamily = async (req, res) => {
  try {
    const { searchText,survey_id } = req.query;
    const regex = new RegExp(searchText, 'i');
    const families = await Family.find({
      survey_id,
      $or: [
        { house_no: { $regex: regex } },
        { father_first_name: { $regex: regex } },
        { father_last_name: { $regex: regex } }
      ]
    });
    res.status(200).json({
        success:true,
        data:families
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success:false,message: "Internal server error" });
  }
};

exports.updateFamily = async (req,res)=>{
    try{
        const {family_id,house_no, father_first_name, father_last_name} = req.body
        const updatedFamily = {}
        if(house_no) updatedFamily.house_no = house_no
        if(father_first_name) updatedFamily.father_first_name = father_first_name
        if(father_last_name) updatedFamily.father_last_name = father_last_name
        const family = await Family.findByIdAndUpdate(family_id, updatedFamily, {new:true})

        if (Object.keys(updatedFamily).length > 0) {
            await Response.updateMany(
              { family_id }, 
              { $set: updatedFamily } 
            );
        }

        res.status(200).json({success:true, data:family})
    }catch(error){
        res.status(500).json({success:false, message:"Internal server error"})
    }
}