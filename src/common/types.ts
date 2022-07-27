export type RATINGS = {
  Source: string;
  Value: string;
};
export type CardTypes = {
  backdrop: string;
  id: number;
  poster: string;
  name: string;
  rating: number;
  isTrends?: boolean;
};

export interface IOption {
  label: string;
  value: string;
}
export enum ActiveTabLinkEnum {
  Home = "home",
  Trends = "trends",
  Favorites = "favorites",
  Settings = "settings",
}
export enum SortByTabsEnum {
  Movie = "movie",
  Series = "series",
}
export type BaseFromTo = {
  from: string;
  to: string;
};
export type FilmInfo = {
  id: number;
  model_type: string;
  name: string;
  pivot: FilmInfoPivot;
  poster: string;
};
type FilmInfoPivot = {
  character: null;
  creditable_id: number;
  creditable_type: string;
  department: string;
  id: number;
  job: string;
  order: number;
  person_id: number;
};
export type AllFilters = {
  sort?: null | SortByTabsEnum;
  genre?: string[];
  years: null | BaseFromTo;
  rating: null | BaseFromTo;
  countries?: string;
};
export type LoadAllFilms = {
  mainOrder: string;
  page: number;
  perPage: number;
  isShowMore?: boolean;
  isTrends?: boolean;

};
