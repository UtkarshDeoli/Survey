const express = require("express");
const router = express.Router();
const responseController = require("../controllers/responseController");

router.get("/getAllResponses", responseController.getAllResponses);
router.get("/getResponse", responseController.getResponse);
router.post("/saveResponse", responseController.saveResponse);
router.post("/saveResponses", responseController.saveResponses);
router.get("/getCount", responseController.getCount);
router.get("/getAllSurveyResponses", responseController.getSurveyResponses);
router.get("/getSurveyResponseStats", responseController.getSurveyResponseStats);

module.exports = router;

