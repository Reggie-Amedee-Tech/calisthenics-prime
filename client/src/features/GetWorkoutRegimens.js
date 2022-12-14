import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const userId = localStorage.getItem('id') ? localStorage.getItem('id') : null

const initialState = {
    loading: false,
    workoutRegimens: [],
    error: '',
    userInfo: null
}

export const getWorkoutRegimens = createAsyncThunk('workoutRegimen/getWorkoutRegimens', async () => {
    const res = await axios.get('https://shielded-citadel-69871.herokuapp.com/api/regimen/workoutRegimens', {withCredentials: true})
    .then(res => {
        return res.data.map(user => user)
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
            state.error = null
        })
        builder.addCase(getWorkoutRegimens.fulfilled, (state, action) => {
            state.loading = false
            state.workoutRegimens = action.payload
        })
        builder.addCase(getWorkoutRegimens.rejected, (state, action) => {
            state.loading = false
            state.workoutRegimens = null
            state.error = action.error.message
        })
    }
    
})

export default workoutRegimenSliceReducer.reducer

