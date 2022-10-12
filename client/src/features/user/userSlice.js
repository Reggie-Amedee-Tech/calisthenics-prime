
import { createSlice } from '@reduxjs/toolkit'
import { getUserDetails, registerUser, loginUser } from './userAction'

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

    const email = localStorage.getItem('email')
    ? localStorage.getItem('email')
    : null

const userId = localStorage.getItem('id') ? localStorage.getItem('id') : null

const initialState = {
    loading: false,
    userInfo: null,
    userToken,
    userId,
    email,
    error: null,
    success: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken') 
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
            localStorage.removeItem('email')
            localStorage.removeItem('id')
        }
    },
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

        [loginUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.success = true
            state.userToken = payload.token
            state.userId = payload.id
            state.userEmail = payload.email
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [getUserDetails.pending]: (state) => {
            state.loading = true
        },
        [getUserDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
        },
        [getUserDetails.rejected]: (state, { payload }) => {
            state.loading = false
        },
    },
})

export const { logout } = userSlice.actions

export default userSlice.reducer