import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "../service/userService";
import { userServiceState } from "@/utils/types";

const initialState: userServiceState = {
  isLoading: false,
  user: {},
  errors: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get a specific user
    builder.addCase(getUserById.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.isLoading = false;

      state.user = action.payload;

      state.errors = null;
    });
    builder.addCase(getUserById.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload as string;
    });
  },
});

export default userSlice.reducer;
