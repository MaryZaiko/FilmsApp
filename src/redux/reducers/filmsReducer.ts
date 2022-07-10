import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardTypes } from "../../common/types";

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
  singleFilm:any;
  singleFilmLoading: boolean;
};

const initialState = {
  activeTabLink: "home",
  isVisibleSidebar: false,
  isUnVisibleFormSelect: true,
  allFilms: [],
  singleFilm: null,
  singleFilmLoading:false,
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
    loadAllFilms: (state, action) => {},
    setAllFilms: (state, action) => {
      state.allFilms = action.payload;
    },
    loadFilm: (state, action) => {},
    setSingleFilm:(state, action) =>{
      state.singleFilm = action.payload;

    },
    setSingleFilmLoading:(state, action) =>{
      state.singleFilmLoading= action.payload;

    },
  },
});

export const {
  setActiveTabLink,
  setIsVisibleSidebar,
  setIsVisibleFormSelect,
  loadAllFilms,
  setAllFilms,
  loadFilm,setSingleFilm,setSingleFilmLoading
} = filmsSlice.actions;
export default filmsSlice.reducer;
export const FilmsSelector = {
  getActiveTabLink: (state: any) => state.films.activeTabLink,
  getIsVisibleSidebar: (state: any) => state.films.isVisibleSidebar,
  getIsVisibleFormSelect: (state: any) => state.films.isUnVisibleFormSelect,
  getAllFilms: (state: any) => state.films.allFilms,
  getSingleFilm: (state:any) => state.films.singleFilm,
  getSingleFilmLoading:(state:any)=> state.films.singleFilmLoading
};
