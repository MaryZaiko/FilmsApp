import React, { FC } from "react";
import "./LogOutMenu.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/authReducer";
import { ActiveTabLinkEnum } from "../../common/types";
import { setActiveTabLink } from "../../redux/reducers/filmsReducer";
import { useNavigate } from "react-router-dom";

type LogOutMenuProps = {
  className?: string;
  onClick?: () => void;
};

const LogOutMenu: FC<LogOutMenuProps> = ({ className, onClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogOut = () => {
    dispatch(logout(""));
  };

  const onClockEditProfile = () => {
    dispatch(setActiveTabLink(ActiveTabLinkEnum.Settings));
    navigate("/settings");
  };

  return (
    <div className={className} onClick={onClick}>
      <ul>
        <li onClick={onClockEditProfile}>Edit profile</li>
        <li onClick={onClickLogOut}>Log Out</li>
      </ul>
    </div>
  );
};

export default LogOutMenu;
