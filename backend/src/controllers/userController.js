const User = require('../models/user')

exports.addUsers = async(req, res) => {
    try {
        const users = req.body
        const dbRes=await User.insertMany(users);
        return res.status(201).json({success: true, message: "user created successfully"})
    } catch (error) {
        return res.status(400).json({success: false, message: 'something went wrong'})
    }
}


exports.updateUser = async(req, res) => {
    try {
        const user = req.body
        if (!user || !user.username) {
            return res.status(400).json({ error: 'Username is required' });
        }
        const dbRes = await User.findOneAndUpdate({username: user.username},{$set:user},{ new: true, runValidators: true });
        return res.status(200).json({success: true, message: "User updated successfully"})
    } catch (error) {
        return res.status(400).json({success: false, message: 'something went wrong'})
    }
}

exports.getAllUsers = async(req, res) => {
    try {
        let filter = req.query.filter || "";

        let createdBy = req.query.createdBy;
        const users = await User.find({$or: [
            {
              name: {
                $regex: filter,
              },
            },
            {
              username: {
                $regex: filter,
              },
            },
            {
              role: {
                $regex: filter,
              },
            },
          ],createdBy: createdBy});
        return res.status(200).json({success: true, data: users})
    } catch (error) {
        return res.status(400).json({success: false, message: 'something went wrong'})
    }
}