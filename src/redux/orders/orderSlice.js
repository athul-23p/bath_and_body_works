import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
  shippingAddress: {},
  items:[],
  error:null,
  isLoading: false,
};


const orderSlice = createSlice({
    name:'orders',
    initialState,
    reducers:{
        setShippingAddress: (state,{payload}) => {
            state.shippingAddress=payload;
        }
    }
})

export const {setShippingAddress} = orderSlice.actions;
export default orderSlice.reducer;

