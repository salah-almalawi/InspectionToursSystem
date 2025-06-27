import { createSlice } from '@reduxjs/toolkit';
import { api } from '@/services/api';

const initialState = {
    token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
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

export const { logout } = authSlice.actions;
export default authSlice.reducer;