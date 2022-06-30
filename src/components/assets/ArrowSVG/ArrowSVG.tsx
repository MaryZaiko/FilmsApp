import React from "react";
import "./ArrowSVG.css";

type ArrowSVGType = {
  width?: string;
  height?: string;
  fill?: string;
  className?: string
  onClick?: (e:any)=>void

};

const ArrowSVG = ({
  width = "7px",
  height = "12px",
  fill = "none",
  className,
  onClick
}: ArrowSVGType) => {
  let isFilter = true;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 12"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M1.78087 0.375305C1.43586 -0.055957 0.806567 -0.125878 0.375305 0.219131C-0.055957 0.564141 -0.125878 1.19343 0.219131 1.6247L1.78087 0.375305ZM5 6L5.78087 6.6247L6.28063 6L5.78087 5.3753L5 6ZM0.219131 10.3753C-0.125878 10.8066 -0.055957 11.4359 0.375305 11.7809C0.806567 12.1259 1.43586 12.056 1.78087 11.6247L0.219131 10.3753ZM0.219131 1.6247L4.21913 6.6247L5.78087 5.3753L1.78087 0.375305L0.219131 1.6247ZM4.21913 5.3753L0.219131 10.3753L1.78087 11.6247L5.78087 6.6247L4.21913 5.3753Z"
        fill="#AFB2B6"
      />
    </svg>
  );
};
export default ArrowSVG;
