import React,{FC} from "react";
import "./LogOutMenu.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/authReducer";


type LogOutMenuProps = {
  className?:string;
}


const LogOutMenu: FC <LogOutMenuProps> = ({className}) => {
  const dispatch = useDispatch()
  const onClickLogOut = ()=>{
    dispatch(logout(''))
  }
  return (
<div className={className}>
 <ul>
  <li>Edit profile</li>
  <li onClick={onClickLogOut}>Log Out</li>
 </ul>
</div>
  )
};

export default LogOutMenu
