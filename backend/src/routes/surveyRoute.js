const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');

router.post('/saveSurvey', surveyController.saveSurvey);
router.get('/getSurvey', surveyController.getSurvey);
router.get('/getAllSurvey', surveyController.getAllSurvey);
router.post('/updateSurvey', surveyController.updateSurvey);


module.exports = router;