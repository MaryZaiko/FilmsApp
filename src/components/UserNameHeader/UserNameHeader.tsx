import React, { FC } from "react";
import "./UserNameHeader.css";
import Button from "../Button";
import UserSVG from "../assets/UserSVG";

const UserNameHeader = () => {
  let isLogin = true;
  return (
    <div className="userNameHeaderContainer userNameHeaderContainerDark">
      {/* класс зависит от темы */}
      {isLogin ? (
        <div className="userNameHeaderContent">
          <Button btnContent={"AL"} className="btnUserNameHeader" />
          <p>Artem Lapitsky</p>
        </div>
      ) : (
        <div className="userNameHeaderContent">
          <Button btnContent={<UserSVG/>} className="btnUserNameHeader" />
          <p>Sing in</p>
        </div>
      )}
    </div>
  );
};

export default UserNameHeader;
