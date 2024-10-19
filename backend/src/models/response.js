const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseSchema = new Schema(
    {
        survey_id: {
            type: Schema.Types.ObjectId,
            ref: 'Survey99'
        },
        user_id:{
            type: Schema.Types.ObjectId,
            ref: 'User99'
        },
        family_id:{
            type: Schema.Types.ObjectId,
            ref: 'Family99'
        },
        name:{
            type:String,
            required:true
        },
        ac_no:{
            type:String,
            required:true
        },
        booth_no:{
            type:String,
            required:true
        },
        house_no:{
            type:String,
            required:true
        },
        last_name:{
            type:String,
            required:true
        },
        response: {
            type: Schema.Types.Mixed
        },
        other_details:{
            type: Schema.Types.Mixed
        }
    },
    { strict: false ,timestamps: true}
);

const Response = mongoose.model('Response99', responseSchema);

module.exports = Response;