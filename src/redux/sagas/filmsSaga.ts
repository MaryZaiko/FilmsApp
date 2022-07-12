
import { all, takeLatest, put, call } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { getAllFilmsApi, getSearchedOfFilmsApi, getSingleFilmApi } from "../api";
import {
  loadAllFilms,
  setAllFilms,
  loadFilm,
  setSingleFilm,
  setMainPageLoading,
  setSingleFilmLoading,
  setDirectorForSingleFilm,
  setWriterForSingleFilm,
  setActorsForSingleFilm,setSearchOfFilms,searchOfFilms
} from "../reducers/filmsReducer";

function* getAllFilmsWorker() {
  yield put(setMainPageLoading(true));
  yield put(setAllFilms(''));
const access_token = localStorage.getItem("jwtAccessToken")
  


  const { status, data, problem } = yield call(getAllFilmsApi,access_token);
  console.log(data.pagination.data);
  console.log(status);
  console.log(problem);

  if (status === 200) {
    yield put(setAllFilms(data.pagination.data));
  }
  yield put(setMainPageLoading(false));
}
function* getSingleFilmWorker(action: PayloadAction<string>) {
  yield put(setSingleFilmLoading(true));
  yield put(setSingleFilm(null));

  const { status, data, problem } = yield call(
    getSingleFilmApi,
    action.payload
  );
  // console.log(data.title);

  // console.log(data.title.credits);
  // console.log(status);
  // console.log(problem);

  if (status === 200) {
    yield put(setSingleFilm(data.title));
    data.title.credits.forEach((item: any) => {
      if (item.pivot.department === "directing") {
        // console.log(item.pivot.department);
        // console.log(item.name);

       put(setDirectorForSingleFilm(item.name))
      } else if (item.pivot.department === "writing") {
        put(setWriterForSingleFilm(item.name))
      } else if (item.pivot.department === "cast") {
        put(setActorsForSingleFilm(item.name))
      }
    });
  }
  yield put(setSingleFilmLoading(false));
}

function* getSearchedOfFilms(action:any) {
  yield put(setSearchOfFilms(''));

  const access_token = localStorage.getItem("jwtAccessToken");
  const {search: query } = action.payload;
  console.log(query);
  
  const { data, status, problem } = yield call(getSearchedOfFilmsApi, access_token, query);
  if (status === 200) {
    yield put(setSearchOfFilms(data.results));
  }



//   yield put(setMainPageLoading(true));
// console.log(action.payload);
// let {search: query} = action.payload
// console.log(query);

//   const { status, data, problem } = yield call(getSearchedOfFilmsApi, query);
  console.log(data);
  console.log(status);
  console.log(problem);

  // if (status === 200) {
  //   yield put(setAllFilms(data.pagination.data));
  // }
  // yield put(setMainPageLoading(false));
}



export default function* filmsWatcher() {
  yield all([
    takeLatest(loadAllFilms, getAllFilmsWorker),
    takeLatest(loadFilm, getSingleFilmWorker),
    takeLatest(searchOfFilms,getSearchedOfFilms)
  ]);
}
