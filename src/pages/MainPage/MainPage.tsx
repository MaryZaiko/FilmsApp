import React, { FC } from "react";
import "./MainPage.css";
import FilmsList from "../../components/FilmsList";

import classnames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { CardTypes } from "../../common/types";

type MainPageProps = {
  data: CardTypes[];
};

const MainPage: FC<MainPageProps> = ({data}) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  

  return (
    <div className={classnames('mainPageContainer', isDarkTheme ?  'mainPageContainerDark' : 'mainPageContainerLight')} >
      <FilmsList data={data} />
    </div>
  );
};

export default MainPage;
