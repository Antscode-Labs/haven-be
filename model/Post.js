const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    entry:{
        type : String,
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

module.exports = mongoose.model('post' , postSchema)

