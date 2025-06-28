import { createSlice } from '@reduxjs/toolkit';
import { api } from '@/services/api';

const initialState = {
    list: [],
};

const managersSlice = createSlice({
    name: 'managers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(api.endpoints.getManagers.matchFulfilled, (state, { payload }) => {
                state.list = payload;
            })
            .addMatcher(api.endpoints.createManager.matchFulfilled, (state, { payload }) => {
                state.list.push(payload);
            })
            .addMatcher(api.endpoints.updateManager.matchFulfilled, (state, { payload }) => {
                const index = state.list.findIndex((m) => m._id === payload._id);
                if (index !== -1) {
                    state.list[index] = payload;
                }
            })
            .addMatcher(api.endpoints.deleteManager.matchFulfilled, (state, action) => {
                const id = action.meta.arg;
                state.list = state.list.filter((m) => m._id !== id);
            });
    },
});

export default managersSlice.reducer;