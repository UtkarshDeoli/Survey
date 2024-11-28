const express = require('express');
const { sendSMS, initiateCall } = require('../controllers/contactController');
const router = express.Router();
router.post('/send-sms',sendSMS)
router.post('/call',initiateCall)

module.exports = router