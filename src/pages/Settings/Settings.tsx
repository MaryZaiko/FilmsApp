import React, { useState } from "react";
import "./Settings.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";

import Input from "../../components/Input";
import Switcher from "../../components/Switcher";
import Button from "../../components/Button";

const Settings = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  return (
    <div
      className={classnames(
        "settingsWrapper",
        isDarkTheme ? "settingsWrapperDark" : "settingsWrapperLight"
      )}
    >
      <div className="settingsProfileWrapper">
        <span>Profile</span>
        <div
          className={classnames(
            " settingsProfileContent",
            isDarkTheme ? "settingsContentDark" : "settingsContentLight"
          )}
        >
          <label className="settingsInputWrapper">
            <span>Name</span>
            <Input
              type={"text"}
              className={classnames(
                "inputSettings",
                isDarkTheme ? "inputDark" : "inputLight"
              )}
            />
          </label>
          <label className="settingsInputWrapper">
            <span>Email</span>
            <Input
              type={"email"}
              className={classnames(
                "inputSettings",
                isDarkTheme ? "inputDark" : "inputLight"
              )}
            />
          </label>
        </div>
      </div>

      <div className="settingsPasswordWrapper">
        <span>Password</span>
        <div
          className={classnames(
            "settingsPasswordContent",
            isDarkTheme ? "settingsContentDark" : "settingsContentLight"
          )}
        >
          <label className="settingsInputWrapper">
            <span>Password</span>
            <Input
              type={"text"}
              placeholder="Your password"
              className={classnames(
                "inputSettings",
                isDarkTheme ? "inputDark" : "inputLight"
              )}
            />
          </label>
          <div className="settingsChangePasswordWrapper">
            <label className="settingsInputWrapper">
              <span>New password</span>
              <Input
                type={"text"}
                placeholder="New password"
                className={classnames(
                  "inputSettings",
                  isDarkTheme ? "inputDark" : "inputLight"
                )}
              />
            </label>
            <label className="settingsInputWrapper">
              <span>Confirm password</span>
              <Input
                type={"text"}
                placeholder="Confirm password"
                className={classnames(
                  "inputSettings",
                  isDarkTheme ? "inputDark" : "inputLight"
                )}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="settingsColorModeWrapper">
        <span>Color Mode</span>
        <div
          className={classnames(
            "settingsColorModeContent",
            isDarkTheme ? "settingsContentDark" : "settingsContentLight"
          )}
        >
          <div>
            <span>{isDarkTheme ? "Dark" : "Light"}</span>
            <p>Use {isDarkTheme ? "dark" : "light"} theme</p>
          </div>
          <Switcher />
        </div>
      </div>
      <div className="btnsWrapper">
        <Button
          btnContent={"Cancel"}
          className={classnames(
            "btnSettingsSort",
            isDarkTheme ? "btnSettingsSortDark" : "btnSettingsSortLight"
          )}
        />
        <Button
          btnContent={"Save"}
          className={classnames(
            "btnSettingsSort",
            isDarkTheme ? "btnSettingsSortDark" : "btnSettingsSortLight"
          )}
        />
      </div>
    </div>
  );
};

export default Settings;
