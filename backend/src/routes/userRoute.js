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
router.get("/getSupervisorCollectors", userController.getSupervisorCollectors);


// karyakarta
router.post("/createKaryakarta", userController.createKaryakarta);
router.post("/updateKaryakarta", userController.updateKaryakarta);
router.get("/getAllKaryakarta", userController.getAllKaryakarta);
router.get("/getKaryakarta", userController.getKaryakarta);
router.get("/getPannaPramukh", userController.getPannaPramukh);
router.get("/getBoothAdhyaksh", userController.getBoothAdhyaksh);
router.post('/updateMultipleKaryakarta',userController.updateMultipleKaryakarta)
router.post('/getUsersByAcList',userController.getUsersByAcList)




// notification settings
router.post("/saveToken", userController.saveToken);

module.exports = router;
