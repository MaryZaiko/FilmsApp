import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export type RegisterUser = {
//   name: string;
//   email: string;
//   password: string;
//   callback: () => void;
// };

export type FilmsReducerStateType = {
  activeTabLink: string;
  isVisibleSidebar: boolean;
};

const initialState = {
  activeTabLink: "home",
  isVisibleSidebar: false,
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
  },
});

export const { setActiveTabLink,setIsVisibleSidebar } = filmsSlice.actions;
export default filmsSlice.reducer;
export const FilmsSelector = {
  getActiveTabLink: (state: any) => state.films.activeTabLink,
  getIsVisibleSidebar:(state:any) => state.films.isVisibleSidebar
};
