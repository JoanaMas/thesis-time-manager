import { configureStore } from '@reduxjs/toolkit';
// Slices
import errorReducer from './features/errorSlice';

// STATE MANAGEMENT
export const store = configureStore({
    reducer: {
        error: errorReducer
    }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch