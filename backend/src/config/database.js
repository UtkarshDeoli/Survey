
const mongoose = require('mongoose');
const dotenv = require('dotenv');

async function connectDatabase() {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        });
}

module.exports = connectDatabase;