const ExerciseQueueController = require('../controllers/exerciseQueue.controller')
const {authenticate} = require('../auth')

module.exports = function(app) {
    app.get('/api/regimen/workoutRegimens', authenticate, ExerciseQueueController.getRegimens)
    app.get('/api/regimen/workoutRegimens/:id', ExerciseQueueController.getOneRegimen)
    app.post('/api/regimen/exerciseQueueCreate', authenticate, ExerciseQueueController.createExersizeQueue)
    app.put('/api/regimen/:id/exerciseQueueUpdate', authenticate, ExerciseQueueController.updateRegimens)
    app.delete('/api/regimen/:id/deleteExercise', ExerciseQueueController.deleteWorkout) 
}

