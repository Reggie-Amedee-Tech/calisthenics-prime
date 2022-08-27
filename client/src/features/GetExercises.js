import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    exercises: [],
    error: ''
    
}


export const getExercises = createAsyncThunk('exercise/getExercises', async () => {
    const res = await axios.get('http://localhost:5003/api/allExercises')
    .then(res => {
        return res.data.map(exercise => exercise)
    })
    .catch(err => {
        console.log(err.message)
    })
    return res
})

const exerciseSliceReducer = createSlice({
    name: 'exercise',
    initialState,
    extraReducers: builder =>  {
        builder.addCase(getExercises.pending, state => {
            state.loading = true
        })
        builder.addCase(getExercises.fulfilled, (state, action) => {
            state.loading = false
            state.exercises = action.payload
        })
        builder.addCase(getExercises.rejected, (state, action) => {
            state.loading = false
            state.exercises = []
            state.error = action.error.message
        })
    }
    
})

export default exerciseSliceReducer.reducer