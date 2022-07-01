import React,{FC} from "react";
import "./LogOutMenu.css";

type LogOutMenuProps = {
  className?:string;
}


const LogOutMenu: FC <LogOutMenuProps> = ({className}) => {
  return (
<div className={className}>
 <ul>
  <li>Edit profile</li>
  <li>Log Out</li>
 </ul>
</div>
  )
};

export default LogOutMenu
