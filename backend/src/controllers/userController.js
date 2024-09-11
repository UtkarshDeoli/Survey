const User = require('../models/user')

exports.addUser = async(req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        return res.status(201).json({success: true, message: "user created successfully"})
    } catch (error) {
        return res.status(400).json({success: false, message: 'something went wrong'})
    }
}

exports.updateUser = async(req, res) => {
    try {
        const username = req.query.username
        const user = await User.findOneAndUpdate({username: username})
    } catch (error) {
        
    }
}