import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/firebase.config";
import { newOrderProps, ordersFireBase } from "@/shared/types";
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
      await addDoc(collection(db, "orders"), {
        name: newOrder.Name,
        phone: newOrder.Phone,
        address: newOrder.Address,
        city: newOrder.City,
        code: newOrder.Code,
        country: newOrder.Country,
        items: newOrder.cartItems,
        itemsAmount: newOrder.totalAmount,
        itemsQuantity: newOrder.totalQuantity,
        email: newOrder.email,
        userId: newOrder.uid,
        userPhoto: newOrder.photoURL,
      });

      return thunkAPI.fulfillWithValue(newOrder);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getOrderById = createAsyncThunk(
  "order/getOrderById",
  async (orderId: string, thunkAPI) => {
    console.log("totos",orderId);
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
