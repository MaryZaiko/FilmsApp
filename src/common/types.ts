export type RATINGS = {
  Source: string;
  Value: string;
};
export type CardTypes = {
  imdbID: string;
  Poster: string;
  Title: string;
  Genre: string;
  imdbRating: number;
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
