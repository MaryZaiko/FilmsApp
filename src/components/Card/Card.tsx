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
  isTrends?: boolean;
  isSlider?: boolean;
  // date: string;
  // isBig?: boolean;
  // onClick?: (e: any) => void;
  // likeStatus?: LikeStatus | null;
  // saved?: boolean;
};

const Card: FC<PostCardProps> = ({
  id,
  poster,
  name,
  rating,
  isTrends,
  isSlider,
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
    <div
      className="cardFilm"
      key={id}
      onClick={() => onClickCard(id.toString())}
    >
      <div className="cardContent">
        <img
          src={poster}
          alt={name}
          className={classnames(isSlider ? "cardImgSlider" : "cardImg")}
        />
        <h2
          className={classnames(isSlider ? 'cardTitleSlider' :
            "cardTitle",
            isDarkTheme ? "cardTitleDark" : "cardTitleLight"
          )}
        >
          {name}
        </h2>
      </div>
      {rating && (
        <div
          className={classnames(
            "cardRating",
            {
              ["cardRatingHigh"]: +rating > 6,
              ["cardRatingAverage"]: +rating < 6 && +rating > 4,
              ["cardRatingLow"]: +rating < 4,
            },
            { ["cardTrends"]: isTrends }
          )}
        >
          {isTrends && <FireSVG width="10" height="15" fill="#FFFFFF" />}
          {rating}
        </div>
      )}
    </div>
  );
};

export default Card;
