const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", authController.login);
router.post("/signup", authController.signup);
router.post("/resetPassword", authController.resetPassword);
router.post("/resetPasswordByOtp", authController.resetPasswordByOtp);
router.post("/forgotPassword", authController.forgotPassword);
router.post("/adminLogin", authController.adminLogin);

module.exports = router;

