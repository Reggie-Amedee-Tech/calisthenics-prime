const ExerciseQueueController = require('../controllers/exerciseQueue.controller')
const auth = require('../auth')

module.exports = function(app) {
    app.get('/api/regimen/workoutRegimens', ExerciseQueueController.getRegimens)
    app.get('/api/regimen/workoutRegimens/:id', ExerciseQueueController.getOneRegimen)
    app.post('/api/regimen/exerciseQueueCreate', auth, ExerciseQueueController.createExersizeQueue)
    app.put('/api/regimen/:id/exerciseQueueUpdate', ExerciseQueueController.updateRegimens)
    app.delete('/api/regimen/:id/deleteExercise', ExerciseQueueController.deleteWorkout) 
}

