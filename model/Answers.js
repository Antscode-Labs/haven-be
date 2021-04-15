const mongoose = require('mongoose')

const answersSchema = new mongoose.Schema({
    entry:{
        type : Object,
        required: true,
        max : 1024,
        min : 2
    },
    user :{
        type : String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('answers' , answersSchema)

