import axios from 'axios';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = process.env.REACT_APP_API_URL;

const initialState = {
    isLoading:false,
    error:null,
    data:[],
    stats:{},
    current:{},
}


export const fetchProducts = createAsyncThunk('products/fetchProducts',async(params,thunkAPI) => {
    try {
        console.log(params);
        const res = await axios.get(baseUrl + '/products',{
            params:params
        });
        console.log(res);
        return res;
    } catch (error) {
        return thunkAPI.rejectWithValue('Something went wrong');

    }
})

export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async (id, thunkAPI) => {
    try {
      
      const res = await axios.get(baseUrl + `/products/${id}`);
      console.log(res);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: state => {
      state.isLoading = true;
      state.stats = {};
      state.error = null;

    },
    [fetchProducts.fulfilled]: (state, { type, payload }) => {
      state.isLoading = false;
      state.data = payload.data.docs;
      delete payload.data.docs;
      state.stats = payload.data;
    },
    [fetchProducts.rejected]: (state, { type, payload }) => {
      state.isLoading = false;
      state.error=payload
    },


    [fetchProduct.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchProduct.fulfilled]: (state, { type, payload }) => {
      state.isLoading = false;
      state.current = payload.data;
    },
    [fetchProduct.rejected]: (state, { type, payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default productSlice.reducer;