import React, { FC, useEffect } from "react";
import "./MainPage.css";
import FilmsList from "../../components/FilmsList";
import PagesWrapper from "../../components/PagesWrapper";
import { useDispatch, useSelector } from "react-redux";


import classnames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { CardTypes,ActiveTabLinkEnum } from "../../common/types";
import { FilmsSelector, loadAllFilms } from "../../redux/reducers/filmsReducer";

type MainPageProps = {
  isTrends?:boolean
};


const MainPage: FC<MainPageProps> = ({isTrends}) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const dispatch = useDispatch();
  const isActivePage = useSelector(FilmsSelector.getActiveTabLink);


  useEffect(() => {

    dispatch(
      loadAllFilms('')
    );
  }, []);

  const allFilms = useSelector(FilmsSelector.getAllFilms)
  return (<div>
    {/* <PagesWrapper /> */}
    <div className={classnames('mainPageWrapper', isDarkTheme ?  'mainPageWrapperDark' : 'mainPageWrapperLight')} >
    {isActivePage === ActiveTabLinkEnum.Home &&  <FilmsList data={allFilms} isTrends={isTrends} />}
    </div>
  </div>
   
  );
};

export default MainPage;
