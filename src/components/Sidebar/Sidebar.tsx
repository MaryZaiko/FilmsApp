import React, { FC } from "react";
import "./Sidebar.css";
import Button from "../Button";
import HomeSVG from "../assets/HomeSVG";
import FireSVG from "../assets/FireSVG";
import FlagSVG from "../assets/FlagSVG";
import GearSVG from "../assets/GearSVG";
import Logo from "../Logo";

const Sidebar = () => {
  return (
    <div className="SidebarContainer SidebarContainerDark">
    <Logo className='logoSidebar'/>
   
      <a href="#" className="linkSidebar">
        <HomeSVG />
         Home
      </a>
      <a href="#" className="linkSidebar">
        <FireSVG />
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
  );
};

export default Sidebar;
