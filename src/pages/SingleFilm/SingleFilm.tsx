import React from "react";
import "./SingleFilm.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { CardTypes } from "../../common/types";
import Button from "../../components/Button";
import ImdbLogoSVG from "../../components/assets/ImdbLogoSVG";
import Carousel from "../../components/Carousel";

const SingleFilm = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

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
    imdbID: "tt3896197",
    Type: "movie",
    DVD: "22 Aug 2017",
    BoxOffice: "$389,813,101",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  };

  const re = /,/gi;
  const genreForRender = MOCK_DATA.Genre.replace(re, " •");

  return (
    <div>
      <div
        className={classnames(
          "singlePageContainer",
          isDarkTheme ? "singlePageContainerDark" : "singlePageContainerLight"
        )}
      >
        <div className="singlePagePoster">
          <img
            src={MOCK_DATA.Poster}
            alt={MOCK_DATA.Title}
            className="singlePageImg"
          />
          <div className="singlePageBtns">
            {/* <Button  />
                <Button  /> */}
          </div>
        </div>
        <div className="singlePageFilmInfo">
          <p>{genreForRender}</p>
          <h1 className="singlePageTitle">{MOCK_DATA.Title}</h1>
          <div className="ratingContainer">
            <div
              className={classnames("singlePageCardRating", {
                ["singlePageCardRatingHigh"]: MOCK_DATA.imdbRating > 6,
                ["singlePageCardRatingAverage"]:
                  MOCK_DATA.imdbRating < 6 && MOCK_DATA.imdbRating > 4,
                ["singlePageCardRatingLow"]: MOCK_DATA.imdbRating < 4,
              })}
            >
              {MOCK_DATA.imdbRating}
            </div>
            <div className={classnames("singlePageImdbRating")}>
              <ImdbLogoSVG /> {MOCK_DATA.imdbRating}
            </div>
            <div className="singlePageRuntime">{MOCK_DATA.Runtime}</div>
          </div>
          <p>{MOCK_DATA.Plot}</p>
          <table className="singlePageTable">
            <tr>
              <td>Year</td>
              <td className="singlePageTableInfo">{MOCK_DATA.Year}</td>
            </tr>
            <tr>
              <td>Released</td>
              <td className="singlePageTableInfo">{MOCK_DATA.Released}</td>
            </tr>
            <tr>
              <td>BoxOffice</td>
              <td className="singlePageTableInfo">{MOCK_DATA.BoxOffice}</td>
            </tr>{" "}
            <tr>
              <td>Country</td>
              <td className="singlePageTableInfo">{MOCK_DATA.Country}</td>
            </tr>{" "}
            <tr>
              <td>Production</td>
              <td className="singlePageTableInfo">{MOCK_DATA.Production}</td>
            </tr>{" "}
            <tr>
              <td>Actors</td>
              <td className="singlePageTableInfo">{MOCK_DATA.Actors}</td>
            </tr>{" "}
            <tr>
              <td>Director</td>
              <td className="singlePageTableInfo">{MOCK_DATA.Director}</td>
            </tr>{" "}
            <tr>
              <td>Writer</td>
              <td className="singlePageTableInfo">{MOCK_DATA.Writer}</td>
            </tr>
          </table>
          <h2>
          Recommendations
          </h2>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default SingleFilm;
