import React from "react";
import "./Sidebar.css";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActiveTabLinkEnum } from "../../common/types";
import HomeSVG from "../../assets/HomeSVG";
import FireSVG from "../../assets/FireSVG";
import FlagSVG from "../../assets/FlagSVG";
import GearSVG from "../../assets/GearSVG";
import {
  FilmsSelector,
  setActiveTabLink,
} from "../../redux/reducers/filmsReducer";

const Sidebar = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const isVisible = useSelector(FilmsSelector.getIsVisibleSidebar);
  const dispatch = useDispatch();

  const onClickActiveLink = (value: string) => {
    console.log(value);

    dispatch(setActiveTabLink(value));
  };
  const isActive = useSelector(FilmsSelector.getActiveTabLink);

  return (
    <div
      className={classnames(
        "sidebarWrapper",
        isDarkTheme ? "sidebarWrapperDark" : "sidebarWrapperLight",
        { ["sidebarWrapperVisible"]: isVisible }
      )}
    >
      <div className="linksWrapper">
        <NavLink
          to="/films"
          className={classnames("linkSidebar", {
            ["linkActive"]: isActive === ActiveTabLinkEnum.Home,
          })}
          onClick={() => onClickActiveLink(ActiveTabLinkEnum.Home)}
        >
          <HomeSVG
            fill={isActive === ActiveTabLinkEnum.Home ? "#7B61FF" : "#80858B"}
          />
          Home
        </NavLink>
        <NavLink
          to="/trends"
          className={classnames("linkSidebar", {
            ["linkActive"]: isActive === ActiveTabLinkEnum.Trends,
          })}
          onClick={() => onClickActiveLink(ActiveTabLinkEnum.Trends)}
        >
          <FireSVG
            fill={isActive === ActiveTabLinkEnum.Trends ? "#7B61FF" : "#80858B"}
          />
          Trends
        </NavLink>
        <NavLink
          to="/favorites"
          className={classnames("linkSidebar", {
            ["linkActive"]: isActive === ActiveTabLinkEnum.Favorites,
          })}
          onClick={() => onClickActiveLink(ActiveTabLinkEnum.Favorites)}
        >
          <FlagSVG
            fill={
              isActive === ActiveTabLinkEnum.Favorites ? "#7B61FF" : "#80858B"
            }
          />
          Favorites
        </NavLink>
        <NavLink
          to="/settings"
          className={classnames("linkSidebar", {
            ["linkActive"]: isActive === ActiveTabLinkEnum.Settings,
          })}
          onClick={() => onClickActiveLink(ActiveTabLinkEnum.Settings)}
        >
          <GearSVG
            fill={
              isActive === ActiveTabLinkEnum.Settings ? "#7B61FF" : "#80858B"
            }
          />
          Settings
        </NavLink>
      </div>
      <span className="sidebarFooter">© All Rights Reserved</span>
    </div>
  );
};

export default Sidebar;
