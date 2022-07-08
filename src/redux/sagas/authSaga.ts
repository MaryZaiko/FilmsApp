import { all, takeLatest, put, call } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";
import {
  RegisterUser,
  registerUser,
  loginUser,
  setLogStatus,logout

} from "../reducers/authReducer";

import { useNavigate } from "react-router-dom";
import { registerUserApi, loginUserApi } from "../api";

function* registerUserWorker(action: PayloadAction<RegisterUser>) {
  const {
    callback,
    email,
    first_name,
    password,
    password_confirmation,
    token_name, 
    } = action.payload;

  const { data, status, problem } = yield call(registerUserApi, {
    email,
    first_name,
    password,
    password_confirmation,
    token_name,
  });

  console.log(problem);
  console.log(data);

  if (status === 200) {
    // console.log(data.boostrapData.user.access_token);
    // localStorage.setItem("jwtAccessToken", data.boostrapData.user.access_token);

    callback();
  }
}

function* loginUserWorker(action: any) {
  // yield put( setIsLoginUserLoading(true));
  const userData = action.payload;
  console.log(userData);

  const { status, data, problem } = yield call(loginUserApi, userData);
  console.log(data.user.access_token);
  console.log(status);
  console.log(problem);

  
  if (status === 200) {
    localStorage.setItem("jwtAccessToken", data.user.access_token);
 
    yield put(setLogStatus(true));
  } else {
    console.error("ОШИБКА ПРИ ЛОГИНЕ", problem);
  }
  // yield put( setIsLoginUserLoading(false));
}
export function* logoutWorker(action: any) {
  
  // const {callback} = action.payload;
  localStorage.removeItem("jwtAccessToken");

   yield put( setLogStatus(false));
  // callback()
  }

export default function* authWatcher() {
  yield all([
    takeLatest(registerUser, registerUserWorker),
 
    takeLatest(loginUser, loginUserWorker),
    takeLatest(logout, logoutWorker),
  ]);
}
