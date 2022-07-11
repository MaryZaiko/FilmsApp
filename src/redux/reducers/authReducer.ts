import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RegisterUser = {
  first_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  token_name: string;
  callback: () => void;
};

export type AuthReducerStateType = {
  isLoggedIn: boolean;
  isLoginUserLoading: boolean;
  authUserName: string;
  authUserEmail: string;
};

const initialState = {
  isLoggedIn: !!localStorage.getItem("jwtAccessToken"),
  isLoginUserLoading: false,
  authUserName: "",
  authUserEmail: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<RegisterUser>) => {},
    setIsLoginUserLoading: (state, action) => {
      state.isLoginUserLoading = action.payload;
    },
    loginUser: (
      state: any,
      action: PayloadAction<{
        email: string;
        password: string;
        token_name: string;
      }>
    ) => {},
    setLogStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    logout: (state, action) => {},
    getUserInfo: (state, action) => {},
    setAuthUserName: (state, action) => {
      state.authUserName = action.payload;
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
} = authSlice.actions;
export default authSlice.reducer;
export const AuthSelector = {
  getLogStatus: (state: any) => state.auth.isLoggedIn,
  getIsLoginUserLoading: (state: any) => state.auth.isLoginUserLoading,
  getAuthUserName: (state: any) => state.auth.authUserName,
  getAuthUserEmail: (state: any) => state.auth.authUserEmail,
};
