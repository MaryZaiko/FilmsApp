import React, { FC } from "react";
import Input from "../Input";
import Logo from "../Logo";
import Button from "../Button";
import UserNameHeader from "../UserNameHeader";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown,faBars} from '@fortawesome/free-solid-svg-icons'



const Header = () => {
  return (
    <div className="headerContainer headerContainerDark">
      <Logo />
      <Input
        type="text"
        placeholder="Search"
        className="inputSearch inputSearchDark"
      />
       <Button
          btnContent={<FontAwesomeIcon icon={faBars} />}
          className="btnUserNameHeader btnUserNameHeaderMenu"
        />
      <UserNameHeader />
      <Button className="btnHeaderArrow"
        btnContent={<FontAwesomeIcon className="" icon={faAngleDown} />}
      /> 
    </div>
  );
};

export default Header;
