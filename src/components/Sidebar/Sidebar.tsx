import React, { FC } from "react";
import "./Sidebar.css";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classnames from "classnames";

import Button from "../Button";
import HomeSVG from "../assets/HomeSVG";
import FireSVG from "../assets/FireSVG";
import FlagSVG from "../assets/FlagSVG";
import GearSVG from "../assets/GearSVG";
import Logo from "../Logo";

const Sidebar = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  return (
    <div
      className={classnames(
        "sidebarContainer",
        isDarkTheme ? "sidebarContainerDark" : "sidebarContainerLight"
      )}
    >
      <div className="linksWrapper">
        <a href="#" className="linkSidebar">
          <HomeSVG />
          Home
        </a>
        <a href="#" className="linkSidebar">
          <FireSVG fill="#80858B" />
          Trends
        </a>
        <a href="#" className="linkSidebar">
          <FlagSVG />
          Favorites
        </a>
        <a href="#" className="linkSidebar">
          <GearSVG />
          Settings
        </a>
      </div>
      <span className="sidebarFooter">© All Rights Reserved</span>
    </div>
  );
};

export default Sidebar;
