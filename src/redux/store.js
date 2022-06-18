
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cartSlice';
import authReducer from './auth/authSlice';
import productSlice from "./products/productSlice";
export const store = configureStore({
    reducer:{
        cart:cartReducer,
        auth:authReducer,
        products:productSlice
    },
});


