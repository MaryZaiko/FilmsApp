import React, { FC } from "react";
import "./Sidebar.css";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classnames from "classnames";

import { NavLink } from "react-router-dom";
// import { logout, setLogStatus } from "../../redux/reducers/authReducer";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../Button";
import HomeSVG from "../../assets/HomeSVG";
import FireSVG from "../../assets/FireSVG";
import FlagSVG from "../../assets/FlagSVG";
import GearSVG from "../../assets/GearSVG";
import Logo from "../Logo";

const Sidebar = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const isVisible = true;
  return (
    <div
      className={classnames(
        "sidebarWrapper",
        isDarkTheme ? "sidebarWrapperDark" : "sidebarWrapperLight",
        // isVisible ? "sidebarWrapperVisible" : "sidebarWrapperUnVisible"
      )}
    >
      <div className="linksWrapper">
        <NavLink to="/films" className="linkSidebar">
          <HomeSVG />
          Home
        </NavLink>
        <NavLink to="/trends" className="linkSidebar">
          <FireSVG fill="#80858B" />
          Trends
        </NavLink>
        <NavLink to="/favorites" className="linkSidebar">
          <FlagSVG />
          Favorites
        </NavLink>
        <NavLink to="/settings" className="linkSidebar">
          <GearSVG />
          Settings
        </NavLink>
      </div>
      <span className="sidebarFooter">© All Rights Reserved</span>
    </div>
  );
};

export default Sidebar;
