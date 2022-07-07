import React, { FC, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import Input from "../Input";
import Logo from "../Logo";
import Button from "../Button";
import UserNameHeader from "../UserNameHeader";
import Sidebar from "../Sidebar";
import FilterSVG from "../../assets/FilterSVG";

import { Theme, useThemeContext } from "../../context/themeModeContext";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  FilmsSelector,
  setIsVisibleSidebar,
} from "../../redux/reducers/filmsReducer";
import { useNavigate } from "react-router-dom";
import FormSelect from "../FormSelect";


const Header = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isOpenBurgerMenu = useSelector(FilmsSelector.getIsVisibleSidebar);
  const onClickBurgerMenu = () => {
    isOpenBurgerMenu ? dispatch(setIsVisibleSidebar(false)) : dispatch(setIsVisibleSidebar(true));
  };
  // const onClickLogo = () =>{
  //   navigate("/films");
  // }
  return (
    <div
      className={classnames(
        "headerContainer",
        isDarkTheme ? "headerContainerDark" : "headerContainerLight"
      )}
    >
      <Logo className="logoHeader"/>
      <div className="inputWrapper">
        <Input
          type="text"
          placeholder="Search"
          className={classnames(
            "inputSearch",
            isDarkTheme ? "inputDark" : "inputLight"
          )}
        />
        <div className={classnames("iconInput")}>
          <FilterSVG stroke={isDarkTheme ? "white" : "#AFB2B6"} />
        </div>
      </div>

      <Button
        onClick={onClickBurgerMenu}
        btnContent={
          isOpenBurgerMenu ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )
        }
        className="btnUserNameHeader btnUserNameHeaderMenu"
      />

      <UserNameHeader />
      <FormSelect />
    </div>
  );
};

export default Header;
