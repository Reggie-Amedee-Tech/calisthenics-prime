const ExerciseQueueController = require('../controllers/exerciseQueue.controller')

module.exports = function(app) {
    app.get('/api/regimen/workoutRegimens', ExerciseQueueController.getRegimens)
    app.post('/api/regimen/exerciseQueueCreate', ExerciseQueueController.createExersizeQueue)
    
    
}

