import { all, takeLatest, put, call } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom";
import { loadAllFilmsApi} from "../api";
import {loadAllFilms,setAllFilms} from '../reducers/filmsReducer'


function* loadAllFilmsWorker(action: any) {
  // yield put( setIsLoginUserLoading(true));

  // const userData = action.payload;
  // console.log(userData);

  const { status, data, problem } = yield call(loadAllFilmsApi);
  console.log(data.pagination.data);
  console.log(status);
  console.log(problem);

  
  if (status === 200) {
 
    yield put(setAllFilms(data.pagination.data));
  } 
  // yield put( setIsLoginUserLoading(false));
}


export default function* filmsWatcher() {
  yield all([
    takeLatest(loadAllFilms, loadAllFilmsWorker),
 
  ]);
}
