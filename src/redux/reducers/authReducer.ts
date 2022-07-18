import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RegisterUser = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  token_name: string;
  callback: () => void;
};
export type DataUser = {
  email: string;
  password: string;
  token_name: string;
};
export type AuthReducerStateType = {
  isLoggedIn: boolean;
  isLoginUserLoading: boolean;
  authUserName: string;
  authUserLastName: string;
  authUserEmail: string;
};

const initialState = {
  isLoggedIn: !!localStorage.getItem("jwtAccessToken"),
  isLoginUserLoading: false,
  authUserName: "",
  authUserLastName: "",
  authUserEmail: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {},
    setIsLoginUserLoading: (state, action) => {
      state.isLoginUserLoading = action.payload;
    },
    loginUser: (state, action) => {},
    setLogStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    logout: (state, action) => {},
    getUserInfo: (state, action) => {},
    setAuthUserName: (state, action) => {
      state.authUserName = action.payload;
    },
    setAuthUserLastName: (state, action) => {
      state.authUserLastName = action.payload;
    },
    setAuthUserEmail: (state, action) => {
      state.authUserEmail = action.payload;
    },
  },
});

export const {
  registerUser,
  loginUser,
  setLogStatus,
  logout,
  setIsLoginUserLoading,
  getUserInfo,
  setAuthUserName,
  setAuthUserEmail,
  setAuthUserLastName,
} = authSlice.actions;
export default authSlice.reducer;
export const AuthSelector = {
  getLogStatus: (state: any) => state.auth.isLoggedIn,
  getIsLoginUserLoading: (state: any) => state.auth.isLoginUserLoading,
  getAuthUserName: (state: any) => state.auth.authUserName,
  getAuthUserEmail: (state: any) => state.auth.authUserEmail,
  getAuthUserLastName: (state: any) => state.auth.authUserLastName,
};
