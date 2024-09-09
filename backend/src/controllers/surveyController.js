const Survey = require('../models/survey');


exports.saveSurvey = async (req, res) => {
    try {
        const survey = new Survey(req.body);
        await survey.save();
        return res.status(201).json({success: "true", message: 'Survey created successfully' });
    } catch (error) {
        return res.status(400).json({ success: "false", message: error.message });
    }
}

exports.getSurvey = async (req, res) => {
    try {
        const surveyName = req.params.name;
        const survey = await Survey.find({name: surveyName});
        if(!survey) {
            return res.status(404).json({ success: "false", message: 'Survey not found' });
        }
        else{
            return res.status(201).json({ success: "true", data: survey });
        }
    } catch (error) {
        return res.status(400).json({ success: "false", message: error.message });
    }
}

exports.getAllSurvey = async (req, res) => {
    try {
        const survey = await Survey.find();
        if(!survey) {
            return res.status(404).json({ success: "false", message: 'Survey not found' });
        }
        else{
            return res.status(201).json({ success: "true", data: survey });
        }
    } catch (error) {
        return res.status(400).json({ success: "false", message: error.message });
    }
}

exports.updateSurvey = async (req, res) => {
    try {
        const oldName = req.params.name;
        const survey = await Survey.findOneAndUpdate({name: oldName}, req.body, {new: true});
        if(!survey) {
            return res.status(404).json({ success: "false", message: 'Survey not found' });
        }
        else{
            return res.status(201).json({ success: "true", message: 'Survey updated successfully' });
        }
    } catch (error) {
        return res.status(400).json({ success: "false", message: error.message });
    }
}