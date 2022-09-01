import { configureStore } from '@reduxjs/toolkit'
import exerciseSliceReducer from '../features/GetExercises'

const store = configureStore({
    reducer: {
        getExercise: exerciseSliceReducer
    }
})

export default store