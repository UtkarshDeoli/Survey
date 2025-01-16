const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

router.get("/getData", dataController.getData);
router.get("/getSurveyResponsesData", dataController.getSurveyResponsesData);

module.exports = router;
