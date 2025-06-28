import { createSlice } from '@reduxjs/toolkit';
import { api } from '@/services/api';

const initialState = {
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.token = null;
            if (typeof window !== 'undefined') {
                localStorage.removeItem('token');
            }
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            api.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                state.token = payload.token;
                if (typeof window !== 'undefined') {
                    localStorage.setItem('token', payload.token);
                }
            }
        );
    },
});

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;