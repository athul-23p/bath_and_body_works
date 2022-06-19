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
        },
        setItems:(state,{payload}) => {
            state.items=payload;
        }
    }
})

export const {setShippingAddress,setItems} = orderSlice.actions;
export default orderSlice.reducer;

