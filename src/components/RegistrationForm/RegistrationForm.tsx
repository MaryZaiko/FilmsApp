import React, { useState, FC, useEffect } from "react";

import "./RegistrationForm.css";
import classnames from "classnames";
import Input from "../Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import Button from "../Button";
import { NavLink } from "react-router-dom";
import { registerUser } from "../../redux/reducers/authReducer";

const RegistrationForm = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [userNameErr, setUserNameErr] = useState(
    "This field must not be empty"
  );

  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailErr, setEmailErr] = useState("This field must not be empty");

  const [password, setPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordErr, setPasswordErr] = useState(
    "This field must not be empty"
  );

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(
    "This field must not be empty"
  );

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (userNameErr || emailErr || passwordErr || confirmPasswordErr) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [userNameErr, emailErr, passwordErr, confirmPasswordErr]);

  const dispatch = useDispatch();

  //ВОПРОС ПО ТИПИЗАЦИИ

  const userNameHandler = (e: any) => {
    setUserName(e.target.value);
    if (e.target.value.length < 2) {
      setUserNameErr("Name must contain at least 2 symbols");
      if (!e.target.value) {
        setUserNameErr("This field must not be empty");
      }
    } else {
      setUserNameErr("");
    }
  };

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
      setPasswordErr("Password must contain at least 8 and no more than 15");
      if (!e.target.value) {
        setPasswordErr("This field must not be empty");
      }
    } else {
      setPasswordErr("");
    }
  };

  const confirmPasswordHandler = (e: any) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordErr("Password not confirmed");
      if (!e.target.value) {
        setConfirmPasswordErr("This field must not be empty");
      }
    } else {
      setConfirmPasswordErr("");
    }
  };

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case "userName":
        setUserNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;

      case "confirmPassword":
        setConfirmPasswordDirty(true);
        break;
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const callback = () => {
      navigate("/confirm");
    };

    dispatch(
      registerUser({
        first_name: userName,
        email,
        password,
        password_confirmation: confirmPassword,
        token_name: "iphone 12",
        callback
      }
)
    );
  };

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
            {userNameDirty && userNameErr && (
              <div style={{ color: "red" }}>{userNameErr}</div>
            )}
            <span>Name</span>
            <Input
              value={userName}
              onBlur={(e) => blurHandler(e)}
              onChange={userNameHandler}
              type="text"
              name="userName"
              placeholder={"Your name"}
              className={classnames(
                "inputSettings",
                isDarkTheme ? "inputDark" : "inputLight"
              )}
            />
          </label>
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
          </label>
          <label className="settingsInputWrapper">
            {confirmPasswordDirty && confirmPasswordErr && (
              <div style={{ color: "red" }}>{confirmPasswordErr}</div>
            )}
            <span>Confirm password</span>
            <Input
              value={confirmPassword}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => confirmPasswordHandler(e)}
              type="password"
              name="confirmPassword"
              placeholder={"Confirm password"}
              className={classnames(
                "inputSettings",
                isDarkTheme ? "inputDark" : "inputLight"
              )}
            />
          </label>
          <Button
            disabled={!formValid}
            btnContent={"Sign up"}
            className={classnames("btnAuth")}
            onClick={onSubmit}
          />
        </div>
      </form>

      <span className="loginFormFooter">
        Already have an account?
        <NavLink to="/auth">Sign In</NavLink>{" "}
      </span>
    </div>
  );
};
export default RegistrationForm;
