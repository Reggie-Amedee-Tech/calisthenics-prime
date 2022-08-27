const exerciseContoller = require('../models/exerciseConfig')

module.exports.createExercise = (req,res) => {
    const {exerciseName, exerciseDescription, difficulty, completionTime, reps} = req.body
    exerciseContoller.create({
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
    exerciseContoller.find()
    .then(res => response.status(200).json(res))
    .catch(err => response.status(400).json({message: err.message}))
}

module.exports.getOneExercise = (request, response) => {
    exerciseContoller.findOne({_id: request.params.id})
    .then(res => response.status(200).json(res))
    .catch(err => response.status(400).json({message: err.message}))
}

module.exports.updateExercise = (request,response) => {
    exerciseContoller.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
    .then(res => response.json(res))
    .catch(err => response.status(500).json({message: err.message}))
}

module.exports.deleteExercise = (request, response) => {
    exerciseContoller.deleteOne({_id: request.params.id})
    .then(res => console.log('Exercise successfully deleted'))
    .catch(err => response.status(400).json({message: err.message}))
}


