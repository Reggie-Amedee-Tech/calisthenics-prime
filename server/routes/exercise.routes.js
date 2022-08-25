const ExerciseController = require('../controllers/exercise.controller')

module.exports = function(app) {
    app.get('/api/allExercises', ExerciseController.getExercise)
    app.get('/api/:id', ExerciseController.getOneExercise)
    app.post('/api/createExercise', ExerciseController.createExercise)
    app.put('/api/:id/updateExercise', ExerciseController.updateExercise)
    app.delete('/api/:id/delete', ExerciseController.deleteExercise)
}