import React from "react";
import "./ShareSVG.css";

type ShareSVGType = {
  width?: string;
  height?: string;
  fill?: string;
};

const ShareSVG = ({
  width = "24px",
  height = "29px",
  fill = "none",
}: ShareSVGType) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.54545" cy="11.6363" r="2.54545" stroke="#AFB2B6" strokeWidth="2"/>
    <circle cx="16.4544" cy="6.54545" r="2.54545" stroke="#AFB2B6" strokeWidth="2"/>
    <circle cx="16.4544" cy="16.7273" r="2.54545" stroke="#AFB2B6" strokeWidth="2"/>
    <path d="M14 16L10.0911 13.5455M10.0911 10.5L14 8" stroke="#AFB2B6" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    
  );
};
export default ShareSVG;
