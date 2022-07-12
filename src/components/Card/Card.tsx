import React, { FC } from "react";
import "./Card.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import FireSVG from "../../assets/FireSVG";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveTabLink } from "../../redux/reducers/filmsReducer";

type PostCardProps = {
  id: number;
  poster: string;
  name: string;
  rating: number;
  isTrends?:boolean
  // date: string;
  // isBig?: boolean;
  // onClick?: (e: any) => void;
  // likeStatus?: LikeStatus | null;
  // saved?: boolean;
};

const DATA = {
  adult: false,
affiliate_link: null,
allow_update: true,
backdrop: "https://image.tmdb.org/t/p/w1280/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
budget: 200000001,
certification: "pg-13",
country: null,
created_at: null,
description: "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
episode_count: 0,
fully_synced: true,
genre: null,
id: 4000,
imdb_id: "tt9419884",
is_series: false,
language: "en",
model_type: "title",
name: "Doctor Strange in the Multiverse of Madness",
original_title: "Doctor Strange in the Multiverse of Madness",
popularity: 7931,
poster: "https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
rating: "7.5",
release_date: "2022-05-04T00:00:00.000000Z",
revenue: 951500000,
runtime: 126,
season_count: 0,
series_ended: false,
show_videos: false,
stream_videos_count: 0,
tagline: "Enter a new dimension of Strange.",
tmdb_id: 453395,
trailer: null,
type: "movie",
updated_at: "2022-07-06T07:26:38.000000Z",
views: 86,
vote_count: 4000,
year: 2022
}


const Card: FC<PostCardProps> = ({
  id,
  poster,
  name,
  rating,
  isTrends
}) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const isTrends = false;

  const onClickCard = (id: string) => {
    navigate(`/films/${id}`);
    dispatch(setActiveTabLink(""));
  };
  return (
    <div className="cardFilm" key={id}
      onClick={() => onClickCard(id.toString())}
      >
      <div className="cardContent">
        <img src={poster} alt={name} className="cardImg" />
        <h2
          className={classnames(
            "cardTitle",
            isDarkTheme ? "cardTitleDark" : "cardTitleLight"
          )}
        >
          {name}
        </h2>
      </div>
      {rating && <div
        className={classnames("cardRating", {
          ["cardRatingHigh"]: +rating > 6,
          ["cardRatingAverage"]: +rating < 6 && +rating > 4,
          ["cardRatingLow"]: +rating < 4,
        }, {['cardTrends']: isTrends})}
      >
        {isTrends && <FireSVG width="10" height="15" fill="#FFFFFF"/>}
        {rating}
      </div>}
    </div>
  );
};

export default Card;
