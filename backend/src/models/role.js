const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        type:String,
        required:true,
        enum:["user","karyakarta","custom"]
    },
    permissions:{
            type:[String],
            // enum:["Create survey","Edit survey", "View survey","Contact voter","All"],
            required:true
    }
  },
  { timestamps: true },
);

const Role = mongoose.model("Role99", roleSchema);

module.exports = Role;
