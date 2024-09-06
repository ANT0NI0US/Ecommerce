import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/firebase.config";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { userProps } from "@/shared/types";
import { deleteObject, getStorage, ref } from "firebase/storage";

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
  },
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async ({ id, photoURL }: { id: string; photoURL: string }, thunkAPI) => {
    try {
      await deleteDoc(doc(db, "users", id));
      const storage = getStorage();
      const desertRef = ref(storage, photoURL);
      await deleteObject(desertRef);
      return thunkAPI.fulfillWithValue(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

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
