import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
import managersReducer from "@/features/managers/managersSlice";
import roundsReducer from "@/features/rounds/roundsSlice";
import { api } from "@/services/api";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        managers: managersReducer,
        rounds: roundsReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;