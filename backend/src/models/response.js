const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseSchema = new Schema(
    {},
    { strict: false }
);

const Response = mongoose.model('Response99', responseSchema);

module.exports = Response;