import React, { FC, useEffect, useState } from "react";
import "./MainPage.css";
import FilmsList from "../../components/FilmsList";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { ActiveTabLinkEnum } from "../../common/types";
import {
  FilmsSelector,
  loadAllFilms,
  setFilterStatus,
  setSearchedStatus,
} from "../../redux/reducers/filmsReducer";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/Popcorn.json";
import LoaderRing from "../../components/LoaderRing";
import Button from "../../components/Button";

type MainPageProps = {
  isTrends?: boolean;
};

const MainPage: FC<MainPageProps> = ({ isTrends }) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const dispatch = useDispatch();
  const isActivePage = useSelector(FilmsSelector.getActiveTabLink);

  const [isShowMore, setIsShowMore] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 5;

  let isFilterStatus = useSelector(FilmsSelector.getFilterStatus);
  let isSearchedStatus = useSelector(FilmsSelector.getSearchedStatus);
  const allFilms = useSelector(FilmsSelector.getAllFilms);
  const trendFilms = useSelector(FilmsSelector.getTrendFilms);
  const searchedFilms = useSelector(FilmsSelector.getSearchedFilms);
  const filteredFilms = useSelector(FilmsSelector.getFilteredFilms);
  const favoriteFilms = useSelector(FilmsSelector.getFavoriteFilms);
  const mainPageLoading = useSelector(FilmsSelector.getMainPageLoading);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const mainOrder = "release_date:desc";

  useEffect(() => {
    if (isActivePage === ActiveTabLinkEnum.Home) {
      dispatch(setFilterStatus(false));
      dispatch(setSearchedStatus(false));
      dispatch(loadAllFilms({ mainOrder, page, perPage, isShowMore }));
    } else if (isActivePage === ActiveTabLinkEnum.Trends) {
      dispatch(setFilterStatus(false));
      dispatch(setSearchedStatus(false));
      dispatch(loadAllFilms({ page, perPage, isShowMore, isTrends }));
    }
  }, [isActivePage, page]);

  const onClickShowMore = () => {
    setPage(page + 1);
    setIsShowMore(true);
  };

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
        <div className="pageContainer">
          <FilmsList
            data={
              searchedFilms.length > 0
                ? searchedFilms
                : filteredFilms.length > 0
                ? filteredFilms
                : allFilms
            }
          />
          {!isFilterStatus && !isSearchedStatus && (
            <Button
              className="btnShowMore"
              onClick={onClickShowMore}
              btnContent="Show more"
            />
          )}
        </div>
      ) : isActivePage === ActiveTabLinkEnum.Trends ? (
        <div>
          <FilmsList data={trendFilms} isTrends={isTrends} />
          <Button
            className="btnShowMore"
            onClick={onClickShowMore}
            btnContent="Show more"
          />
        </div>
      ) : (
        <FilmsList data={favoriteFilms} />
      )}
    </div>
  );
};

export default MainPage;
