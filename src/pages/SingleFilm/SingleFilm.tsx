import React, { useEffect } from "react";
import "./SingleFilm.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { CardTypes } from "../../common/types";
import Button from "../../components/Button";
import ImdbLogoSVG from "../../assets/ImdbLogoSVG";
import Carousel from "../../components/Carousel";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FilmsSelector, loadFilm } from "../../redux/reducers/filmsReducer";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/Popcorn.json";

const SingleFilm = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const dispatch = useDispatch();
  const { id } = useParams();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    if (id) {
      dispatch(loadFilm(id));
    }
  }, [id]);
  const singlePostLoading = useSelector(FilmsSelector.getSingleFilmLoading);
  const MOCK_DATA = useSelector(FilmsSelector.getSingleFilm);

  // const genreForRender = MOCK_DATA.genres
  //   .map((item: { name: string | any[]; }) => item.name[0].toUpperCase() + item.name.slice(1))
  //   .join(" • ");
  // const dataReleaseForRender = MOCK_DATA.release_date
  //   .slice(0, 10)
  //   .split("-")
  //   .reverse()
  //   .join("-");
  // const getBoxOffice = MOCK_DATA.revenue.toString() + " $";
  // const getDirector = MOCK_DATA.credits;

  return (
    <div>
      {singlePostLoading && (
        <Lottie options={defaultOptions} height={400} width={400} />
      )}
      {MOCK_DATA && (
        <div
          className={classnames(
            "singlePageWrapper",
            isDarkTheme ? "singlePageWrapperDark" : "singlePageWrapperLight"
          )}
        >
          <div className="singlePagePoster">
            <img
              src={MOCK_DATA.poster}
              alt={MOCK_DATA.name}
              className="singlePageImg"
            />
            {/* <div className="singlePageBtns">
            <Button  />
                <Button  />
          </div> */}
          </div>
          <div className="singlePageFilmInfo">
            <p>
              {MOCK_DATA.genres
                .map(
                  (item: { name: string | any[] }) =>
                    item.name[0].toUpperCase() + item.name.slice(1)
                )
                .join(" • ")}
            </p>
            <h1 className="singlePageTitle">{MOCK_DATA.name}</h1>
            <div className="ratingWrapper">
              <div
                className={classnames("singlePageCardRating", {
                  ["singlePageCardRatingHigh"]: +MOCK_DATA.rating > 6,
                  ["singlePageCardRatingAverage"]:
                    +MOCK_DATA.rating < 6 && +MOCK_DATA.rating > 4,
                  ["singlePageCardRatingLow"]: +MOCK_DATA.rating < 4,
                })}
              >
                {MOCK_DATA.rating}
              </div>
              <div className={classnames("singlePageImdbRating")}>
                <ImdbLogoSVG /> {MOCK_DATA.rating}
              </div>
              <div className="singlePageRuntime">{MOCK_DATA.runtime}</div>
            </div>
            <p>{MOCK_DATA.description}</p>
            <table className="singlePageTable">
              <tbody>
                <tr>
                  <td>Year</td>
                  <td className="singlePageTableInfo">{MOCK_DATA.year}</td>
                </tr>
                <tr>
                  <td>Released</td>
                  <td className="singlePageTableInfo">
                    {MOCK_DATA.release_date
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join("-")}
                  </td>
                </tr>
                <tr>
                  <td>BoxOffice</td>
                  <td className="singlePageTableInfo">{MOCK_DATA.revenue}</td>
                </tr>
                <tr>
                  <td>Actors</td>
                  <td className="singlePageTableInfo">{MOCK_DATA.Actors}</td>
                </tr>
                <tr>
                  <td>Director</td>
                  {/* <td className="singlePageTableInfo">{getDirector}</td> */}
                </tr>
                <tr>
                  <td>Writer</td>
                  {/* <td className="singlePageTableInfo">{getWriter}</td> */}
                </tr>
              </tbody>
            </table>
            <h2>Recommendations</h2>
            {/* <Carousel /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleFilm;
