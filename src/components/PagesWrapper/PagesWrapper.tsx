import React, { FC } from "react";
import "./PagesWrapper.css";
import classnames from "classnames";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { Theme, useThemeContext } from "../../context/themeModeContext";

const PagesWrapper: FC<any> = ({children}) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  return (
    <div className={classnames("pagesWrapperContainer", isDarkTheme ? "pagesWrapperDark": 'pagesWrapperLight')}>
      <Header />
      <div className="contentWrapper contentWrapperVisible">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default PagesWrapper;
