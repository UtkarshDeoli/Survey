const express = require("express");
const {
  getDashboard,
  getResponsesStatusCount,
  getResponsesByStatus,
  getKaryakartaAssignedResponsesStatus,
} = require("../controllers/dashboardController");
const router = express.Router();

router.get("/", getDashboard);
router.get("/responses-status", getResponsesStatusCount);
router.get("/responses", getResponsesByStatus);
router.get(
  "/karyakarta-responses-status",
  getKaryakartaAssignedResponsesStatus,
);
module.exports = router;
