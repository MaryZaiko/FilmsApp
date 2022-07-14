import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BaseFromTo, CardTypes, SortByTabsEnum } from "../../common/types";

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
  searchedFilms: CardTypes[];
  favoriteFilms: CardTypes[];
  mainPageLoading: boolean;
  singleFilm: CardTypes | null;
  recommendationFilms:CardTypes[] | null;
  directorForSingleFilm: string[];
  writerForSingleFilm: string[];
  actorsForSingleFilm: string[];
  singleFilmLoading: boolean;
  filters: {
    sort:null | SortByTabsEnum;
    genre: string[];
    years:null | BaseFromTo ;
    rating:null | BaseFromTo ;
    countries: string;
  };
  filtersGenre:string;
};

const initialState = {
  activeTabLink: "home",
  isVisibleSidebar: false,
  isUnVisibleFormSelect: true,
  allFilms: [],
  searchedFilms: [],
  mainPageLoading: false,
  singleFilm: null,
  singleFilmLoading: false,
  directorForSingleFilm: [],
  writerForSingleFilm: [],
  actorsForSingleFilm: [],
  favoriteFilms: [],
  recommendationFilms:[],
  filters:{},
  filtersGenre:''
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
    setMainPageLoading: (state, action) => {
      state.mainPageLoading = action.payload;
    },
    loadAllFilms: (state, action) => {},
    setAllFilms: (state, action) => {
      state.allFilms = action.payload
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
    searchOfFilms: (state, action) => {},
    setFavoriteFilms: (state, action) => {
      state.favoriteFilms = action.payload;
    },
    loadRecommendationFilms:(state,action) =>{},
    setRecommendationFilms:(state,action) =>{
      state.recommendationFilms = action.payload
    },
    setFiltersGenres:(state,action) =>{
      state.filtersGenre = action.payload
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
  setFavoriteFilms,setRecommendationFilms,loadRecommendationFilms,setFiltersGenres
} = filmsSlice.actions;
export default filmsSlice.reducer;
export const FilmsSelector = {
  getActiveTabLink: (state: any) => state.films.activeTabLink,
  getIsVisibleSidebar: (state: any) => state.films.isVisibleSidebar,
  getIsVisibleFormSelect: (state: any) => state.films.isUnVisibleFormSelect,
  getAllFilms: (state: any) => state.films.allFilms,
  getSingleFilm: (state: any) => state.films.singleFilm,
  getSingleFilmLoading: (state: any) => state.films.singleFilmLoading,
  getMainPageLoading: (state: any) => state.films.mainPageLoading,
  getDirectorForSingleFilm: (state: any) => state.films.directorForSingleFilm,
  getWriterForSingleFilm: (state: any) => state.films.writerForSingleFilm,
  getActorsForSingleFilm: (state: any) => state.films.actorsForSingleFilm,
  getSearchOfFilms: (state: any) => state.films.searchedFilms,
  getFavoriteFilms: (state: any) => state.films.favoriteFilms,
  getRecommendationFilms:(state:any) =>state.films.recommendationFilms,
  getFiltersGenres:(state:any) => state.films.filtersGenre
};
