import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/firebase.config";
import { productCardProps } from "@/utils/types";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const allProducts = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as productCardProps[];
      return allProducts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addReviewToProduct = createAsyncThunk(
  "product/addReviewToProduct",
  async (
    {
      productId,
      review,
    }: {
      productId: string;
      review: { name: string; text: string; rating: number | null };
    },
    thunkAPI,
  ) => {
    try {
      const productRef = doc(db, "products", productId);
      const productSnapshot = await getDoc(productRef);

      if (productSnapshot.exists()) {
        const productData = productSnapshot.data();
        const updatedReviews = [...productData.reviews, review];

        await updateDoc(productRef, { reviews: updatedReviews });

        return thunkAPI.fulfillWithValue({ productId, review });
      } else {
        return thunkAPI.rejectWithValue("Product not found");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (productId: string, thunkAPI) => {
    try {
      const productRef = doc(db, "products", productId);
      const productSnapshot = await getDoc(productRef);

      if (productSnapshot.exists()) {
        const productData = productSnapshot.data();
        return thunkAPI.fulfillWithValue({
          id: productSnapshot.id,
          ...productData,
        }) as productCardProps;
      } else {
        return thunkAPI.rejectWithValue("Product not found");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
