const express = require("express");
const {
  getDashboard,
  getResponsesStatusCount,
  getResponsesByStatus,
} = require("../controllers/dashboardController");
const router = express.Router();

router.get("/", getDashboard);
router.get("/responses-status", getResponsesStatusCount);
router.get("/responses", getResponsesByStatus);
module.exports = router;

