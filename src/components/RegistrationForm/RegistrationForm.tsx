import React from "react";
import "./RegistrationForm.css";
import classnames from "classnames";
import Input from "../Input";

import { Theme, useThemeContext } from "../../context/themeModeContext";
import Button from "../Button";

const RegistrationForm = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  return (
    <div
      className={classnames(
        "registrationFormWrapper",
        isDarkTheme
          ? "registrationFormWrapperDark"
          : "registrationFormWrapperLight"
      )}
    >
      <form className="registrationForm">
        <span className="formTitle">Sing Up</span>
        <div className="inputWrapper">
          <label className="settingsInputWrapper">
            <span>Name</span>
            <Input
              type={"text"}
              placeholder={"Your name"}
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
              placeholder={"Your email"}
              className={classnames(
                "inputSettings",
                isDarkTheme ? "inputDark" : "inputLight"
              )}
            />
          </label>
          <label className="settingsInputWrapper">
            <span>Password</span>
            <Input
              type={"text"}
              placeholder={"Your password"}
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
              placeholder={"Confirm password"}
              className={classnames(
                "inputSettings",
                isDarkTheme ? "inputDark" : "inputLight"
              )}
            />
          </label>
        </div>
      </form>
      <Button
        btnContent={"Sign up"}
        className={classnames("btnAuth")}
      />
      <span className="loginFormFooter">
        Already have an account?
        <a href="#">Sign In</a>{" "}
      </span>
    </div>
  );
};
export default RegistrationForm;
