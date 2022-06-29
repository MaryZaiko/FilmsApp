import React, { FC } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import Input from "../Input";
import Logo from "../Logo";
import Button from "../Button";
import UserNameHeader from "../UserNameHeader";
import Sidebar from "../Sidebar";
import FilterSVG from "../assets/FilterSVG";

const Header = () => {
  return (
    <div className="headerContainer headerContainerDark">
      <Logo className = 'logoHeader'/>
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
        btnContent={<FontAwesomeIcon icon={faBars} />}
        className="btnUserNameHeader btnUserNameHeaderMenu"
      />
      <UserNameHeader />
      <Button
        className="btnHeaderArrow"
        btnContent={<FontAwesomeIcon className="" icon={faAngleDown} />}
      />
    </div>
  );
};

export default Header;
