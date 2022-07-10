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
  authUserName: string;
  isLoginUserLoading: boolean;
};

const initialState = {
  isLoggedIn: !!localStorage.getItem("jwtAccessToken"),

  tempMail: "",
  authUserName: "",
  isLoginUserLoading: false,
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
  },
});

export const {
  registerUser,
  loginUser,
  setLogStatus,
  logout,
  setIsLoginUserLoading
} = authSlice.actions;
export default authSlice.reducer;
export const AuthSelector = {
  getLogStatus: (state: any) => state.auth.isLoggedIn,
  getIsLoginUserLoading:(state:any)=> state.auth.isLoginUserLoading
};
