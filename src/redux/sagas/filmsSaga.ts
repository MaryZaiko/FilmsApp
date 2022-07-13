import { all, takeLatest, put, call } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import {
  getAllFilmsApi,
  getSearchedOfFilmsApi,
  getSingleFilmApi,
} from "../api";
import {
  loadAllFilms,
  setAllFilms,
  loadFilm,
  setSingleFilm,
  setMainPageLoading,
  setSingleFilmLoading,
  setDirectorForSingleFilm,
  setWriterForSingleFilm,
  setActorsForSingleFilm,
  setSearchOfFilms,
  searchOfFilms,
} from "../reducers/filmsReducer";
import { act } from "react-dom/test-utils";

function* getAllFilmsWorker(action: any) {
  yield put(setMainPageLoading(true));
  yield put(setAllFilms(""));
  const access_token = localStorage.getItem("jwtAccessToken");
  const order = action.payload;

  const { status, data, problem } = yield call(
    getAllFilmsApi,
    access_token,
    order
  );
  console.log(data.pagination.data);
  console.log(status);
  console.log(problem);

  if (status === 200) {
    const newData = data.pagination.data.map((card: any) => {
      return {
        ...card,
        saved: false,
      };
    });
    yield put(setAllFilms(newData));
  }
  yield put(setMainPageLoading(false));
}
function* getSingleFilmWorker(action: PayloadAction<string>) {
  yield put(setSingleFilmLoading(true));
  yield put(setSingleFilm(null));
  yield put(setDirectorForSingleFilm(''));
  yield put(setWriterForSingleFilm(''));
  yield put(setActorsForSingleFilm(''));

  const { status, data, problem } = yield call(
    getSingleFilmApi,
    action.payload
  );
  console.log(data.title);
  

  if (status === 200) {
    yield put(setSingleFilm(data.title));


    const filterPeople = (type: string) => {
      return data.title.credits.filter((item: any) => item.pivot.department === type)
    }
    const director: any[] = filterPeople('directing');
    const writers: any[] = filterPeople('writing');
    const actors: any[] = filterPeople('cast');
   
    
    yield put(setDirectorForSingleFilm(director));
    yield put(setWriterForSingleFilm(writers));
    yield put(setActorsForSingleFilm(actors));
  }
  yield put(setSingleFilmLoading(false));
}

function* getSearchedOfFilms(action: any) {
  yield put(setSearchOfFilms(""));

  const access_token = localStorage.getItem("jwtAccessToken");
  const { search: query } = action.payload;
  console.log(query);

  const { data, status, problem } = yield call(
    getSearchedOfFilmsApi,
    access_token,
    query
  );
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
    takeLatest(searchOfFilms, getSearchedOfFilms),
  ]);
}
