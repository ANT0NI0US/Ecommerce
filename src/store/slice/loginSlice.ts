import { createSlice } from "@reduxjs/toolkit";
import { getUserByToken, signInFireBase } from "../service/loginService";
import { loginServiceState } from "@/shared/types";

const storedToken = localStorage.getItem("token");

const initialState: loginServiceState = {
  isLoading: false,
  user: {},
  errors: null,
  isAdmin: false,
  isAuthenticated: !!storedToken && storedToken !== "undefined",
  token: storedToken ? storedToken : null,
};

const ordersSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.isAdmin = false;
      window.localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // sign in function
      .addCase(signInFireBase.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = false;
        state.errors = null;
      })
      .addCase(signInFireBase.fulfilled, (state, action) => {
        const { type, uid } = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
        state.isAdmin = type === "admin" ? true : false;
        localStorage.setItem("token", uid);

        state.user = action.payload;
      })
      .addCase(signInFireBase.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.errors = action.payload as string;
      })

      // getUserByToken
      .addCase(getUserByToken.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(getUserByToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload || {};
      })
      .addCase(getUserByToken.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload as string;
      });
  },
});

export default ordersSlice.reducer;
