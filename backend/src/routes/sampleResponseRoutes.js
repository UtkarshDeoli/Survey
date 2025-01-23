const express = require('express');
const sampleResponseController = require('../controllers/sampleResponseController');
const router = express.Router();

router.post('/assign-sample-responses',sampleResponseController.assignResponsesToCollector)
router.post('/delete',sampleResponseController.deleteSampling)
router.get('/sample-responses',sampleResponseController.getSampleResponses)
router.get('/sample-surveys',sampleResponseController.getSampleSurveys)
router.get('/groups',sampleResponseController.getGroupsWithSurveyCollectors)

module.exports = router;