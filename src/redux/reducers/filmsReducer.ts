import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllFilters, BaseFromTo, CardTypes, SortByTabsEnum } from "../../common/types";

// export type RegisterUser = {
//   name: string;
//   email: string;
//   password: string;
//   callback: () => void;
// };

export type FilmsReducerStateType = {
  activeTabLink: string;
  isVisibleSidebar: boolean;
  isUnVisibleFormSelect: boolean;
  allFilms: CardTypes[];
  allTrendFilms: CardTypes[];
  searchedFilms: CardTypes[];
  filteredFilms: CardTypes[];
  isFiltered: boolean;
  isSearched: boolean;
  // searchOfFilms:string;
  favoriteFilms: CardTypes[];
  mainPageLoading: boolean;
  singleFilm: CardTypes | null;
  recommendationFilms: CardTypes[] | null;
  directorForSingleFilm: string[];
  writerForSingleFilm: string[];
  actorsForSingleFilm: string[];
  singleFilmLoading: boolean;
  allFilters: AllFilters;
  filtersGenre: string;
  filtersCountry: string;
};

const initialState = {
  activeTabLink: "home",
  isVisibleSidebar: false,
  isUnVisibleFormSelect: true,
  allFilms: [],
  allTrendFilms: [],
  searchedFilms: [],
  filteredFilms: [],
  isFiltered: false,
  isSearched: false,

  // searchOfFilms:'',
  mainPageLoading: false,
  singleFilm: null,
  singleFilmLoading: false,
  directorForSingleFilm: [],
  writerForSingleFilm: [],
  actorsForSingleFilm: [],
  favoriteFilms: [],
  recommendationFilms: [],
  allFilters: {},
  filtersGenre: "",
  filtersCountry: "",
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setActiveTabLink: (state, action: PayloadAction<string>) => {
      state.activeTabLink = action.payload;
    },
    setIsVisibleSidebar: (state, action: PayloadAction<boolean>) => {
      state.isVisibleSidebar = action.payload;
    },
    setIsVisibleFormSelect: (state, action: PayloadAction<boolean>) => {
      state.isUnVisibleFormSelect = action.payload;
    },
    setMainPageLoading: (state, action: PayloadAction<boolean>) => {
      state.mainPageLoading = action.payload;
    },
    loadAllFilms: (state, action) => {},
    setAllFilms: (state, action) => {
      state.allFilms = action.payload;
    },
    setAllFilmsMore: (state, action) => {
      state.allFilms = state.allFilms.concat(action.payload);
    },
    setTrendFilms: (state, action) => {
      state.allTrendFilms = action.payload;
    },
    setTrendFilmsMore: (state, action) => {
      state.allTrendFilms = state.allTrendFilms.concat(action.payload);
    },
    loadFilm: (state, action) => {},
    setSingleFilm: (state, action) => {
      state.singleFilm = action.payload;
    },
    setSingleFilmLoading: (state, action) => {
      state.singleFilmLoading = action.payload;
    },
    setDirectorForSingleFilm: (state, action) => {
      state.directorForSingleFilm = action.payload;
    },
    setWriterForSingleFilm: (state, action) => {
      state.writerForSingleFilm = action.payload;
    },
    setActorsForSingleFilm: (state, action) => {
      state.actorsForSingleFilm = action.payload;
    },
    setSearchOfFilms: (state, action) => {
      state.searchedFilms = action.payload;
    },
    setFilteredFilms: (state, action) => {
      state.filteredFilms = action.payload;
    },
    setFilterStatus: (state, action) => {
      state.isFiltered = action.payload;
    },
    setSearchedStatus: (state, action) => {
      state.isSearched = action.payload;
    },
    searchOfFilms: (state, action) => {},
    setFavoriteFilms: (state, action) => {
      state.favoriteFilms = action.payload;
    },
    loadRecommendationFilms: (state, action) => {},
    setRecommendationFilms: (state, action) => {
      state.recommendationFilms = action.payload;
    },
    setFiltersGenres: (state, action) => {
      state.filtersGenre = action.payload;
    },
    setFiltersCountry: (state, action) => {
      state.filtersCountry = action.payload;
    },
    setAllFilters: (state, acton) => {
      state.allFilters = acton.payload;
    },
  },
});

export const {
  setActiveTabLink,
  setIsVisibleSidebar,
  setIsVisibleFormSelect,
  loadAllFilms,
  setAllFilms,
  loadFilm,
  setSingleFilm,
  setSingleFilmLoading,
  setMainPageLoading,
  setDirectorForSingleFilm,
  setWriterForSingleFilm,
  setActorsForSingleFilm,
  setSearchOfFilms,
  searchOfFilms,
  setFavoriteFilms,
  setRecommendationFilms,
  loadRecommendationFilms,
  setFiltersGenres,
  setFiltersCountry,
  setAllFilmsMore,
  setTrendFilms,
  setTrendFilmsMore,
  setAllFilters,
  setFilteredFilms,
  setFilterStatus,
  setSearchedStatus,
} = filmsSlice.actions;
export default filmsSlice.reducer;
export const FilmsSelector = {
  getActiveTabLink: (state: any) => state.films.activeTabLink,
  getIsVisibleSidebar: (state: any) => state.films.isVisibleSidebar,
  getIsVisibleFormSelect: (state: any) => state.films.isUnVisibleFormSelect,
  getAllFilms: (state: any) => state.films.allFilms,
  getTrendFilms: (state: any) => state.films.allTrendFilms,
  getSingleFilm: (state: any) => state.films.singleFilm,
  getSingleFilmLoading: (state: any) => state.films.singleFilmLoading,
  getMainPageLoading: (state: any) => state.films.mainPageLoading,
  getDirectorForSingleFilm: (state: any) => state.films.directorForSingleFilm,
  getWriterForSingleFilm: (state: any) => state.films.writerForSingleFilm,
  getActorsForSingleFilm: (state: any) => state.films.actorsForSingleFilm,
  getSearchedFilms: (state: any) => state.films.searchedFilms,
  getFavoriteFilms: (state: any) => state.films.favoriteFilms,
  getRecommendationFilms: (state: any) => state.films.recommendationFilms,
  getFiltersGenres: (state: any) => state.films.filtersGenre,
  getFiltersCountry: (state: any) => state.films.filtersCountry,
  getAllFilters: (state: any) => state.films.allFilters,
  getFilteredFilms: (state: any) => state.films.filteredFilms,
  getFilterStatus: (state: any) => state.films.isFiltered,
  getSearchedStatus: (state: any) => state.films.isSearched,
};
