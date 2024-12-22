import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/firebase.config";
import { newOrderProps, ordersFireBase } from "@/utils/types";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";

export const getOrders = createAsyncThunk(
  "order/getOrders",
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const allOrders = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as ordersFireBase[];
      return allOrders;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addOrder = createAsyncThunk(
  "order/addOrder",
  async (newOrder: newOrderProps, thunkAPI) => {
    try {
      const { cartItems, totalAmount, totalQuantity, uid, photoURL, ...data } =
        newOrder;
      const theNewOrder = {
        ...data,
        items: cartItems,
        itemsAmount: totalAmount,
        itemsQuantity: totalQuantity,
        userId: uid,
        userPhoto: photoURL,
      };
      await addDoc(collection(db, "orders"), theNewOrder);

      return thunkAPI.fulfillWithValue(theNewOrder);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getOrderById = createAsyncThunk(
  "order/getOrderById",
  async (orderId: string, thunkAPI) => {
    try {
      const orderRef = doc(db, "orders", orderId);
      const orderSnapShot = await getDoc(orderRef);

      if (orderSnapShot.exists()) {
        const orderData = orderSnapShot.data() as ordersFireBase;
        return thunkAPI.fulfillWithValue({
          id: orderSnapShot.id,
          ...orderData,
        });
      } else {
        return thunkAPI.rejectWithValue("Order not found");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
