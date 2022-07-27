import React, { useEffect, useState } from "react";
import "./SingleFilm.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import Button from "../../components/Button";
import ImdbLogoSVG from "../../assets/ImdbLogoSVG";
import Carousel from "../../components/Carousel";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FilmsSelector,
  loadFilm,
  setFavoriteFilms,
  loadRecommendationFilms,
} from "../../redux/reducers/filmsReducer";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/Popcorn.json";
import FlagSVG from "../../assets/FlagSVG";
import ShareSVG from "../../assets/ShareSVG";
import EmptyState from "../../components/EmptyState";
import FilmsList from "../../components/FilmsList";

const SingleFilm = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const dispatch = useDispatch();
  const singlePostLoading = useSelector(FilmsSelector.getSingleFilmLoading);
  const filmData = useSelector(FilmsSelector.getSingleFilm);
  const directorName = useSelector(FilmsSelector.getDirectorForSingleFilm);
  const writersNames = useSelector(FilmsSelector.getWriterForSingleFilm);
  const actorsNames = useSelector(FilmsSelector.getActorsForSingleFilm);
  const recommendationFilms = useSelector(FilmsSelector.getRecommendationFilms);
  const [isSaveFilm, setIsSaveFilm] = useState(false);
  const { id } = useParams();
  let isSearchedStatus = useSelector(FilmsSelector.getSearchedStatus);
  const searchedFilms = useSelector(FilmsSelector.getSearchedFilms);
  console.log(writersNames);
  console.log(writersNames.length);


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
      dispatch(loadRecommendationFilms(id));
    }
  }, [id]);

  const onClickSave = (action: string) => {
    isSaveFilm ? setIsSaveFilm(false) : setIsSaveFilm(true);
    console.log(filmData);
  };

  return (
    <div className="singlePageContent">
      {singlePostLoading ? (
        <div className="lottie">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      ) : isSearchedStatus && searchedFilms.length > 0 ? (
        <FilmsList data={searchedFilms} />
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
              <div className="singlePageBtns">
                <Button
                  onClick={() => onClickSave(isSaveFilm ? "unset" : "save")}
                  btnContent={
                    <FlagSVG fill={isSaveFilm ? "#E3DB08" : "#AFB2B6"} />
                  }
                  className="btnSinglePageFlag"
                />
                <Button
                  btnContent={<ShareSVG />}
                  className="btnSinglePageShare"
                />
              </div>
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
                {filmData.rating && (
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
                )}
                {filmData.rating && (
                  <div
                    className={classnames("singlePageImdbRating", {
                      ["singlePageInfoLight"]: !isDarkTheme,
                    })}
                  >
                    <ImdbLogoSVG /> {filmData.rating}
                  </div>
                )}
                {filmData.runtime && (
                  <div
                    className={classnames("singlePageRuntime", {
                      ["singlePageInfoLight"]: !isDarkTheme,
                    })}
                  >
                    {filmData.runtime.toString() + " min"}
                  </div>
                )}
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
                    <td className="singlePageTableInfo">
                      {actorsNames && actorsNames.length > 0
                        ? actorsNames.map((p: any) => `${p.name} `)
                        : "-"}
                    </td>
                  </tr>
                  <tr>
                    <td>Director</td>
                    <td className="singlePageTableInfo">
                      {directorName && directorName.length > 0
                        ? directorName.map((p: any) => `${p.name} `)
                        : "-"}
                    </td>
                  </tr>


                  {/* {writersNames && writersNames.length > 0 && (
                    <tr>
                      <td>Writer</td>
                      <td className="singlePageTableInfo">
                        {writersNames!.map((p: any) => `${p.name} `).join(', ')}
                      </td>
                    </tr>
                  )} */}


                  <tr>
                    <td>Writer</td>
                    <td className="singlePageTableInfo">
                      {writersNames && writersNames.length > 0
                        ? writersNames.map((p: any) => `${p.name} `)
                        : "-"
                        }
                    </td>
                  </tr>
                </tbody>
              </table>
              {recommendationFilms.length > 0 && (
                <div className="sliderWrapper">
                  <h2>Recommendations</h2>
                  <Carousel data={recommendationFilms} />
                </div>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default SingleFilm;
