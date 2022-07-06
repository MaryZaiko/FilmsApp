import React, { FC } from "react";
import "./MainPage.css";
import FilmsList from "../../components/FilmsList";
import PagesWrapper from "../../components/PagesWrapper";

import classnames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { CardTypes } from "../../common/types";

type MainPageProps = {
  data: CardTypes[];
  isTrends?:boolean
};

const MainPage: FC<MainPageProps> = ({data,isTrends}) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  

  return (<div>
    {/* <PagesWrapper /> */}
    <div className={classnames('mainPageWrapper', isDarkTheme ?  'mainPageWrapperDark' : 'mainPageWrapperLight')} >
      <FilmsList data={data} isTrends={isTrends} />
    </div>
  </div>
   
  );
};

export default MainPage;
