const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getUser', userController.getUser);
router.get('/getAllUsers', userController.getAllUsers);
router.post('/addUsers', userController.addUsers);
router.post('/updateUser', userController.updateUser);


module.exports = router;