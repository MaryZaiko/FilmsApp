import React from "react";
import "./Logo.css";
import LogoImg from "../LogoImg";
import { Theme, useThemeContext } from "../../context/themeModeContext";

const Logo = ({ className }: any) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  return (
    <div className={className}>
      <LogoImg fill={isDarkTheme ? "white" : "black"} />
      {/* //fill зависит от темы */}
    </div>
  );
};
export default Logo;
