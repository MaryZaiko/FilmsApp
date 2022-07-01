import React from "react";
import "./Settings.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";

import Input from "../../components/Input";
import Switcher from "../../components/Switcher";

const Settings = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  return (
    <div
      className={classnames(
        "settingsContainer",
        isDarkTheme ? "settingsContainerDark" : "settingsContainerLight"
      )}
    >
      <div className="settingsProfileWrapper">
        <span>Profile</span>
        <div className="settingsProfileContent">
          <label className="settingsInputWrapper">
            <span>Name</span>
            <Input type={"text"} />
          </label>
          <label className="settingsInputWrapper">
            <span>Email</span>
            <Input type={"email"} />
          </label>
        </div>
      </div>

      <div className="settingsPasswordWrapper">
        <span>Password</span>
        <div className="settingsPasswordContent">
          <label className="settingsInputWrapper">
            <span>Password</span>
            <Input type={"text"} placeholder="Your password" />
          </label>
          <label className="settingsInputWrapper">
            <span>New password</span>
            <Input type={"text"} placeholder="New password" />
          </label>
          <label className="settingsInputWrapper">
            <span>Confirm password</span>
            <Input type={"text"} placeholder="Confirm password" />
          </label>
        </div>
      </div>

      <div className="settingsColorModeWrapper">
        <span>Color Mode</span>
        <div className="settingsColorModeContent">
          <div>
          <span>{isDarkTheme ? "Dark" : "Light"}</span>
          <p>Use {isDarkTheme ? "dark" : "light"} theme</p>
          </div>
         <Switcher />
        </div>
      </div>
    </div>
  );
};

export default Settings;
