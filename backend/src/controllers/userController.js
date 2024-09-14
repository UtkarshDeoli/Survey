const User = require('../models/user')

exports.addUsers = async (req, res) => {
    try {
        console.log("add user Request")
        console.log(req.body)

        const user = new User(req.body);
        const result = await user.save();

        return res.status(201).json({ success: true, message: "Users created successfully", data: result });
    } catch (error) {
        console.error("Error adding users:", error);
        return res.status(400).json({ success: false, message: "Something went wrong" });
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

exports.getUser = async (req, res) => {
    try {
        console.log("get single user hitting")
        const _id = req.query.userId;
        console.log(_id)
        const user = await User.findOne({ _id:_id });
        console.log(user)
        return res.status(200).json({ success: true, data: user })
    }
    catch (error) {
        return res.status(400).json({ success: false, message: 'something went wrong' })
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        let filter = req.query.filter || "";
        let created_by = req.query.created_by;

        const validRoles = ['Admin', 'Booth Karyakarta', 'Survey Collector', 'Support Executive', 'Survey Manager'];

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