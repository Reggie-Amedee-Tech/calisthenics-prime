const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    exerciseName: {
        required: true,
        type: String
    },
    exercise: {
        required: true,
        type: String
    },
    difficulty: {
        required: true,
        type: Number
    },
    completionTime: {
        type: Number
    },
    reps: {
        types: Number
    }
}, {timestamps: true})

module.exports = mongoose.model('exercise', exerciseSchema)

