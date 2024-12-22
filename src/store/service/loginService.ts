import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db, storage } from "@/firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { userProps } from "@/utils/types";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

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

      if (!result || result.type === "admin") {
        throw new Error("User not found in the database");
      }

      return thunkAPI.fulfillWithValue({ ...result });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const signUpFirebase = createAsyncThunk(
  "auth/signUpFirebase",
  async (
    {
      name,
      email,
      password,
      file,
    }: { name: string; email: string; password: string; file: File | null },
    thunkAPI,
  ) => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      let photoURL = null;
      if (file) {
        // Upload profile image
        const storageRef = ref(storage, `images/${Date.now()}-${name}`);
        const uploadTask = await uploadBytesResumable(storageRef, file);
        photoURL = await getDownloadURL(uploadTask.ref);
      }

      // Update user profile
      await updateProfile(user, {
        displayName: name,
        photoURL,
      });

      // Save user data in Fire store
      const userData = {
        uid: user.uid,
        displayName: name,
        email,
        photoURL,
        type: "user",
      };
      await setDoc(doc(db, "users", user.uid), userData);

      return thunkAPI.fulfillWithValue(userData);
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
