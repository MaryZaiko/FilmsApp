import React, { FC } from "react";
import "./PagesWrapper.css";
import classnames from "classnames";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { Theme, useThemeContext } from "../../context/themeModeContext";

const PagesWrapper = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  return (
    <div className={classnames("pagesWrapperContainer", isDarkTheme ? "pagesWrapperDark": 'pagesWrapperLight')}>
      <Sidebar />
    
        <Header />
 
    </div>
  );
};

export default PagesWrapper;
