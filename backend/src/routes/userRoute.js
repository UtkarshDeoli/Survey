const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/getUser", userController.getUser);
router.get("/getAllUsers", userController.getAllUsers);
router.post("/addUsers", userController.addUsers);
router.post("/addMultipleUsers", userController.addMultipleUsers);
router.post("/updateUser", userController.updateUser);
router.post("/updateUsers", userController.updateUsers);
router.post("/uploadProfilePicture", userController.uploadProfilePicture);

// karyakarta
router.post("/createKaryakarta", userController.createKaryakarta);
router.get("/getAllKaryakarta", userController.getAllKaryakarta);
router.get("/getPannaPramukh", userController.getPannaPramukh);
router.get("/getBoothAdhyaksh", userController.getBoothAdhyaksh);




module.exports = router;

