import React from "react";
import "./Logo.css";
import LogoImg from "../LogoImg";

const Logo = ({className}:any) => {
  return (
    <div className={className}>
    <LogoImg fill="white" /> 
    {/* //fill зависит от темы */}
    </div>
  )
};
export default Logo;
