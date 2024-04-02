import { configureStore } from "@reduxjs/toolkit";
import produceSlice from "./slice/cartSlice";
import productSlice from "./slice/productSlice";
import userSlice from "./slice/userSlice";

const store = configureStore({
  reducer: {
    cart: produceSlice,
    product: productSlice,
    user: userSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;