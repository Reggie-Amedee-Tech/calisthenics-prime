const ExerciseQueueController = require('../controllers/exerciseQueue.controller')

module.exports = function(app) {
    app.get('/api/regimen/workoutRegimens', ExerciseQueueController.getRegimens)
    app.get('/api/regimen/workoutRegimens/:id', ExerciseQueueController.getOneRegimen)
    app.post('/api/regimen/exerciseQueueCreate', ExerciseQueueController.createExersizeQueue)
    app.put('/api/regimen/:id/exerciseQueueUpdate', ExerciseQueueController.updateRegimens)
    app.delete('/api/regimen/:id/deleteExercise', ExerciseQueueController.deleteWorkout) 
}

