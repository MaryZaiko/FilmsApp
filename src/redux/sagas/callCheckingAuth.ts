//@ts-nocheck

import { call, put } from "redux-saga/effects";
import { verifyToken, getNewAccessToken } from "../api/index";
import {logout} from '../reducers/authReducer'

// type ApiType = (params: any) => response;

export function* callCheckingAuth(api: any, ...rest:any) {
  const accessToken = localStorage.getItem("jwtAccessToken");
  const response = yield call(api, accessToken, ...rest);
  const code = response.status;
  console.log(response);
  

  if (code === 401) {
  
      yield put(logout({}));
    
    }
  
}
