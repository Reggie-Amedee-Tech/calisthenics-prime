import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    workoutRegimens: [],
    error: ''
    
}


export const getWorkoutRegimens = createAsyncThunk('workoutRegimen/getWorkoutRegimens', async () => {
    const res = await axios.get('http://localhost:5003/api/regimen/workoutRegimens')
    .then(res => {
        return res.data.map(exercise => exercise)
    })
    .catch(err => {
        console.log(err.message)
    })
    return res
})

const workoutRegimenSliceReducer = createSlice({
    name: 'workoutRegimen',
    initialState,
    extraReducers: builder =>  {
        builder.addCase(getWorkoutRegimens.pending, state => {
            state.loading = true
        })
        builder.addCase(getWorkoutRegimens.fulfilled, (state, action) => {
            state.loading = false
            state.workoutRegimens = action.payload
        })
        builder.addCase(getWorkoutRegimens.rejected, (state, action) => {
            state.loading = false
            state.workoutRegimens = []
            state.error = action.error.message
        })
    }
    
})

export default workoutRegimenSliceReducer.reducer

