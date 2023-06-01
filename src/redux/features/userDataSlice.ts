import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// Interfaces
import { IUserData } from './interfaces/UserDataInterface';

interface InitialState {
    userData: IUserData;
}

const initialState: InitialState = {
    userData: {
        name: 'Joana',
        totalPages: 500,
        pagesCompleted: 50,
        hoursForSleep: 7,
        freeHours: 9,
        dueDate: new Date(2023, 12, 3),
        productivityPeak: 'morning',
        weekendWork: 'on'
    }
};

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,

    reducers: {
        setUserData: (state, action: PayloadAction<IUserData>) => {
            state.userData = action.payload;
        }
    }
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
