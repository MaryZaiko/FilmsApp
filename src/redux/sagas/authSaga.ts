import { all, takeLatest, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  RegisterUser,
  registerUser,
  loginUser,
  setLogStatus,
  logout,
  setIsLoginUserLoading,
  getUserInfo,
  setAuthUserName,
  setAuthUserEmail,
  setAuthUserLastName,
  DataUser,
} from "../reducers/authReducer";
import { registerUserApi, loginUserApi, getUserInfoApi } from "../api";

function* registerUserWorker(action: PayloadAction<RegisterUser>) {
  const {
    callback,
    email,
    first_name,
    last_name,
    password,
    password_confirmation,
    token_name,
  } = action.payload;

  const { status } = yield call(registerUserApi, {
    email,
    first_name,
    last_name,
    password,
    password_confirmation,
    token_name,
  });

  if (status === 200) {
    callback();
  }
}

function* loginUserWorker(action: PayloadAction<DataUser>) {
  yield put(setIsLoginUserLoading(true));
  yield put(setAuthUserName(""));
  yield put(setAuthUserEmail(""));
  const userData = action.payload;
  const { status, data, problem } = yield call(loginUserApi, userData);

  if (status === 200) {
    localStorage.setItem("jwtAccessToken", data.user.access_token);
    yield put(setLogStatus(true));
  } else {
    console.error("ОШИБКА ПРИ ЛОГИНЕ", problem);
  }
  yield put(setIsLoginUserLoading(false));
}
export function* logoutWorker() {
  localStorage.removeItem("jwtAccessToken");
  yield put(setLogStatus(false));
}
export function* getUserInfoWorker() {
  const access_token = localStorage.getItem("jwtAccessToken");
  const { status, data } = yield call(getUserInfoApi, access_token, "me");

  if (status === 200) {
    yield put(setAuthUserName(data.user.first_name));
    yield put(setAuthUserLastName(data.user.last_name));
    yield put(setAuthUserEmail(data.user.email));
  }
}

export default function* authWatcher() {
  yield all([
    takeLatest(registerUser, registerUserWorker),
    takeLatest(loginUser, loginUserWorker),
    takeLatest(logout, logoutWorker),
    takeLatest(getUserInfo, getUserInfoWorker),
  ]);
}
