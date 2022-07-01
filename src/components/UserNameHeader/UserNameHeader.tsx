import React, { FC, useState } from "react";
import "./UserNameHeader.css";
import Button from "../Button";
import UserSVG from "../assets/UserSVG";
import classnames from "classnames";
import ArrowSVG from "../assets/ArrowSVG";
import LogOutMenu from "../LogOutMenu";
import ArrowLogOutMenu from "../ArrowLogOutMenu";

const UserNameHeader = () => {
  let isLogin = true;

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const onClickArr = (e: any) => {
    isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true);
  };

  return (
    <div className="userNameHeaderContainer userNameHeaderContainerDark">
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
