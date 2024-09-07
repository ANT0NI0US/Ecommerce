import { createSlice } from "@reduxjs/toolkit";
import { getUserByToken, signInFireBase } from "../service/loginService";
import { loginServiceState } from "@/utils/types";

const storedToken = localStorage.getItem("token");
const storedIsAdmin = localStorage.getItem("isAdmin");

const initialState: loginServiceState = {
  isLoading: false,
  user: {},
  errors: null,
  isAdmin: storedIsAdmin === "true",
  isAuthenticated: !!storedToken && storedToken !== "undefined",
  token: storedToken || null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.isAdmin = false;
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("isAdmin");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInFireBase.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = false;
        state.errors = null;
      })
      .addCase(signInFireBase.fulfilled, (state, action) => {
        const { type, uid } = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
        state.isAdmin = type === "admin";
        if (typeof uid === "string") {
          localStorage.setItem("token", uid);
          state.token = uid;
        } else {
          state.token = null;
        }
        localStorage.setItem("isAdmin", state.isAdmin.toString());
        state.user = action.payload;
      })
      .addCase(signInFireBase.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.errors = action.payload as string;
      })
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

export const { logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
