const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = new Schema({
    createdBy: {
        type: String,
    },
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {     
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: false
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
    assignedSurvey: [String],
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
})
userSchema.plugin(uniqueValidator);
const User = Mongoose.model('User99', userSchema);

module.exports = User;