
import { createSlice } from '@reduxjs/toolkit'
import { registerUser, loginUser } from './userAction'

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

const id = localStorage.getItem('id') ? localStorage.getItem('id') : null

const initialState = {
    loading: false,
    userInfo: null,
    userToken: null,
    id: null,
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
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken') 
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
            state.success = false
        }
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.userToken
            state.success = true
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        }
    }
})

export const { logout } = userSlice.actions

export default userSlice.reducer