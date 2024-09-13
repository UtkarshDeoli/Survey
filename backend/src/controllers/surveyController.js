const Survey = require('../models/survey');


exports.saveSurvey = async (req, res) => {
    try {
        const { created_by, name, header_text, access_pin, background_location_capture } = req.body;
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

exports.deleteSurvey = async (req, res) => {
    try {
        console.log("delete route hitting")
        const id = req.query._id;
        const created_by = req.query.created_by;

        const survey = await Survey.findOneAndDelete({ _id: id, created_by });

        if (!survey) {
            return res.status(404).json({ success: false, message: 'Survey not found' });
        }

        return res.status(200).json({ success: true, message: 'Survey deleted successfully' });

    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }   
}


exports.getSurvey = async (req, res) => {
    try {
        const id = req.query._id;
        const survey = await Survey.find({ _id: id });
        if (!survey) {
            return res.status(404).json({ success: "false", message: 'Survey not found' });
        }
        else {
            return res.status(201).json({ success: "true", data: survey });
        }
    } catch (error) {
        return res.status(400).json({ success: "false", message: error.message });
    }
}

exports.getAllSurvey = async (req, res) => {
    try {
        console.log("route hitting");

        const { filter = '', page = 1, limit = 10, sortBy = 'name', sortOrder = 'asc', created_by, published } = req.query;

        const order = sortOrder === 'asc' ? 1 : -1;
        const skip = (page - 1) * limit;
        const sortOptions = {};

        if (sortBy === 'name') {
            sortOptions.name = order;
        } else if (sortBy === 'createdAt') {
            sortOptions.createdAt = order;
        }

        const searchConditions = [{ name: { $regex: filter, $options: 'i' } }];
        const findOptions = { $and: searchConditions };

        if (created_by) {
            findOptions.created_by = created_by;
        }

        if (published) {
            findOptions.published = published;
        }

        const total = await Survey.countDocuments(findOptions);
        const survey = await Survey.find(findOptions)
            .skip(skip)
            .limit(Number(limit))
            .sort(sortOptions)
            .collation({ locale: 'en', strength: 2 }); 

        if (survey.length === 0) {
            return res.status(404).json({ success: "false", message: 'No surveys found' });
        }

        return res.status(200).json({
            success: "true",
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            survey
        });
    } catch (error) {
        return res.status(400).json({ success: "false", message: error.message });
    }
};


exports.updateSurvey = async (req, res) => {
    try {
        const id = req.query._id;
        const { created_by, name, headerText, accessPin, backgroundLocationCapture } = req.body;

        let updateFields = { name, headerText, accessPin, backgroundLocationCapture };

        if (req.files && req.files.welcomeImage) {
            updateFields.welcomeImage = req.files.welcomeImage.data;
        }

        if (req.files && req.files.thanksImage) {
            updateFields.thanksImage = req.files.thanksImage.data;
        }

        const result = await Survey.findOneAndUpdate({ _id: id, created_by }, updateFields, { new: true });

        if (!result) {
            return res.status(404).json({ success: false, message: 'Survey not found' });
        }

        return res.status(200).json({ success: true, message: 'Survey updated successfully', survey: result });

    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
};