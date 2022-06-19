import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;
const initialState = {
  cartItems: [],
  amount: 0,
  total_items: 0,
  isLoading: false,
  error:null
};

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const config = {
        headers: { Authorization: `Bearer ${state.auth.token}` },
      };
      const resp = await axios.get(baseUrl + '/cart', config);

      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);

export const addCartItem = createAsyncThunk(
  'cart/addCartItem',
  async ({ product, quantity }, thunkAPI) => {
    try {
      // console.log(thunkAPI);
      const state = thunkAPI.getState();
      const config = {
        headers: { Authorization: `Bearer ${state.auth.token}` },
      };
      const res = await axios.post(
        baseUrl + '/cart',
        { productId: product._id, quantity },
        config
      );

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);


export const updateCartItem = createAsyncThunk(
  'cart/updateCartItem',
  async ({ cartItemId, quantity }, thunkAPI) => {
    try {
      console.log(thunkAPI);
      const state = thunkAPI.getState();
      const config = {
        headers: { Authorization: `Bearer ${state.auth.token}` },
      };
      const res = await axios.patch(
        baseUrl + `/cart/${cartItemId}/${quantity}`,{},
        config
      );

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  'cart/deleteCartItem',
  async (cartItemId, thunkAPI) => {
    try {
      console.log(thunkAPI);
      const state = thunkAPI.getState();
      const config = {
        headers: { Authorization: `Bearer ${state.auth.token}` },
      };
      const res = await axios.delete(
        baseUrl + `/cart/${cartItemId}`,
        config
      );

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);




const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: state => {
      // state.cartItems = [];
      return initialState;
    },
  
    calculateTotals: state => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach(item => {
        total += item.quantity;
        amount += item.productId.price * item.quantity;
      });
      state.amount = amount;
      state.total_items = total;
      // use useEffect(() =>{}, [cartItems])
    },
  },
  extraReducers: {
    [getCartItems.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addCartItem.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addCartItem.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addCartItem.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [updateCartItem.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [updateCartItem.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [updateCartItem.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteCartItem.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteCartItem.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deleteCartItem.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// console.log(cartSlice);
export const { clearCart,calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
