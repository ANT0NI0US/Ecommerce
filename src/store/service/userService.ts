import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/firebase.config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { userProps } from "@/shared/types";

export const getUsers = createAsyncThunk<userProps[], void>(
  "user/getUsers",
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const allUsers = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as userProps[];
      return thunkAPI.fulfillWithValue(allUsers);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk<string, string>(
  "user/deleteUser",
  async (id: string, thunkAPI) => {
    try {
      await deleteDoc(doc(db, "users", id));
      return thunkAPI.fulfillWithValue(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
