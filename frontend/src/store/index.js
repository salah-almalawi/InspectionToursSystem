import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // RTK Query middleware will be added here
});

export default store;