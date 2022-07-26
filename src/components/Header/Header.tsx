import React, { useEffect, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import Input from "../Input";
import Logo from "../Logo";
import Button from "../Button";
import UserNameHeader from "../UserNameHeader";
import FilterSVG from "../../assets/FilterSVG";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  FilmsSelector,
  setIsVisibleSidebar,
  setIsVisibleFormSelect,
  searchOfFilms,
  setSearchedStatus,
} from "../../redux/reducers/filmsReducer";
import { useNavigate } from "react-router-dom";
import FormSelect from "../FormSelect";

const Header = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const isOpenBurgerMenu = useSelector(FilmsSelector.getIsVisibleSidebar);
  const isVisibleForm = useSelector(FilmsSelector.getIsVisibleFormSelect);

  const onClickBurgerMenu = () => {
    dispatch(
      isOpenBurgerMenu ? setIsVisibleSidebar(false) : setIsVisibleSidebar(true)
    );
  };
  const onClickFiltersIcon = () => {
    dispatch(
      isVisibleForm
        ? setIsVisibleFormSelect(false)
        : setIsVisibleFormSelect(true)
    );
  };
  const onClickLogo = () => {
    navigate("/films");
  };
  const onSearch = (event: any) => {
    if(   event.target.value === '' ){
      dispatch(setSearchedStatus(false));
      setSearch(event.target.value);
    }else{
      setSearch(event.target.value);
    }
  };

  let isFilterStatus = useSelector(FilmsSelector.getFilterStatus);

  useEffect(() => {
    if (search) {
      if (search === "") {
        dispatch(setSearchedStatus(false));
      } else {
        dispatch(searchOfFilms({ search }));
        dispatch(setSearchedStatus(true));
      }
    }
  }, [search]);

  return (
    <div
      className={classnames(
        "headerContainer",
        isDarkTheme ? "headerContainerDark" : "headerContainerLight"
      )}
    >
      <div onClick={onClickLogo}>
        <Logo className="logoHeader" />
      </div>
      <div className="inputWrapper">
        <Input
          value={search}
          type="text"
          placeholder="Search"
          onChange={onSearch}
          className={classnames(
            "inputSearch",
            isDarkTheme ? "inputDark" : "inputLight"
          )}
        />
        <div className={classnames("iconInput")} onClick={onClickFiltersIcon}>
          <FilterSVG
            stroke={isDarkTheme ? "white" : "#AFB2B6"}
            fillActive={isFilterStatus ? "#7B61FF" : "none"}
          />
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
