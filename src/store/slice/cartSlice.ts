import { CartItem, CartState, Item } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState: CartState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
  perfectItems: [],
  totalFavoriteItemsQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id,
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        if (existingItem.quantity && existingItem.totalPrice) {
          existingItem.quantity++;
          existingItem.totalPrice += newItem.price;
        }
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + (item.totalPrice || 0),
        0,
      );
    },
    MaximizeQuantityItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem && existingItem.quantity && existingItem.totalPrice) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
        state.totalQuantity = state.totalQuantity + 1;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + (item.totalPrice || 0),
        0,
      );
    },
    MinimizeQuantityItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem && existingItem.quantity && existingItem.totalPrice) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity = state.totalQuantity - 1;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + (item.totalPrice || 0),
        0,
      );
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        if (existingItem.quantity) {
          state.totalQuantity = state.totalQuantity - existingItem.quantity;
        }
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + (item.totalPrice || 0),
        0,
      );
    },
    addPerfectItem: (state, action: PayloadAction<Item>) => {
      const newFavoriteItem = action.payload;
      const existingItem = state.perfectItems.find(
        (item) => item.id === newFavoriteItem.id,
      );
      if (existingItem) {
        state.perfectItems = state.perfectItems.filter(
          (item) => item.id !== newFavoriteItem.id,
        );
        state.totalFavoriteItemsQuantity = state.totalFavoriteItemsQuantity - 1;
        toast.success("Product removed from favorites");
      } else {
        state.perfectItems.push({
          id: newFavoriteItem.id,
          productName: newFavoriteItem.productName,
          imgUrl: newFavoriteItem.imgUrl,
          price: newFavoriteItem.price,
        });
        state.totalFavoriteItemsQuantity = state.totalFavoriteItemsQuantity + 1;
        toast.success(
          `${newFavoriteItem.productName} added to favorites successfully!`,
        );
      }
    },
    resetCartItemsAndTotal(state) {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
    returnToInitialState() {
      return initialState;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
