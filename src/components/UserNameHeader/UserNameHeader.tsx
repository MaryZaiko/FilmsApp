import React, { FC, useState } from "react";
import "./UserNameHeader.css";
import Button from "../Button";
import UserSVG from "../../assets/UserSVG";
import classnames from "classnames";

import LogOutMenu from "../LogOutMenu";
import ArrowLogOutMenu from "../ArrowLogOutMenu";
import { Theme, useThemeContext } from "../../context/themeModeContext";


const UserNameHeader = () => {
  let isLogin = true;
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const onClickArr = (e: any) => {
    isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true);
  };

  return (
    <div className={classnames("userNameHeaderContainer", isDarkTheme ? "userNameHeaderContainerDark" : 'userNameHeaderContainerLight')}>
      {/* класс зависит от темы */}
      {isLogin ? (
        <div className="userNameHeaderContent">
          <Button btnContent={"AL"} className="btnUserNameHeader" />
          <p>Artem Lapitsky</p>
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
