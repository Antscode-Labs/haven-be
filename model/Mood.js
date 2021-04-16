const mongoose = require('mongoose')

const moodSchema = new mongoose.Schema({
    mood:{
        type : Number,
        required: true,
        max : 1024,
        min : 2
    },
    trigger:{
        type : String,
        //required: true,
        max : 1024,
        //min : 2
    },
    belief:{
        type : String,
        //required: true,
        max : 1024,
       // min : 2
    },
    newBelief:{
        type : String,
        //required: true,
        max : 1024,
       // min : 2
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

module.exports = mongoose.model('moods' , moodSchema)

