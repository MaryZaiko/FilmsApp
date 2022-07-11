import React, { FC, useState } from "react";
import "./UserNameHeader.css";
import Button from "../Button";
import UserSVG from "../../assets/UserSVG";
import classnames from "classnames";

import LogOutMenu from "../LogOutMenu";
import ArrowLogOutMenu from "../ArrowLogOutMenu";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useSelector } from "react-redux";
import { AuthSelector } from "../../redux/reducers/authReducer";

const UserNameHeader = () => {
  let isLogin = true;
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const authUserName = useSelector(AuthSelector.getAuthUserName);

  return (
    <div
      className={classnames(
        "userNameHeaderContainer",
        isDarkTheme
          ? "userNameHeaderContainerDark"
          : "userNameHeaderContainerLight"
      )}
    >
      {isLogin ? (
        <div className="userNameHeaderContent">
          <Button
            btnContent={authUserName && `${authUserName[0]}`}
            className="btnUserNameHeader"
          />
          <p>{authUserName}</p>
          <ArrowLogOutMenu />
        </div>
      ) : (
        <div className="userNameHeaderContent">
          <Button btnContent={<UserSVG />} className="btnUserNameHeader" />
          <p>Sing in</p>
          <ArrowLogOutMenu />
        </div>
      )}
    </div>
  );
};

export default UserNameHeader;
