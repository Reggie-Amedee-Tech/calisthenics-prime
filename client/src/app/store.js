import { configureStore } from '@reduxjs/toolkit'
import exerciseSliceReducer from '../features/GetExercises'
import workoutRegimenSliceReducer from '../features/GetWorkoutRegimens.js'

const store = configureStore({
    reducer: {
        getExercise: exerciseSliceReducer,
        getWorkoutRegimens: workoutRegimenSliceReducer
    }
})

export default store