import React from "react";
import "./CircleSVG.css";

type CircleSVGType = {
  width?: string;
  height?: string;
  fill?: string;
};

const CircleSVG = ({
  width = "4px",
  height = "4px",
  fill = "none",
}: CircleSVGType) => {
  let isFilter = true;

  return (
    <svg width={width} height={height} viewBox="0 0 4 4" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <circle cx="2" cy="2" r="2" fill="#AFB2B6"/>
    </svg>
    
  );
};
export default CircleSVG;
