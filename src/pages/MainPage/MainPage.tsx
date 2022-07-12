import React, { FC, useEffect } from "react";
import "./MainPage.css";
import FilmsList from "../../components/FilmsList";
import PagesWrapper from "../../components/PagesWrapper";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { CardTypes, ActiveTabLinkEnum } from "../../common/types";
import { FilmsSelector, loadAllFilms } from "../../redux/reducers/filmsReducer";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/Popcorn.json";

type MainPageProps = {
  isTrends?: boolean;
};

const MainPage: FC<MainPageProps> = ({ isTrends }) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const dispatch = useDispatch();
  const isActivePage = useSelector(FilmsSelector.getActiveTabLink);
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
      dispatch(loadAllFilms(mainOrder));
    } else if (isActivePage === ActiveTabLinkEnum.Trends) {
      dispatch(loadAllFilms(trendOrder));
    }
  }, [isActivePage]);

  const allFilms = useSelector(FilmsSelector.getAllFilms);
  const searchedFilms = useSelector(FilmsSelector.getSearchOfFilms);
  console.log(searchedFilms);

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
        <FilmsList
          data={searchedFilms.length > 0 ? searchedFilms : allFilms}
          isTrends={isTrends}
        />
      ) : isActivePage === ActiveTabLinkEnum.Trends ? (
        <FilmsList data={allFilms} isTrends={isTrends} />
      ) : (
        <FilmsList data={allFilms} />
      )}
    </div>
  );
};

export default MainPage;
