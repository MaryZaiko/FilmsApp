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
  isTrends?:boolean
};

export interface IOption {
  value:string,
  label: string
}
export enum ActiveTabLinkEnum {
  Home = "home",
  Trends = "trends",
  Favorites = "favorites",
  Settings = "settings",
}
