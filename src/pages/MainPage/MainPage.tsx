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
  useEffect(() => {
    dispatch(loadAllFilms(""));
  }, []);

  const allFilms = useSelector(FilmsSelector.getAllFilms);
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
      ) : (
        isActivePage === ActiveTabLinkEnum.Home && (
          <FilmsList data={allFilms} isTrends={isTrends} />
        )
      )}
    </div>
  );
};

export default MainPage;
