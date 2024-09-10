const Survey = require('../models/survey');


exports.saveSurvey = async (req, res) => {
    try {
        const { name, headerText, accessPin, backgroundLocationCapture } = req.body;

        let welcomeImage, thanksImage;
        if (req.files && req.files.welcomeImage) {
            welcomeImage = req.files.welcomeImage.data;
        }

        if (req.files && req.files.thanksImage) {
            thanksImage = req.files.thanksImage.data;
        }

        const survey = new Survey({ name, headerText, accessPin, backgroundLocationCapture, welcomeImage, thanksImage });
        await survey.save();

        return res.status(201).json({ success: true, message: 'Survey created successfully' });

    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
};


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
        const { name, headerText, accessPin, backgroundLocationCapture } = req.body;

        let updateFields = { name, headerText, accessPin, backgroundLocationCapture };

        if (req.files && req.files.welcomeImage) {
            updateFields.welcomeImage = req.files.welcomeImage.data;
        }

        if (req.files && req.files.thanksImage) {
            updateFields.thanksImage = req.files.thanksImage.data;
        }

        const result = await Survey.findOneAndUpdate({ name: oldName }, updateFields, { new: true });

        if (!result) {
            return res.status(404).json({ success: false, message: 'Survey not found' });
        }

        return res.status(200).json({ success: true, message: 'Survey updated successfully', survey: result });

    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
};