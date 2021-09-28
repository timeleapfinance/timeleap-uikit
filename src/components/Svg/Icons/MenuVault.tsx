import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <polygon fill="#e9dec2" points="3 18 6.17 18 2.55 14.38 3 18"/>
      <polygon fill="#e9dec2" points="17 18 17.42 14.67 14.09 18 17 18"/>
      <polygon fill="#e9dec2" points="11.43 2 10 12 8.57 2 1 2 1.88 9.05 10.13 17.3 18.08 9.35 19 2 11.43 2"/>
    </Svg>
  );
};

export default Icon;
