const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getUsers', userController.getUsers);
router.post('/addUsers', userController.addUsers);
router.post('/updateUser', userController.updateUser);


module.exports = router;