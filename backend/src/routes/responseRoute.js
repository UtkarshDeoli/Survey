const express = require("express");
const router = express.Router();
const responseController = require("../controllers/responseController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (req.path === "/saveCallRecording") {
      cb(null, "./call_recordings/");
    } else {
      cb(null, "./uploads/");
    }
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 200 * 1024 * 1024 }, // 200MB file size limit
});

router.post(
  "/saveResponse",
  upload.single("audio"),
  responseController.saveResponse,
);

router.post(
  "/saveCallRecording",
  upload.single("audio"),
  responseController.saveCallRecording,
);

router.get("/getAllResponses", responseController.getAllResponses);
router.get("/getResponse", responseController.getResponse);
//
router.get("/downloadVoter", responseController.downloadVoter);

router.post("/saveResponses", responseController.saveResponses);
router.get("/getCount", responseController.getCount);
router.get("/getAllSurveyResponses", responseController.getSurveyResponses);
router.get(
  "/getSurveyResponseStats",
  responseController.getSurveyResponseStats,
);
router.get("/getMediaResource", responseController.getMediaResource);
router.get(
  "/getGroupedByFamily",
  responseController.getResponsesGroupedByFamily,
);
router.post("/updateResponse", responseController.updateResponse);
router.post("/markAsContacted", responseController.markAsContacted);
router.post("/saveVoteStatus", responseController.saveVoteStatus);
router.post("/saveContactedStatus", responseController.saveContactedStatus);
router.post("/saveRemark", responseController.saveRemark);
router.post("/saveQualityRemark", responseController.saveQualityRemark);

module.exports = router;
