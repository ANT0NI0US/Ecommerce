import { createSlice } from "@reduxjs/toolkit";
import {
  getProducts,
  addProduct,
  deleteProduct,
} from "../service/productService";
import { productCardProps } from "@/shared/types";

interface initialStateProps {
  isLoading: boolean;
  errors: null | string;
  allProducts: productCardProps[];
}

const initialState: initialStateProps = {
  isLoading: false,
  allProducts: [],
  errors: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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

    builder.addCase(deleteProduct.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProducts = state.allProducts.filter(
        (product) => product.id !== action.payload
      );
      state.errors = null;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload as string;
    });
  },
});

export default productSlice.reducer;
