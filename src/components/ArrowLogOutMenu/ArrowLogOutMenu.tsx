import React, { FC, useState } from "react";
import "./ArrowLogOutMenu.css";
import Button from "../Button";
import UserSVG from "../assets/UserSVG";
import classnames from "classnames";
import ArrowSVG from "../assets/ArrowSVG";
import LogOutMenu from "../LogOutMenu";

const ArrowLogOutMenu = () => {
  let isLogin = true;

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const onClickArr = (e: any) => {
    isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true);
  };

  return (
    <div className="userNameHeaderContainer userNameHeaderContainerDark">
      <Button
        className="btnHeaderArrow"
        btnContent={
          <ArrowSVG
            className={classnames(isOpenMenu ? "arrowRotate" : "arrow")}
            onClick={onClickArr}
          />
        }
      />
      <LogOutMenu className={classnames('logOutMenuContainer', isOpenMenu ? "logOutMenuOpen" : "logOutMenuClose")}/>
    </div>
  );
};

export default ArrowLogOutMenu;
