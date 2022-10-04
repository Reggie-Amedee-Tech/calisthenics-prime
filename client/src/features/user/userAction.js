import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

const instance = axios.create({
    withCredentials: true
});

export const registerUser = createAsyncThunk('user/register', async ({ userName, email, password }, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
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


export const loginUser = createAsyncThunk('user/login', async ({ email, password }, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                
            },
        }
        const { data } = await instance.post('http://localhost:5003/login', {
            email,
            password
        } , config)

        localStorage.setItem('userToken', data.token)
        localStorage.setItem('email', data.email)
        localStorage.setItem('id', data.id)
        return data
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
})

export const getUserDetails = createAsyncThunk(
    'user/getUserDetails',
    async (arg, { getState, rejectWithValue }) => {
      try {
        const { user } = getState()
  
        const config = {
          headers: {
            Authorization: `Bearer ${user.userToken}`,
          },
        }
        const { data } = await instance.get(`/api/user/profile`, config)
        return data
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )
