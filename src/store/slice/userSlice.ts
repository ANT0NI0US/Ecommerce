import { createSlice } from "@reduxjs/toolkit";
import { getUsers, deleteUser, getUserById } from "../service/userService";
import { userServiceState } from "@/shared/types";

const initialState: userServiceState = {
  isLoading: false,
  user: {},
  allUsers: [],
  errors: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allUsers = action.payload || [];
      state.errors = null;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload as string;
    });

    builder.addCase(deleteUser.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allUsers = state.allUsers.filter(
        (user) => user.id !== action.payload,
      );
      state.errors = null;
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload as string;
    });

    // get a specific user
    builder.addCase(getUserById.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      const existingUserIndex = state.allUsers.findIndex(
        (user) => user.id === action.payload.id,
      );
      if (existingUserIndex !== -1) {
        state.user = action.payload;
      }
      state.errors = null;
    });
    builder.addCase(getUserById.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload as string;
    });
  },
});

export default userSlice.reducer;
