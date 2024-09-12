const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const surveySchema = new Schema({
    created_by: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    header_text: {
        type: String,
    },
    welcome_image: {
        type: Buffer,
    }, 
    thankyou_image: {
        type: Buffer,
    },
    thank_time_duration: {
        type: Number,
        required: false,
    },
    access_pin: {
        type: String,
    },
    background_location_capture: {
        type: Number,
        required: false,
    },
    questions: {
        type: Schema.Types.Mixed
    }
});

const Survey = Mongoose.model('Survey99', surveySchema);

module.exports = Survey;