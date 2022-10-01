import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

export const registerUser = createAsyncThunk('user/register', async ({ userName, email, password }, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        await axios.post('http://localhost:5003/register', {
            userName,
            email,
            password
        }, config)
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
})


// export const login = createAsyncThunk('login/loginUser', async ({ email, password }, { rejectWithValue }) => {
//     try {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         }
//         const { data } = await axios.post('http://localhost:5003/login', {
//             email,
//             password
//         }, config)

//         localStorage.setItem('userToken', data.userToken)
//         return data
//     } catch (error) {
//         if (error.response && error.response.data.message) {
//             return rejectWithValue(error.response.data.message)
//         } else {
//             return rejectWithValue(error.message)
//         }
//     }
// })

// const loginSliceReducer = createSlice({
//     name: "login",
//     initialState,
//     extraReducers: builder => {
//         builder.addCase(login.pending, state => {
//             state.loading = true
//         })
//         builder.addCase(login.fulfilled, (state, action) => {
//             state.loading = false
//             state.user = action.payload
//         })
//         builder.addCase(login.rejected, (state, action) => {
//             state.loading = false
//             state.user = []
//             state.error = action.error.message
//         })
//     }
// })
