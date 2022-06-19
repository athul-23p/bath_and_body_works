import axios from 'axios';
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = process.env.REACT_APP_API_URL;
// console.log(baseUrl,process.env);
const initialState = {
    isLoading:false,
    error:null,
    token:null,
    isAuth:false,
    user:null,
}

export const signup = createAsyncThunk('auth/signup',async(user,thunkAPI) => {

    try {
        console.log(user);
        const res = await axios.post(baseUrl + '/register', user);
        return res;
    } catch (error) {
        return thunkAPI.rejectWithValue('Something went wrong');
    }
})

export const signin = createAsyncThunk(
  'auth/signin',
  async (user, thunkAPI) => {
    try {
      // console.log(user);
      const res = await axios.post(baseUrl + '/login', user);
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: state => {
    state.isAuth=false;
    state.token = null;
    state.user = null;
    }
  },
  extraReducers: {
    [signup.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [signup.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [signup.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [signin.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [signin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload.user.first_name;
      state.token = action.payload.token;
    },
    [signin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
console.log(authSlice);
export const {signOut} = authSlice.actions;

export default authSlice.reducer;