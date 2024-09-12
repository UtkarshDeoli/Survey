const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/saveSurvey',  surveyController.saveSurvey);
router.get('/getSurvey',  surveyController.getSurvey);
router.get('/getAllSurvey',  surveyController.getAllSurvey);
router.post('/updateSurvey', surveyController.updateSurvey);


module.exports = router;