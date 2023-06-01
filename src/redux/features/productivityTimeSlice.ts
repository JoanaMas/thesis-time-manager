import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
    productivityTime: number;
}

const initialState: InitialState = {
    productivityTime: 0,
};

export const productivityTimeSlice = createSlice({
    name: 'productivityTime',
    initialState,
  
    reducers: {
  
      setProductiveTime: (state, action: PayloadAction<number>) => {
        state.productivityTime = action.payload;
      },
  
    },
  });
  
  export const { setProductiveTime } = productivityTimeSlice.actions;
  
  export default productivityTimeSlice.reducer;
  