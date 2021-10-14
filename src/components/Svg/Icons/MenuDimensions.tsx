import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <polygon fill="#e9dec2" points="13.05 11.84 9.33 14.07 5.99 12.17 2.94 14 11.43 18.83 18.21 14.78 13.05 11.84"/>
      <polygon fill="#e9dec2" points="8.9 6.14 6.44 7.61 5.46 7.05 2.95 8.55 9.18 12.09 14.15 9.12 8.9 6.14"/>
      <polygon fill="#e9dec2" points="10 3.77 6.36 5.95 1.79 3.35 5.43 1.17 10 3.77"/>
    </Svg>
  );
};

export default Icon;
