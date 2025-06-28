import { createSlice } from '@reduxjs/toolkit';
import { api } from '@/services/api';

const initialState = {
    list: [],
};

const roundsSlice = createSlice({
    name: 'rounds',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(api.endpoints.getRounds.matchFulfilled, (state, { payload }) => {
                state.list = payload;
            })
            .addMatcher(api.endpoints.createRound.matchFulfilled, (state, { payload }) => {
                state.list.push(payload);
            });
    },
});

export default roundsSlice.reducer;