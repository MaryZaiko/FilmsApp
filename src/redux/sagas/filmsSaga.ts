import { all, takeLatest, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  getAllFilmsApi,
  getSearchedOfFilmsApi,
  getSingleFilmApi,
  getRecommendationFilmsApi,
  getFilteredFilmsApi,
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
  loadRecommendationFilms,
  setRecommendationFilms,
  setAllFilmsMore,
  setTrendFilmsMore,
  setTrendFilms,
  setAllFilters,
  setFilteredFilms,
  setFilterStatus,
  setSearchedStatus,
} from "../reducers/filmsReducer";
import { callCheckingAuth } from "./callCheckingAuth";

function* getAllFilmsWorker(action: any) {
  yield put(setMainPageLoading(true));
  const {
    isShowMore,
    mainOrder: order,
    isTrends,
    page,
    perPage,
  } = action.payload;

  const { status, data } = yield callCheckingAuth(
    getAllFilmsApi,
    order,
    page,
    perPage
  );

  if (status === 200) {
    if (isShowMore) {
      if (isTrends) {
        yield put(setTrendFilmsMore(data.pagination.data));
      } else {
        yield put(setAllFilmsMore(data.pagination.data));
      }
    } else {
      if (isTrends) {
        yield put(setTrendFilms(data.pagination.data));
      } else {
        yield put(setAllFilms(data.pagination.data));
      }
    }
  }
  yield put(setMainPageLoading(false));
}

function* getSingleFilmWorker(action: PayloadAction<string>) {
  yield put(setSingleFilmLoading(true));
  yield put(setSingleFilm(null));
  yield put(setDirectorForSingleFilm(""));
  yield put(setWriterForSingleFilm(""));
  yield put(setActorsForSingleFilm(""));

  const { status, data } = yield callCheckingAuth(
    getSingleFilmApi,
    action.payload
  );

  if (status === 200) {
    yield put(setSingleFilm(data.title));
    const filterPeople = (type: string) => {
      return data.title.credits.filter(
        (item: any) => item.pivot.department === type
      );
    };
    const director: string[] = filterPeople("directing");
    const writers: string[] = filterPeople("writing");
    const actors: string[] = filterPeople("cast");

    yield put(setDirectorForSingleFilm(director));
    yield put(setWriterForSingleFilm(writers));
    yield put(setActorsForSingleFilm(actors));
  }
  yield put(setSingleFilmLoading(false));
}

function* getSearchedOfFilmsWorker(action: any) {
  yield put(setMainPageLoading(true));
  yield put(setSearchOfFilms(""));

  const { search: query } = action.payload;
  const { data, status } = yield callCheckingAuth(getSearchedOfFilmsApi, query);
  if (status === 200) {
    yield put(setSearchOfFilms(data.results));
    yield put(setSearchedStatus(true));
  }
  yield put(setMainPageLoading(false));
}
function* getRecommendationFilmsWorker(action: PayloadAction<string>) {
  yield put(setSingleFilmLoading(true));
  yield put(setRecommendationFilms(null));

  const { status, data } = yield callCheckingAuth(
    getRecommendationFilmsApi,
    action.payload
  );

  if (status === 200) {
    yield put(setRecommendationFilms(data.titles));
  }
  yield put(setSingleFilmLoading(false));
}

function* getFilteredFilmsWorker(action: any) {
  yield put(setMainPageLoading(true));
  yield put(setFilteredFilms(""));
  const {
    sort: type,
    genre,
    years,
    rating,
    countries: country,
  } = action.payload;
  
  const released = Object.values(years);
  const score = Object.values(rating);
  const { data, status, problem } = yield callCheckingAuth(
    getFilteredFilmsApi,
    type && type,
    genre.join(),
    released.join(),
    score.join(),
    country
  );

  if (status === 200) {
    console.log(data);
    
    yield put(setFilterStatus(true));
    yield put(setFilteredFilms(data.pagination.data));
  }
  yield put(setMainPageLoading(false));
}

export default function* filmsWatcher() {
  yield all([
    takeLatest(loadAllFilms, getAllFilmsWorker),
    takeLatest(loadFilm, getSingleFilmWorker),
    takeLatest(searchOfFilms, getSearchedOfFilmsWorker),
    takeLatest(loadRecommendationFilms, getRecommendationFilmsWorker),
    takeLatest(setAllFilters, getFilteredFilmsWorker),
  ]);
}
