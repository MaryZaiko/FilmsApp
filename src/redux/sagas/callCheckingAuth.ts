//@ts-nocheck

import { call, put } from "redux-saga/effects";
import { logout } from "../reducers/authReducer";

// type ApiType = (params: any) => response;

export function* callCheckingAuth(api: any, ...rest: any) {
  const accessToken = localStorage.getItem("jwtAccessToken");
  const response = yield call(api, accessToken, ...rest);
  const code = response.status;

  if (code === 401) {
    yield put(logout({}));
  } else {
    return response;
  }
}
