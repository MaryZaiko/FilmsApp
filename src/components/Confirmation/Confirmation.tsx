import React, { useState, FC, useEffect } from "react";

import "./Confirmation.css";
import classnames from "classnames";
import Input from "../Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import Button from "../Button";
import { NavLink } from "react-router-dom";
import { registerUser } from "../../redux/reducers/authReducer";

const Confirmation = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  

  return (
    <div
      className={classnames(
        "confirmationWrapper",
        isDarkTheme
          ? "confirmationWrapperDark"
          : "confirmationWrapperLight"
      )}
    >
     <h2>Welcome!</h2>
     <p>
     <NavLink to="/auth">Sign In</NavLink>
     please in your account.

     </p>

    
    </div>
  );
};
export default Confirmation;
