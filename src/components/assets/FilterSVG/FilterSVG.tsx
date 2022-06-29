import React from "react";
import "./FilterSVG.css";

type FilterSVGType = {
  width?: string;
  height?: string;
  fill?: string;
};

const FilterSVG = ({
  width = "24px",
  height = "24px",
  fill = "none",
}: FilterSVGType) => {
  let isFilter = true;



  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
 
    >
      <path
        d="M5 6L19 6M10 12H19M14 18H19"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        className={isFilter ? "circleFilter" : "circleFilterNone"}
        cx="3"
        cy="19"
        r="3"
        fill="#7B61FF"
      />
    </svg>
  );
};
export default FilterSVG;
