const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const familySchema = new Schema({
    survey_id:{
        type: Schema.Types.ObjectId,
        ref: 'Survey99'
    },
    ac_no:{
        type:String,
        required:true
    },
    booth_no:{
        type:String,
        required:true
    },
    house_no:{
        type:String,
        required:true
    },
    father_first_name:{
        type:String,
        required:true
    },
    father_last_name:{
        type:String,
        required:true
    }
  },
  { timestamps: true },
);

const Family = mongoose.model("Family99", familySchema);

module.exports = Family;
