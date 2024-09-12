const Survey = require('../models/survey');


exports.saveSurvey = async (req, res) => {
    try {
        const {created_by, name, header_text, access_pin, background_location_capture } = req.body;
        console.log(req.files)
        let welcome_image, thankyou_image;
        if (req.files && req.files.welcome_image) {
            welcome_image = req.files.welcome_image.data;
        }

        if (req.files && req.files.thankyou_image) {
            thankyou_image = req.files.thankyou_image.data;
        }

        const survey = new Survey({ created_by, name, header_text, access_pin, background_location_capture, welcome_image, thankyou_image });
        await survey.save();

        return res.status(201).json({ success: true, message: 'Survey created successfully' });

    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: error.message });
    }
};


exports.getSurvey = async (req, res) => {
    try {
        const id = req.query._id;
        const survey = await Survey.find({_id: id});
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
        console.log("route hitting")
        const created_by = req.query.created_by;
        const survey = await Survey.find({created_by});
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
        const id = req.query._id;
        const {createdBy, name, headerText, accessPin, backgroundLocationCapture } = req.body;

        let updateFields = { name, headerText, accessPin, backgroundLocationCapture };

        if (req.files && req.files.welcomeImage) {
            updateFields.welcomeImage = req.files.welcomeImage.data;
        }

        if (req.files && req.files.thanksImage) {
            updateFields.thanksImage = req.files.thanksImage.data;
        }

        const result = await Survey.findOneAndUpdate({ _id: id, createdBy}, updateFields, { new: true });

        if (!result) {
            return res.status(404).json({ success: false, message: 'Survey not found' });
        }

        return res.status(200).json({ success: true, message: 'Survey updated successfully', survey: result });

    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
};