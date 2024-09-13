const User = require('../models/user')

exports.addUsers = async (req, res) => {
    try {
        console.log("add user REq")
        console.log(req.body)
        
        const result = await User.insertMany(req.body);

        return res.status(201).json({ success: true, message: "user created successfully" })
    } catch (error) {
        return res.status(400).json({ success: false, message: 'something went wrong' })
    }
}


exports.updateUser = async (req, res) => {
    try {
        const user = req.body
        if (!user || !user.username) {
            return res.status(400).json({ error: 'Username is required' });
        }
        const dbRes = await User.findOneAndUpdate({ username: user.username }, { $set: user }, { new: true, runValidators: true });
        return res.status(200).json({ success: true, message: "User updated successfully" })
    } catch (error) {
        return res.status(400).json({ success: false, message: 'something went wrong' })
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        let filter = req.query.filter || "";
        let created_by = req.query.created_by;

        const validRoles = ['admin', 'booth_karyakarta', 'survey_collector', 'support_executive', 'survey_manager'];

        const searchConditions = [];
        searchConditions.push({ name: { $regex: filter, $options: 'i' } });
        searchConditions.push({ username: { $regex: filter, $options: 'i' } });
        if (validRoles.includes(filter)) {
            searchConditions.push({ role: filter });
        }

        const users = await User.find({
            $or: searchConditions,
            created_by: created_by
        });
        return res.status(200).json({ success: true, data: users })
    } catch (error) {
        return res.status(400).json({ success: false, message: 'something went wrong' })
    }
}