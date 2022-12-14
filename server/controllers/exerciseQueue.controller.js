const exerciseQueue = require('../models/exerciseQueueSchema')
const jwt = require('jsonwebtoken')

module.exports.createExersizeQueue = (request,response) => {
    const { workoutRegimen, workouts, completionTime } = request.body
    const decodedJwt = jwt.decode(request.cookies.RANDOM_TOKEN, {complete: true})
    const userId = decodedJwt.payload.userId
    exerciseQueue.create({
        workoutRegimen,
        workouts,
        completionTime,
        createdBy: userId
    })
    .then(res => response.json(res))
    .catch(err => response.json(err))
}

module.exports.getRegimens = (request,response) => {
    const decodedJwt = jwt.decode(request.cookies.RANDOM_TOKEN, {complete: true})
    const userId = decodedJwt.payload.userId
    exerciseQueue.find({createdBy: userId})
    .then(res => response.status(200).json(res))
    .catch(err => response.status(400).json({message: err.message}))
}

module.exports.getOneRegimen = (request, response) => {
    exerciseQueue.findOne({_id: request.params.id})
    .then(res => response.status(200).json(res))
    .catch(err => response.status(400).json(err))
}

module.exports.updateRegimens = (request, response) => {
    exerciseQueue.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
    .then(res => response.status(200).json(res))
    .catch(err => response.status(400).json(err))
}

module.exports.deleteWorkout = (request, response) => {
    exerciseQueue.deleteOne({_id: request.params.id})
    .then(res => console.log('Regimen Successfully deleted!'))
    .catch(err => response.status(400).json({message: err.message}))
}

