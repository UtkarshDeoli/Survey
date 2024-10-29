const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

router.get("/getData", dataController.getData);

module.exports = router;
