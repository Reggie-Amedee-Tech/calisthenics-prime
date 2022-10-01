import { configureStore } from '@reduxjs/toolkit'
import workoutRegimenSliceReducer from '../features/GetWorkoutRegimens.js'
import userReducer from '../features/user/userSlice'

const store = configureStore({
    reducer: {
        getWorkoutRegimens: workoutRegimenSliceReducer,
        user: userReducer
    }
})

export default store