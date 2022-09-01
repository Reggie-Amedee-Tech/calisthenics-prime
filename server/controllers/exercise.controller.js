const exercise = require('../models/exerciseConfig')

module.exports.createExercise = (req,res) => {
    const {exerciseName, exerciseDescription, difficulty, completionTime, reps} = req.body
    exercise.create({
        exerciseName,
        exerciseDescription,
        difficulty,
        completionTime,
        reps
    })
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).send(err))
}

module.exports.getExercise = (request, response) => {
    exercise.find()
    .then(res => response.status(200).json(res))
    .catch(err => response.status(400).json({message: err.message}))
}

module.exports.getOneExercise = (request, response) => {
    exercise.findOne({_id: request.params.id})
    .then(res => response.status(200).json(res))
    .catch(err => response.status(400).json({message: err.message}))
}

module.exports.updateExercise = (request,response) => {
    exercise.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
    .then(res => response.json(res))
    .catch(err => response.status(500).json({message: err.message}))
}

module.exports.deleteExercise = (request, response) => {
    exercise.deleteOne({_id: request.params.id})
    .then(res => console.log('Exercise successfully deleted'))
    .catch(err => response.status(400).json({message: err.message}))
}


