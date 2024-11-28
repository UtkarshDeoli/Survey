const express = require('express');
const { sendSMS, initiateCall, contactCallback } = require('../controllers/contactController');
const router = express.Router();
router.post('/send-sms',sendSMS)
router.post('/call',initiateCall)
router.get('/callback',contactCallback)

module.exports = router