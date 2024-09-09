const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: Email,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'boothKaryakarta', 'surveyCollector', 'supportExecutive', 'surveyManager'],
        required: true
    },
    autoAssignSurvey: {
        type: Boolean,
        default: false
    },
    veiwOwnCollectData: {
        type: Boolean,
        default: false
    },
    preventDataDownload: {
        type: Boolean,
        default: false
    },
    preventDataAnalytics: {
        type: Boolean,
        default: false
    },
    removeAudioRecordingAccess: {
        type: Boolean,
        default: false
    },
    viewPendingData: {
        type: Boolean,
        default: false
    },
    assignedSurvey: [String]

})

const User = Mongoose.model('User99', userSchema);

module.exports = User;