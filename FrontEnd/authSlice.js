import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        clearUser: (state) => {
            state.user = null;
            state.token = null;
        }
    }
});

export const { setUser, clearUser } = authSlice.actions;

export const login = (credentials) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
        dispatch(setUser({ user: response.data.user, token: response.data.token }));
    } catch (error) {
        console.error("Login failed:", error.response?.data?.message || error.message);
     
    }
};

export default authSlice.reducer;
