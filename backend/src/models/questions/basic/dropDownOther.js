const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const dropDownOtherSchema = new Schema({
  //TODO: Other Text Field Handling
}).add(dropDownSchema);

module.exports = dropDownOtherSchema;
