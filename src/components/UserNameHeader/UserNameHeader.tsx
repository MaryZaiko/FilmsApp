import React, { FC } from "react";
import "./UserNameHeader.css";
import Button from "../Button";

const UserNameHeader = () => {
  return (
    <div className="userNameHeaderContainer userNameHeaderContainerDark">
      {/* класс зависит от темы */}

      <Button btnContent={"AL"} className="btnUserNameHeader" />
      <p>Artem Lapitsky</p>
    </div>
  );
};

export default UserNameHeader;
