const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    full_name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    age: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 2
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    mobile: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    isFirstLogin:{
        type: Boolean,
    }
});


module.exports = mongoose.model('users', userSchema)