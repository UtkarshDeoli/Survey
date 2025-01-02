const express = require("express");
const {
  getDashboard,
  getResponsesStatusCount,
  getResponsesByStatus,
  getKaryakartaAssignedResponsesStatus,
  getResponsesStatusByAcList,
} = require("../controllers/dashboardController");
const router = express.Router();

router.get("/", getDashboard);
router.get("/responses-status", getResponsesStatusCount);
router.get("/responses", getResponsesByStatus);
router.get(
  "/karyakarta-responses-status",
  getKaryakartaAssignedResponsesStatus,
);
router.get("/responses-status-by-aclist", getResponsesStatusByAcList);
module.exports = router;
