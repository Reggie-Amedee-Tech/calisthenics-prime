const mongoose = require('mongoose')

const exerciseQueue = new mongoose.Schema({
    workoutRegimen: {
        type: String
    },
    workouts: {
        type: Array
    }
}, {timestamps: true})

module.exports = mongoose.model('exerciseQueue', exerciseQueue)