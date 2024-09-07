import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "@/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { userProps } from "@/utils/types";
import { collection, getDocs } from "firebase/firestore";

export const signInFireBase = createAsyncThunk(
  "login/signInFireBase",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI,
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const currentUser = userCredential.user;
      const querySnapshot = await getDocs(collection(db, "users"));
      const fetchedUsers = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      })) as userProps[];
      const result = fetchedUsers.find((user) => user.uid === currentUser.uid);
      return thunkAPI.fulfillWithValue({ ...result });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getUserByToken = createAsyncThunk(
  "login/getUserByToken",
  async (token: string, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const fetchedUsers = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      })) as userProps[];
      const result = fetchedUsers.find((user) => user.uid === token);
      return thunkAPI.fulfillWithValue(result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
