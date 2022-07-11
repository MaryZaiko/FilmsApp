import React, { useEffect, useState } from "react";

import "./LoginForm.css";
import classnames from "classnames";
import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import Button from "../Button";
import { NavLink } from "react-router-dom";
import { AuthSelector, loginUser } from "../../redux/reducers/authReducer";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/Popcorn.json";

const LoginForm = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailErr, setEmailErr] = useState("This field must not be empty");

  const [password, setPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordErr, setPasswordErr] = useState(
    "This field must not be empty"
  );

  const [formValid, setFormValid] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (emailErr || passwordErr) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailErr, passwordErr]);

  const emailHandler = (e: any) => {
    setEmail(e.target.value);

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailErr("Email is not correct");
    } else {
      setEmailErr("");
    }
  };

  const passwordHandler = (e: any) => {
    setPassword(e.target.value);

    if (e.target.value.length < 8 || e.target.value.length > 15) {
      setPasswordErr(
        "Password must contain at least 8 symbols and no more than 15 symbols"
      );
      if (!e.target.value) {
        setPasswordErr("This field must not be empty");
      }
    } else {
      setPasswordErr("");
    }
  };

  //!!??? не типизируется этот ивент
  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(loginUser({ email, password, token_name: "desktop" }));
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const isLoginUserLoading = useSelector(AuthSelector.getIsLoginUserLoading)
  return (
    <div
      className={classnames(
        "loginFormWrapper",
        isDarkTheme ? "loginFormWrapperDark" : "loginFormWrapperLight"
      )}
    >
{
  isLoginUserLoading ? (
    <div className="lottie">
    <Lottie options={defaultOptions} height={400} width={400} />
  </div>
  ):(
<div>
<form className="loginForm">
        <span className="formTitle">Sing In</span>
        <div className="inputWrapper">
          <label className="settingsInputWrapper">
            {emailDirty && emailErr && (
              <div style={{ color: "red" }}>{emailErr}</div>
            )}
            <span>Email</span>
            <Input
              value={email}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => emailHandler(e)}
              type="email"
              name="email"
              placeholder={"Your email"}
              className={classnames(
                "inputSettings",
                isDarkTheme ? "inputDark" : "inputLight"
              )}
            />
          </label>
          <label className="settingsInputWrapper">
            {passwordDirty && passwordErr && (
              <div style={{ color: "red" }}>{passwordErr}</div>
            )}
            <span>Password</span>
            <Input
              value={password}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => passwordHandler(e)}
              type="password"
              name="password"
              placeholder={"Your password"}
              className={classnames(
                "inputSettings",
                isDarkTheme ? "inputDark" : "inputLight"
              )}
            />
            <span>Forgot password?</span>
          </label>
          <Button
          onClick={onSubmit}
        disabled={!formValid}
        btnContent={"Sign in"}
        className={classnames("btnAuth")}
      />
        </div>
      </form>
    
      <span className="loginFormFooter">
        Don’t have an account? <NavLink to="/registration">Sign Up</NavLink>{" "}
      </span>
</div>
  )
}

     
    </div>
  );
};
export default LoginForm;
