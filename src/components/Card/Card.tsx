import React, { FC } from "react";
import "./Card.css";
import classnames from "classnames";
import CircleSVG from "../assets/CircleSVG";

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
const MOCK_DATA = {
  Title: "Guardians of the Galaxy Vol. 2",
  Year: 2017,
  Rated: "PG-13",
  Released: "05 May 2017",
  Runtime: "136 min",
  Genre: "Action, Adventure, Comedy",
  Director: "James Gunn",
  Writer: "James Gunn, Dan Abnett, Andy Lanning",
  Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
  Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
  Language: "English",
  Country: "United States",
  Awards: "Nominated for 1 Oscar. 15 wins & 59 nominations total",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "7.6/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "85%",
    },
    {
      Source: "Metacritic",
      Value: "67/100",
    },
  ],
  Metascore: 67,
  imdbRating: 7.6,
  imdbVotes: 655.156,
  imdbID: "tt3896198",
  Type: "movie",
  DVD: "22 Aug 2017",
  BoxOffice: "$389,813,101",
  Production: "N/A",
  Website: "N/A",
  Response: "True",
};

const PostCard: FC<PostCardProps> = ({
  imdbID,
  Poster,
  Title,
  Genre,
  Ratings,
}) => {
  const rating = Ratings[0].Value.split("/")[0];
  const re = /,/gi;
  const genreForRender = Genre.replace(re, " •");

  // const imgPost =
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xPwQFMwqQNGPSrW3NBueZixbwKsnVSogOA&usqp=CAU";

  // const { theme } = useThemeContext();
  // const isLightTheme = theme === Theme.Light;

  // const dispatch = useDispatch();

  // const onClickEye = (image: string) => {
  //   dispatch(setSelectedImage(image));
  // };

  // const handleButtonClick = (action: string, e: any) => {
  //   e.stopPropagation();

  //   if (action === LikeStatus.Like || action === LikeStatus.Dislike) {
  //     dispatch(
  //       setLikePost({
  //         id,
  //         action: likeStatus === action ? null : action,
  //         //  isPersonal
  //       })
  //     );
  //   } else if (action === LikeStatus.Save || action === "unset") {
  //     dispatch(setSavedPost({ id, action }));
  //   }
  // };

  return (
    <div className="cardFilm" key={imdbID}>
      <div className="cardContent">
        <img src={Poster} alt={Title} className="cardImg" />
        <h2 className="cardTitle cardTitleLight">{Title}</h2>
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
