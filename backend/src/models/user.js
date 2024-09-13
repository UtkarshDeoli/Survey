const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = new Schema({
    created_by: {
        type: String,
        required: false
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
    phone_number: {
        type: Number,
        required: false
    },
    role: {
        type: String,
        enum: ['admin', 'booth_karyakarta', 'survey_collector', 'support_executive', 'survey_manager'],
        required: true
    },
    auto_assign_survey: {
        type: Boolean,
        default: false
    },
    veiw_own_collected_data: {
        type: Boolean,
        default: false
    },
    prevent_data_download: {
        type: Boolean,
        default: false
    },
    prevent_data_analytics: {
        type: Boolean,
        default: false
    },
    prevent_spatial_report: {
        type: Boolean,
        default: false
    },
    remove_audio_recording_access: {
        type: Boolean,
        default: false
    },
    view_pending_data: {
        type: Boolean,
        default: false
    },
    assigned_survey: [String],
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
})
userSchema.plugin(uniqueValidator);
const User = Mongoose.model('User99', userSchema);

module.exports = User;