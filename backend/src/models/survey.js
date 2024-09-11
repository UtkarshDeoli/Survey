const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const surveySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    headerText: {
        type: String,
    },
    welcomeImage: {
        type: Buffer,
    }, 
    thankYouImage: {
        type: Buffer,
    },
    thankTimeDuration: {
        type: Number,
        required: false,
    },
    accessPin: {
        type: String,
    },
    backgroundLocationCapture: {
        type: Number,
        required: false,
    },
    questions: {
        type: Schema.Types.Mixed
    }
});

const Survey = Mongoose.model('Survey99', surveySchema);

module.exports = Survey;