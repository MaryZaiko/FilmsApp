import React, { FC } from "react";
import "./Card.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";
import FireSVG from "../assets/FireSVG";

type PostCardProps = {
  imdbID: string;
  Poster: string;
  Title: string;
  Genre: string;
  imdbRating: number;
  // date: string;
  // isBig?: boolean;
  // onClick?: (e: any) => void;
  // likeStatus?: LikeStatus | null;
  // saved?: boolean;
};

const Card: FC<PostCardProps> = ({
  imdbID,
  Poster,
  Title,
  Genre,
  imdbRating,
}) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const isTrends = false;

  const re = /,/gi;
  const genreForRender = Genre.replace(re, " •");

  return (
    <div className="cardFilm" key={imdbID}>
      <div className="cardContent">
        <img src={Poster} alt={Title} className="cardImg" />
        <h2
          className={classnames(
            "cardTitle",
            isDarkTheme ? "cardTitleDark" : "cardTitleLight"
          )}
        >
          {Title}
        </h2>
        <p className="cardGenre">{genreForRender}</p>
      </div>
      <div
        className={classnames("cardRating", {
          ["cardRatingHigh"]: +imdbRating > 6,
          ["cardRatingAverage"]: +imdbRating < 6 && +imdbRating > 4,
          ["cardRatingLow"]: +imdbRating < 4,
        }, {['cardTrends']: isTrends})}
      >
        {isTrends && <FireSVG width="10" height="15" fill="#FFFFFF"/>}
        {imdbRating}
      </div>
    </div>
  );
};

export default Card;
