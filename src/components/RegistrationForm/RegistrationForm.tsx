import React from "react";
import "./RegistrationForm.css";
import classnames from "classnames";
import Input from "../Input";

import { Theme, useThemeContext } from "../../context/themeModeContext";
import Button from "../Button";

const RegistrationForm = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Light;
  return (
    <div
      className={classnames(
        "egistrationFormWrapper",
        isDarkTheme ? "egistrationFormWrapperDark" : "egistrationFormWrapperLight"
      )}
    >
      <form className="egistrationForm">
        <span className="formTitle">Sing in</span>
        <div className="inputWrapper">
          <label className="settingsInputWrapper">
            <span>Name</span>
            <Input
              type={"text"}
              placeholder={"Your email"}
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
              placeholder={"Your password"}
              className={classnames(
                "inputSettings",
                isDarkTheme ? "inputDark" : "inputLight"
              )}
            />
            <span>Forgot password?</span>
          </label>
        </div>
      </form>
      <Button btnContent={"Sign in"} className={classnames("btnAuth", !isDarkTheme && "btnAuthLight")} />
      <span className="loginFormFooter">Don’t have an account? <a href="#">Sign Up</a> </span>
    </div>
  );
};
export default RegistrationForm;
