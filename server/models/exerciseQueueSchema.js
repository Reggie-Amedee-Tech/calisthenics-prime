const mongoose = require('mongoose')

const exerciseQueue = new mongoose.Schema({
    workoutRegimen: {
        type: String,
        required: true
    },
    workouts: {
        type: Array
    },
    completionTime: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model('exerciseQueue', exerciseQueue)