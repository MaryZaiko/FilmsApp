import React from "react";
import "./Authorization.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import Logo from "../../components/Logo";

const Authorization = ({ children }: any) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  return (
    <div>
      <div
        className={classnames(
          "authorizationPageWrapper",
          isDarkTheme
            ? "authorizationPageWrapperDark"
            : "authorizationPageWrapperLight"
        )}
      >
        <Logo className="authorizationPageLogo" />
        {children}
        <span className="authorizationPageWrapperFooter">
          © All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Authorization;
