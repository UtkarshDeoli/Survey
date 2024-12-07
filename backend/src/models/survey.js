const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const surveySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ac_list:[
      {
        ac_no: {
          type: String,
        },
        booth_numbers: [
          {
            type: String,
          },
        ],
      }
    ],
    access_pin: {
      type: String,
    },
    background_location_capture: {
      type: Boolean,
      required: false,
    },
    published: {
      type: Boolean,
      default: false,
    },
    questions: {
      type: Schema.Types.Mixed,
      default: [],
    },
    response_count: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);


const Survey = Mongoose.model("Survey99", surveySchema);

module.exports = Survey;

