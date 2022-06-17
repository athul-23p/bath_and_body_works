import axios from 'axios';
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = process.env.REACT_APP_API_URL;
console.log(baseUrl,process.env);
const initialState = {
    isLoading:false,
    error:null,
    token:null,
    isAuth:false,
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



const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{

    },
    extraReducers:{
        [signup.pending]:(state) => {
            state.isLoading=true;
            state.error= null;
           
        },
        [signup.fulfilled]: (state,action) => {
            state.isLoading = false;
           
        },
        [signup.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

console.log(authSlice);

export default authSlice.reducer;