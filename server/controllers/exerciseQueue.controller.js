const exerciseQueue = require('../models/exerciseQueueSchema')

module.exports.createExersizeQueue = (request,response) => {
    const { workoutRegimen } = request.body
    exerciseQueue.create({
        workoutRegimen
    })
    .then(res => response.json(res))
    .catch(err => response.status(400).json(err))
}

module.exports.getRegimens = (request,response) => {
    exerciseQueue.find()
    .then(res => response.status(200).json(res))
    .catch(err => response.status(400).json({message: err.message}))
}

