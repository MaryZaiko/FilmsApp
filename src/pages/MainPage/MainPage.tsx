import React, { FC, useEffect, useState } from "react";
import "./MainPage.css";
import FilmsList from "../../components/FilmsList";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import {ActiveTabLinkEnum } from "../../common/types";
import { FilmsSelector, loadAllFilms } from "../../redux/reducers/filmsReducer";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/Popcorn.json";
import LoaderRing from "../../components/LoaderRing";

type MainPageProps = {
  isTrends?: boolean;
};

const MainPage: FC<MainPageProps> = ({ isTrends }) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const dispatch = useDispatch();
  const isActivePage = useSelector(FilmsSelector.getActiveTabLink);

  const [limit, setLimit] = useState(5);

  const isLoadMore = false;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mainPageLoading = useSelector(FilmsSelector.getMainPageLoading);
  const mainOrder = "release_date:desc";
  const trendOrder = "popularity:desc";

  useEffect(() => {
    if (isActivePage === ActiveTabLinkEnum.Home) {
      dispatch(loadAllFilms({ order: mainOrder }));
    } else if (isActivePage === ActiveTabLinkEnum.Trends) {
      dispatch(loadAllFilms(trendOrder));
    }
  }, [isActivePage]);

  const allFilms = useSelector(FilmsSelector.getAllFilms);
  const searchedFilms = useSelector(FilmsSelector.getSearchOfFilms);
  const favoriteFilms = useSelector(FilmsSelector.getFavoriteFilms);

  return (
    <div
      className={classnames(
        "mainPageWrapper",
        isDarkTheme ? "mainPageWrapperDark" : "mainPageWrapperLight"
      )}
    >
      {mainPageLoading ? (
        <div className="lottie">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      ) : isActivePage === ActiveTabLinkEnum.Home ? (
        <div>
          <FilmsList
            data={searchedFilms.length > 0 ? searchedFilms : allFilms}
            isTrends={isTrends}
          />
          <div className="btnShowMore">
            <span>Show more</span>
            {isLoadMore && <LoaderRing />}
          </div>
        </div>
      ) : isActivePage === ActiveTabLinkEnum.Trends ? (
        <div>
          <FilmsList data={allFilms} isTrends={isTrends} />
          <div className="btnShowMore">
            <span>Show more</span>
            {isLoadMore && <LoaderRing />}
          </div>
        </div>
      ) : (
        <FilmsList data={favoriteFilms} />
      )}
    </div>
  );
};

export default MainPage;
