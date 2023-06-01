import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
    pages: number;
}

const initialState: InitialState = {
    pages: 0,
};

export const pagesSlice = createSlice({
    name: 'pages',
    initialState,
  
    reducers: {
  
      setPagesToWrite: (state, action: PayloadAction<number>) => {
        state.pages = action.payload;
      },
  
    },
  });
  
  export const { setPagesToWrite } = pagesSlice.actions;
  
  export default pagesSlice.reducer;
  
