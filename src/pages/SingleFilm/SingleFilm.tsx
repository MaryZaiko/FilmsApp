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
  const filmData = useSelector(FilmsSelector.getSingleFilm);

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
    <div className="singlePageContent">
      {singlePostLoading ? (
        <div className="lottie">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      ) : (
        filmData && (
          <div
            className={classnames(
              "singlePageWrapper",
              isDarkTheme ? "singlePageWrapperDark" : "singlePageWrapperLight"
            )}
          >
            <div className="singlePagePoster">
              <img
                src={filmData.poster}
                alt={filmData.name}
                className="singlePageImg"
              />
              {/* <div className="singlePageBtns">
            <Button  />
                <Button  />
          </div> */}
            </div>
            <div className="singlePageFilmInfo">
              <p>
                {filmData.genres
                  .map(
                    (item: { name: string | any[] }) =>
                      item.name[0].toUpperCase() + item.name.slice(1)
                  )
                  .join(" • ")}
              </p>
              <h1 className="singlePageTitle">{filmData.name}</h1>
              <div className="ratingWrapper">
                <div
                  className={classnames("singlePageCardRating", {
                    ["singlePageCardRatingHigh"]: +filmData.rating > 6,
                    ["singlePageCardRatingAverage"]:
                      +filmData.rating < 6 && +filmData.rating > 4,
                    ["singlePageCardRatingLow"]: +filmData.rating < 4,
                  })}
                >
                  {filmData.rating}
                </div>
                <div className={classnames("singlePageImdbRating")}>
                  <ImdbLogoSVG /> {filmData.rating}
                </div>
                <div className="singlePageRuntime">{filmData.runtime.toString() + ' min'}</div>
              </div>
              <p>{filmData.description}</p>
              <table className="singlePageTable">
                <tbody>
                  <tr>
                    <td>Year</td>
                    <td className="singlePageTableInfo">{filmData.year}</td>
                  </tr>
                  <tr>
                    <td>Released</td>
                    <td className="singlePageTableInfo">
                      {filmData.release_date
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("-")}
                    </td>
                  </tr>
                  <tr>
                    <td>BoxOffice</td>
                    <td className="singlePageTableInfo">
                      {filmData.revenue
                        ? filmData.revenue.toString() + " $"
                        : "-"}
                    </td>
                  </tr>
                  <tr>
                    <td>Actors</td>
                    <td className="singlePageTableInfo">{filmData.Actors}</td>
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
        )
      )}
    </div>
  );
};

export default SingleFilm;
