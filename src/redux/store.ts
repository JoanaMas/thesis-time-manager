import { configureStore } from '@reduxjs/toolkit';
// Slices
import errorReducer from './features/errorSlice';
import userDataReducer from './features/userDataSlice';
import pagesReducer from './features/pagesSlice';
import productivityTimeReducer from './features/productivityTimeSlice';

// STATE MANAGEMENT
export const store = configureStore({
    reducer: {
        error: errorReducer,
        userData: userDataReducer,
        pages: pagesReducer,
        productivityTime: productivityTimeReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch