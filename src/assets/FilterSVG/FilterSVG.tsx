import React from "react";
import "./FilterSVG.css";

type FilterSVGType = {
  width?: string;
  height?: string;
  fillActive?: string;
  stroke?:string;
};

const FilterSVG = ({
  width = "24px",
  height = "24px",
  fillActive = "none",
  stroke = 'white'
}: FilterSVGType) => {
  let isFilter = true;



  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill='none'
      xmlns="http://www.w3.org/2000/svg"
 
    >
      <path
        d="M5 6L19 6M10 12H19M14 18H19"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      
      />
      <circle
        className={isFilter ? "circleFilter" : "circleFilterNone"}
        cx="3"
        cy="19"
        r="3"
        fill={fillActive}
      />
    </svg>
  );
};
export default FilterSVG;
