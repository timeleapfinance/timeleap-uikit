import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <path d="M3.96 10 2.56 19 8 19 8 14 12 14 12 19 15.85 19 17.63 10 3.96 10z" fill="#e9dec2" />
      <path d="M17.44 8 19 1.45 1 7.73 1 8 17.44 8z" fill="#e9dec2" />
    </Svg>
  );
};

export default Icon;
