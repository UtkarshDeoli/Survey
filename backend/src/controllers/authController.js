const express = require('express');
const router = express.Router();
require('dotenv').config();
const User = require('../models/user');
const bcrypt = require("bcrypt");   
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;



exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Match Password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        // JWT token
        const token = jwt.sign(
            {
            id: user._id,// i have used mongoDB _id, and removed uuid 
            email: user.email,
            role: user.role
            },
            JWT_SECRET
        );

        // Response sending back the token too for frontend to store
        res.status(200).json({ message: "Login successful", token: token}

        );
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error: error });
    }
};



exports.signup = async (req, res) => {
    try {
        const { username, name, email, password, phoneNumber, role, autoAssignSurvey, veiwOwnCollectData, preventDataDownload, preventDataAnalytics, removeAudioRecordingAccess, viewPendingData, assignedSurvey } = req.body;
        // I have added all the felids from the user schema, feel free to add or remove any feilds as per your requirement
        bcrypt.hash(password, 10).then(async (hash) => {
            const newUser = new User({
                username,
                name,
                email,
                password: hash,
                phoneNumber,
                role,
                autoAssignSurvey,
                veiwOwnCollectData,
                preventDataDownload,
                preventDataAnalytics,
                removeAudioRecordingAccess,
                viewPendingData,
                assignedSurvey
            });

            await newUser.save();
            res.status(201).json({ message: "User created successfully" });
        }).catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error while hashing password", error: error });
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error: error });
    }
};
