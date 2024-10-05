const express = require("express");
const router = express.Router();
const responseController = require("../controllers/responseController");

router.get("/getAllResponses", responseController.getAllResponses);
router.get("/getResponse", responseController.getResponse);
router.post("/saveResponse", responseController.saveResponse);
router.get("/getCount", responseController.getCount);

module.exports = router;

