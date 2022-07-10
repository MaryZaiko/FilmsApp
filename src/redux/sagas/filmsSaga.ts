import { all, takeLatest, put, call } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { getAllFilmsApi,getSingleFilmApi } from "../api";
import { loadAllFilms, setAllFilms,loadFilm,setSingleFilm,setSingleFilmLoading } from "../reducers/filmsReducer";

function* getAllFilmsWorker(action: any) {
  // yield put( setIsLoginUserLoading(true));

  const { status, data, problem } = yield call(getAllFilmsApi);
  console.log(data.pagination.data);
  console.log(status);
  console.log(problem);

  if (status === 200) {
    yield put(setAllFilms(data.pagination.data));
  }
  // yield put( setIsLoginUserLoading(false));
}
function* getSingleFilmWorker(action: PayloadAction<string>) {
  yield put( setSingleFilmLoading(true));
  yield put(setSingleFilm(null));

  const { status, data, problem } = yield call(getSingleFilmApi,action.payload);
  console.log(data.title);
  console.log(status);
  console.log(problem);

  if (status === 200) {
    yield put(setSingleFilm(data.title));
  }
  yield put( setSingleFilmLoading(false));
}
export default function* filmsWatcher() {
  yield all([
    takeLatest(loadAllFilms, getAllFilmsWorker),
    takeLatest(loadFilm, getSingleFilmWorker),
  ]);
}
