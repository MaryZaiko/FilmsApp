import React from "react";
import "./Authorization.css";
import classnames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import Logo from "../../components/Logo";
import RegistrationForm from "../../components/RegistrationForm";

// type SingInProps = {
//   data: CardTypes[];
// };

const Authorization = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  return (
    <div>
      {/* <PagesWrapper /> */}
      <div
        className={classnames(
          "authorizationPageWrapper",
          isDarkTheme
            ? "authorizationPageWrapperDark"
            : "authorizationPageWrapperLight"
        )}
      >
        <Logo className="authorizationPageLogo" />

        {/* <SingInForm /> */}
        <RegistrationForm />

        <span className="authorizationPageWrapperFooter">
          © All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Authorization;
