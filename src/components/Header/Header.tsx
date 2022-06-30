import React, { FC, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import Input from "../Input";
import Logo from "../Logo";
import Button from "../Button";
import UserNameHeader from "../UserNameHeader";
import Sidebar from "../Sidebar";
import FilterSVG from "../assets/FilterSVG";
import ArrowSVG from "../assets/ArrowSVG";
import classnames from "classnames";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  const onClickArr = (e: any) => {

    isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true);
  };
  const onClickBurgerMenu = (e: any) => {

    isOpenBurgerMenu ? setIsOpenBurgerMenu(false) : setIsOpenBurgerMenu(true);
  };
  return (
    <div className="headerContainer headerContainerDark">
      <Logo className="logoHeader" />
      <form className="formInput">
        <Input
          type="text"
          placeholder="Search"
          className="inputSearch inputSearchDark"
        />
        <div className="iconInput iconInputDark">
          <FilterSVG />
        </div>
      </form>

      <Button
        onClick={onClickBurgerMenu}
        btnContent={
          // <FontAwesomeIcon icon={faXmark} />

          isOpenBurgerMenu ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )
        }
        className="btnUserNameHeader btnUserNameHeaderMenu"
      />
      <UserNameHeader />
      <Button
        className="btnHeaderArrow"
        btnContent={
          <ArrowSVG
            className={classnames(isOpenMenu ? "arrowRotate" : "arrow")}
            onClick={onClickArr}
          />
        }
      />
    </div>
  );
};

export default Header;
