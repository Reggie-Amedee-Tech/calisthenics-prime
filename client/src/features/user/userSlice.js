// userSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { registerUser, loginUser } from './userAction'

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

const initialState = {
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
    success: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true 
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    },

    name: "login",
    initialState,
    reducers: {},
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [loginUser.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.userToken
        },
        [loginUser.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        }
    }
})

export default userSlice.reducer