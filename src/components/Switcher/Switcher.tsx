import React from "react";
import "./Switcher.css";
import { Theme, useThemeContext } from "../../context/themeModeContext";


const Switcher = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  const onClickTheme = () => {
    theme === Theme.Dark
      ? onChangeTheme(Theme.Light)
      : onChangeTheme(Theme.Dark);
  };
  return (
    <div className="themeToggle">
    <label className="switch">
      <input type="checkbox" onClick={() => onClickTheme()} />
      <span className="slider"></span>
    </label>
  </div>
  )
};
export default Switcher;
