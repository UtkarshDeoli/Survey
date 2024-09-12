const Responses = require('../models/response');

exports.saveResponse = async (req, res) => {
    try {
        const { Response } = req.body;
        const response = new Responses({ Response });
        await response.save();
        return res.status(201).json({ success: true, message: 'Response created successfully' });
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
}

exports.getCount = async (req, res) => {
    try {
        const surveyId = req.query.surveyId;
        const response = await Responses.find({surveyId});
        if(!response) {
            return res.status(404).json({ success: "false", message: 'Response not found' });
        }
        else{
            return res.status(201).json({ success: "true", data: response.length });
        }
    } catch (error) {
        return res.status(400).json({ success: "false", message: error.message });
    }
}

exports.getResponse = async (req, res) => {
    try {
        const surveyId = req.query.surveyId;
        const response = await Responses.find({surveyId});
        if(!response) {
            return res.status(404).json({ success: "false", message: 'Response not found' });
        }
        else{
            return res.status(201).json({ success: "true", data: response });
        }
    } catch (error) {
        return res.status(400).json({ success: "false", message: error.message });
    }
}