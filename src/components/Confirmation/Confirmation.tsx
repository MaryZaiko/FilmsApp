import React from "react";
import "./Confirmation.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { NavLink } from "react-router-dom";

const Confirmation = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  return (
    <div
      className={classnames(
        "confirmationWrapper",
        isDarkTheme ? "confirmationWrapperDark" : "confirmationWrapperLight"
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
