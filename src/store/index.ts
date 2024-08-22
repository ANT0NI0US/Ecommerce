import { configureStore } from "@reduxjs/toolkit";
import produceSlice from "./slice/cartSlice";
import productSlice from "./slice/productSlice";
import userSlice from "./slice/userSlice";
import ordersSlice from "./slice/ordersSlice";
import loginSlice from "./slice/loginSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    cart: produceSlice,
    product: productSlice,
    user: userSlice,
    order: ordersSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
