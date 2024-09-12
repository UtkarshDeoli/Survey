const express = require('express');
const router =  express.Router();
const responseController = require('../controllers/responseController');

router.get('/getResponses', responseController.getResponses);
router.post('/saveResponse', responseController.saveResponse);
router.get('/getCount', responseController.getCount);

module.exports = router;