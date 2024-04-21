import { createSlice } from "@reduxjs/toolkit";
import {
  getProducts,
  addProduct,
  deleteProduct,
  addReviewToProduct,
  getProductById,
} from "../service/productService";
import { productCardProps, productServiceState } from "@/shared/types";

const initialState: productServiceState = {
  isLoading: false,
  allProducts: [],
  product: {},
  errors: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // all products
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload || [];
      state.errors = null;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload as string;
    });

    // add new product
    builder.addCase(addProduct.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProducts.push(action.payload);
      state.errors = null;
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload as string;
    });

    // delete product
    builder.addCase(deleteProduct.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProducts = state.allProducts.filter(
        (product) => product.id !== action.payload,
      );
      state.errors = null;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload as string;
    });

    //add new review to the product
    builder.addCase(addReviewToProduct.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(addReviewToProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      const { productId, review } = action.payload;
      if (
        state.product &&
        (state.product as productCardProps).id === productId
      ) {
        const product = state.product as productCardProps;
        if (!product.reviews) {
          product.reviews = [];
        }
        product.reviews.push(review);
        state.errors = null;
      }
    });
    builder.addCase(addReviewToProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload as string;
    });

    // get a specific product
    builder.addCase(getProductById.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      const existingProductIndex = state.allProducts.findIndex(
        (product) => product.id === action.payload.id,
      );
      if (existingProductIndex !== -1) {
        state.product = action.payload;
      }
      state.errors = null;
    });
    builder.addCase(getProductById.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload as string;
    });
  },
});

export default productSlice.reducer;
