import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { userProps } from "@/utils/types";

export const getUserById = createAsyncThunk(
  "user/getUserById",
  async (userId: string, thunkAPI) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnapShot = await getDoc(userRef);

      if (userSnapShot.exists()) {
        const userData = userSnapShot.data();
        return thunkAPI.fulfillWithValue({
          id: userSnapShot.id,
          ...userData,
        }) as userProps;
      } else {
        return thunkAPI.rejectWithValue("User not found");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
