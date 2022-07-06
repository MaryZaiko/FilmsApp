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
// type PostCardProps = {
//   imdbID: string;
//   Poster: string;
//   Title: string;
//   Genre: string;
//   Ratings: RATINGS[];
//   // date: string;
//   // isBig?: boolean;
//   // onClick?: (e: any) => void;
//   // likeStatus?: LikeStatus | null;
//   // saved?: boolean;
// };
export enum ActiveTabLinkEnum {
  Home = "home",
  Trends = "trends",
  Favorites = "favorites",
  Settings = "settings",
}
