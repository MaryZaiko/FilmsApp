import React from "react";
import "./LoginForm.css";
import classnames from "classnames";
import Input from "../Input";

import { Theme, useThemeContext } from "../../context/themeModeContext";
import Button from "../Button";

const LoginForm = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  return (
    <div
      className={classnames(
        "loginFormWrapper",
        isDarkTheme ? "loginFormWrapperDark" : "loginFormWrapperLight"
      )}
    >
      <form className="loginForm">
        <span className="formTitle">Sing In</span>
        <div className="inputWrapper">
          <label className="settingsInputWrapper">
            <span>Email</span>
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
            <span>Password</span>
            <Input
              type={"text"}
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
      <Button btnContent={"Sign in"} className={classnames("btnAuth")} />
      <span className="loginFormFooter">Don’t have an account? <a href="#">Sign Up</a> </span>
    </div>
  );
};
export default LoginForm;
