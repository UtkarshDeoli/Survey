const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const baseGridSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  rowOptions: {
    type: [String],
    required: true,
  },
  columnOptions: {
    type: [String],
    required: true,
  },
  questionOptions: {
    type: [String],
    required: true,
  },
  variableName: {
    type: String,
  },
  allRequired: {
    type: Boolean,
    default: true,
  },
  forwardRowOptionsFrom: {
    type: String,
  },
  forwardRowOptionsType: {
    type: String,
    enum: ["none", "selected", "unselected"],
    default: "none",
  },
  forwardColumnOptionsFrom: {
    type: String,
  },
  forwardColumnOptionsType: {
    type: String,
    enum: ["none", "selected", "unselected"],
    default: "none",
  },
  forwardQuestionOptionsFrom: {
    type: String,
  },
  forwardQuestionOptionsType: {
    type: String,
    enum: ["none", "selected", "unselected"],
    default: "none",
  },
  displayAsGrid: {
    type: Boolean,
    default: false,
  },
});

module.exports = baseGridSchema;
