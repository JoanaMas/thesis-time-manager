import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
    error: string;
}

const initialState: InitialState = {
    error: '',
};

export const errorSlice = createSlice({
    name: 'error',
    initialState,
  
    reducers: {
  
      changeErrorMessage: (state, action: PayloadAction<string>) => {
        state.error = action.payload;
      },
  
    },
  });
  
  export const { changeErrorMessage } = errorSlice.actions;
  
  export default errorSlice.reducer;
  