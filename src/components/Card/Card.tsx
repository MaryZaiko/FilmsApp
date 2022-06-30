import React, { FC } from "react";
import "./Card.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "./../../context/themeModeContext";

type RATINGS = {
  Source: string;
  Value: string;
};

type PostCardProps = {
  imdbID: string;
  Poster: string;
  Title: string;
  Genre: string;
  Ratings: RATINGS[];
  // date: string;
  // isBig?: boolean;
  // onClick?: (e: any) => void;
  // likeStatus?: LikeStatus | null;
  // saved?: boolean;
};

const PostCard: FC<PostCardProps> = ({
  imdbID,
  Poster,
  Title,
  Genre,
  Ratings,
}) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  const rating = Ratings[0].Value.split("/")[0];
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
          ["cardRatingHigh"]: +rating > 6,
          ["cardRatingAverage"]: +rating < 6 && +rating > 4,
          ["cardRatingLow"]: +rating < 4,
        })}
      >
        {rating}
      </div>
    </div>
  );
};

export default PostCard;
