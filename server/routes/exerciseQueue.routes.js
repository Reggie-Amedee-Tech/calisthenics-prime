const ExerciseQueueController = require('../controllers/exerciseQueue.controller')
const auth = require('../auth')

module.exports = function(app) {
    app.get('/api/regimen/workoutRegimens', auth, ExerciseQueueController.getRegimens)
    app.get('/api/regimen/workoutRegimens/:id', auth, ExerciseQueueController.getOneRegimen)
    app.post('/api/regimen/exerciseQueueCreate',auth, ExerciseQueueController.createExersizeQueue)
    app.put('/api/regimen/:id/exerciseQueueUpdate',auth, ExerciseQueueController.updateRegimens)
    app.delete('/api/regimen/:id/deleteExercise',auth, ExerciseQueueController.deleteWorkout) 
}

