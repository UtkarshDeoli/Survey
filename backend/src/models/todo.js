const mongoose  = require('mongoose')
const todoSchema = new mongoose.Schema({    
    title:{
        type:String,
        required:true
    },
    due_date:{
        type:Date,
        required:true
    },
    activity:{
        type:String,
        enum:['Call','Task'],
        required:true
    },
    assigned_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User99'
    },
    assigned_to:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User99'
        }
    ],
    status:{
        type:String,
        enum:['Open','Rescheduled','Cancelled','Completed'],
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    reminder:{
        type:Date,
    }

},{timestamps:true})

const Todos = mongoose.model('Todos99',todoSchema);
module.exports = Todos;