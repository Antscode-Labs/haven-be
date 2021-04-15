const mongoose = require('mongoose')

const medicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 1024,
        min: 2
    },
    quantity: {
        type: Number,
        required: true,
        max: 1024,
        min: 2
    },
    dose: {
        type: Number,
        required: true,
        max: 1024,
        min: 2
    },
    frequency: {
        type: String,
        required: true,
        max: 1024,
        min: 2
    },
    usage: {
        type: String,
        required: true,
        max: 1024,
        min: 2
    },
    when: {
        type: String,
        required: true,
        max: 1024,
        min: 2
    },
    user: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('medication', medicationSchema)

