import { createSlice } from "@reduxjs/toolkit";
import { getUsers, deleteUser } from "../service/userService";
import { userProps } from "@/shared/types";

interface initialStateProps {
  isLoading: boolean;
  errors: string | null;
  allUsers: userProps[];
}

const initialState: initialStateProps = {
  isLoading: false,
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
        (user) => user.id !== action.payload
      );
      state.errors = null;
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload as string;
    });
  },
});

export default userSlice.reducer;
