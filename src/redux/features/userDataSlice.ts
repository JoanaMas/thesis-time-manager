import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserData {
    name: string;
    totalPages: number;
    pagesWritten: number;
    hoursForSleep: number;
    freeHours: number;
    dueDate: Date;
}

interface InitialState {
    userData: UserData;
}

const initialState: InitialState = {
    userData: {
        name: 'Joana',
        totalPages: 550,
        pagesWritten: 300,
        hoursForSleep: 7,
        freeHours: 5,
        dueDate: new Date(2023, 6, 1)
    }
};

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,

    reducers: {
        setUserData: (state, action: PayloadAction<UserData>) => {
            state.userData = action.payload;
        }
    }
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
