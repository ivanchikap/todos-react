import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from '../../helpers/api'

export const getUsersAsync = createAsyncThunk('users/fetchUsers', api.getLoginData)

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: null,
        loading: false,
        error: null,
        isAuthenticated: JSON.parse(sessionStorage.getItem('logined'))
    },
    reducers: {
        setIsAuthenticated: (state, action) => {
            console.log(action)
            state.isAuthenticated = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsersAsync.pending, (state) => {
                state.loading = true
            })
            .addCase(getUsersAsync.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
                state.error = null
            })
            .addCase(getUsersAsync.rejected, (state, action) => {
                state.loading = false
                state.data = null
                state.error = action.error.message
            })
    }
})

export const {setIsAuthenticated} = usersSlice.actions

export default usersSlice.reducer
