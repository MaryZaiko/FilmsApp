import React from "react";
import "./UserNameHeader.css";
import Button from "../Button";
import UserSVG from "../../assets/UserSVG";
import classnames from "classnames";
import ArrowLogOutMenu from "../ArrowLogOutMenu";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useSelector } from "react-redux";
import { AuthSelector } from "../../redux/reducers/authReducer";

const UserNameHeader = () => {
  let isLogin = true;
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const authUserName = useSelector(AuthSelector.getAuthUserName);
  const authUserLastName = useSelector(AuthSelector.getAuthUserLastName);


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
            btnContent={authUserName && authUserLastName && `${authUserName[0]}` + `${authUserLastName[0]}`}
            className="btnUserNameHeader"
          />
          <p>{authUserName} {authUserLastName}</p>
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
