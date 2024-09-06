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
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

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

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (newProduct: newProductProps, thunkAPI) => {
    try {
      let downloadURL: string | null = null;

      // Check if imgUrl is a File
      if (newProduct.imgUrl instanceof File) {
        const storageRef = ref(
          storage,
          `productImage/${Date.now() + newProduct.productName}`,
        );

        const uploadTaskSnapshot = await uploadBytesResumable(
          storageRef,
          newProduct.imgUrl,
        );
        downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);
      } else if (typeof newProduct.imgUrl === "string") {
        // If imgUrl is already a string, use it directly
        downloadURL = newProduct.imgUrl;
      }

      if (downloadURL) {
        const docRef = await addDoc(collection(db, "products"), {
          category: newProduct.category,
          description: newProduct.description,
          imgUrl: downloadURL,
          price: newProduct.price,
          productName: newProduct.productName,
          shortDesc: newProduct.shortDesc,
          reviews: newProduct.reviews,
          avgRating: newProduct.avgRating,
        });

        // Modify newProduct to store the download URL
        newProduct.imgUrl = downloadURL;
        newProduct.id = docRef.id;

        return thunkAPI.fulfillWithValue(newProduct);
      } else {
        throw new Error("Invalid imgUrl");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async ({ id, imgUrl }: { id: string; imgUrl: string }, thunkAPI) => {
    try {
      await deleteDoc(doc(db, "products", id));
      const storage = getStorage();
      const desertRef = ref(storage, imgUrl);
      await deleteObject(desertRef);
      return thunkAPI.fulfillWithValue(id);
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
