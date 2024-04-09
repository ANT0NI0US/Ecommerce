import { createAsyncThunk } from "@reduxjs/toolkit";
import { db, storage } from "@/firebase.config";
import { newProductProps, productCardProps } from "@/shared/types";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

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
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (newProduct: newProductProps, thunkAPI) => {
    try {
      const storageRef = ref(
        storage,
        `productImage/${Date.now() + newProduct.productName}`
      );

      const uploadTaskSnapshot = await uploadBytesResumable(
        storageRef,
        newProduct.imgUrl
      );
      const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);

      newProduct.imgUrl = downloadURL;

      await addDoc(collection(db, "products"), {
        category: newProduct.category,
        description: newProduct.description,
        imgUrl: downloadURL,
        price: newProduct.price,
        productName: newProduct.productName,
        shortDesc: newProduct.shortDesc,
        reviews: newProduct.reviews,
        avgRating: newProduct.avgRating,
      });

      return thunkAPI.fulfillWithValue(newProduct);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk<string, string>(
  "product/deleteProduct",
  async (id: string, thunkAPI) => {
    try {
      await deleteDoc(doc(db, "products", id));
      return thunkAPI.fulfillWithValue(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
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
    thunkAPI
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
  }
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (productId: string, thunkAPI) => {
    try {
      const productRef = doc(db, "products", productId);
      const productSnapshot = await getDoc(productRef);

      if (productSnapshot.exists()) {
        const productData = productSnapshot.data() as productCardProps;
        return thunkAPI.fulfillWithValue({
          id: productSnapshot.id,
          ...productData,
        });
      } else {
        return thunkAPI.rejectWithValue("Product not found");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
