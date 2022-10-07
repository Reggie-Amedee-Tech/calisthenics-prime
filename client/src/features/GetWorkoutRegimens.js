import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import axios from 'axios'

const userId = localStorage.getItem('id') ? localStorage.getItem('id') : null

const initialState = {
    loading: false,
    workoutRegimens: [],
    error: '',
    userInfo: null
    
}



export const getWorkoutRegimens = createAsyncThunk('workoutRegimen/getWorkoutRegimens', async () => {
    const res = await axios.get('http://localhost:3000/api/regimen/workoutRegimens', {withCredentials: true})
    .then(res => {
        return res.data.filter(user => user.createdBy === userId)
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

